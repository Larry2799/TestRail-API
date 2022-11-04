import * as dotenv from "dotenv";

dotenv.config();

export const APP_URL = process.env.APP_URL;
export const auth = {
  username: process.env.LOGIN,
  password: process.env.PASSWORD,
};
