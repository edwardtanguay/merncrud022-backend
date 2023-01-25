import dotenv from 'dotenv';
import Cryptr from 'cryptr';

const cryptr = new Cryptr('SECRETKEY');
dotenv.config();

export const APP_NAME = process.env.APP_NAME;

export const SECONDS_TILL_SESSION_TIMEOUT = Number(process.env.SECONDS_TILL_SESSION_TIMEOUT);

export const PORT = process.env.PORT;

export const SESSION_SECRET = process.env.SESSION_SECRET;

export const ADMIN_HASH = process.env.ADMIN_HASH;

export const FRONTEND_URL = process.env.FRONTEND_URL;

export const NODE_ENVIRONMENT = process.env.NODE_ENVIRONMENT;

const mongodbConnectionTemplate = process.env.MONGODB_CONNECTION;
const password = cryptr.decrypt(process.env.MONGODB_CONNECTION_ENCRYPTED_PASSWORD);
export const MONGODB_CONNECTION = mongodbConnectionTemplate.replace(/===PASSWORD===/,password);