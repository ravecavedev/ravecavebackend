import "dotenv/config.js";
import express from 'express';
import { Request, Response } from 'express';
import { URLrouter } from './routes/url'
import { connectToMondoDB } from './db'
import { URL } from './models/url'

const app = express();
const port = process.env.PORT_DEVELOPMENT || 3000;
connectToMondoDB(`mongodb+srv://skdrpatrick:${process.env.MONGO_DB_PASS_ATLAS}@patrickdevcluster.wibpgcy.mongodb.net/`)

app.use(express.json())
app.use('/url', URLrouter)

app.get("/:shortId", async (request: Request, response: Response) => {
  const shortId = request.params.shortId
  const entry = await URL.findOneAndUpdate({ shortId }, { $push: { visitHistory: { timestamp: Date.now() } } })
  response.redirect(entry?.redirectUrl ? entry.redirectUrl : "https://google.com")
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});