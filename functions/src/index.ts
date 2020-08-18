import * as functions from 'firebase-functions';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import apiSource from './api';

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/v1', apiSource);

// Expose Express API as a single Cloud Function:
exports.api = functions.https.onRequest(app);
