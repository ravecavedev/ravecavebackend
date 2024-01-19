import express from 'express';
import { handleGenerateNewShortURL } from '../controllers/url'

const URLrouter = express.Router();

URLrouter.post('/', handleGenerateNewShortURL);

export { URLrouter }
