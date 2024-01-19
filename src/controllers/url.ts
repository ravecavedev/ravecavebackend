import { Request, Response } from 'express';
import { nanoid } from 'nanoid'
import { URL } from '../models/url'

export async function handleGenerateNewShortURL(request: Request, response: Response) {
  const body = request.body
  if (!body.url) return response.status(400).json({ error: "Url is required" })
  const shortID = nanoid(8)
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: []
  })
  response.json({ id: shortID })
}