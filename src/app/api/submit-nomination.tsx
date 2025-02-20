import type { NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import cloudinary from "../../lib/cloudinary"

const prisma = new PrismaClient()

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { supportingDocs, ...nominationData } = req.body

      let supportingDocsUrl = null
      if (supportingDocs) {
        const uploadResponse = await cloudinary.uploader.upload(supportingDocs, {
          folder: "ibiea-nominations",
        })
        supportingDocsUrl = uploadResponse.secure_url
      }

      const nomination = await prisma.nomination.create({
        data: {
          ...nominationData,
          supportingDocs: supportingDocsUrl,
        },
      })

      res.status(200).json({ message: "Nomination submitted successfully", nomination })
    } catch (error) {
      console.error("Error submitting nomination:", error)
      res.status(500).json({ message: "Failed to submit nomination" })
    }
  } else {
    res.setHeader("Allow", ["POST"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

