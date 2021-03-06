import { google } from 'googleapis';
import dotenv from "dotenv"
dotenv.config()

const clientid = process.env.CLIENT_ID || undefined
const clientsecret = process.env.CLIENT_SECRET || undefined
const redirecturl = process.env.REDIRECT_URI || undefined
const apikey = process.env.API_KEY || undefined
if(!clientid) throw new Error("CLIENT_ID is required")
if(!clientsecret) throw new Error("CLIENT_SECRET is required")
if(!redirecturl) throw new Error("REDIRECT_URI is required")
if(!apikey) throw new Error("API_KEY is required")
const oauth2Client = new google.auth.OAuth2(clientid, clientsecret, redirecturl)
const customsearch = google.customsearch({
  version: 'v1',
  auth: apikey,
})
export {
  customsearch,
  oauth2Client,
}