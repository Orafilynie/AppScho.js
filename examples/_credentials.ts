import { config } from "dotenv";
import { join } from "node:path";

// Load the `.env` file configuration.
config({ path: join(__dirname, ".env") });

export const credentials = {
  instance: process.env.INSTANCE!,
  oauth: process.env.OAUTH!,
  password: process.env.PASSWORD!,
  refresh: process.env.REFRESH!,
  username: process.env.USERNAME!
};
