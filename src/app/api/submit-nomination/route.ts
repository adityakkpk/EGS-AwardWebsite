import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { v2 as cloudinary } from "cloudinary"

const prisma = new PrismaClient()

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function POST(request: NextRequest) {
  try {

    const contentType = request.headers.get('content-type');
    if (!contentType?.includes('multipart/form-data')) {
      return NextResponse.json(
        { message: "Invalid content type. Must be multipart/form-data" },
        { status: 400 }
      );
    }

    const formData = await request.formData()
    
    // Extract file and other form data
    const file = formData.get("supportingDocs") as File | null
    const nominationData = {
      fullName: formData.get("fullName") as string,
      designation: formData.get("designation") as string,
      organization: formData.get("organization") as string,
      industry: formData.get("industry") as string,
      country: formData.get("country") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      category: formData.get("category") as string,
      achievements: formData.get("achievements") as string,
      contributions: formData.get("contributions") as string,
      awards: formData.get("awards") as string,
    }

    let supportingDocsUrl = null
    if (file) {
      // Convert file to base64
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)
      const base64File = `data:${file.type};base64,${buffer.toString('base64')}`

      // Upload to Cloudinary
      const uploadResponse = await cloudinary.uploader.upload(base64File, {
        folder: "ibiea-nominations",
        resource_type: "auto"
      })
      supportingDocsUrl = uploadResponse.secure_url
    }

    // Save to database
    const nomination = await prisma.nomination.create({
      data: {
        ...nominationData,
        supportingDocs: supportingDocsUrl,
      },
    })

    return NextResponse.json(
      { message: "Nomination submitted successfully", nomination },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error submitting nomination:", error)
    return NextResponse.json(
      { message: "Failed to submit nomination" },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { message: "Method not allowed" },
    { status: 405 }
  )
}

