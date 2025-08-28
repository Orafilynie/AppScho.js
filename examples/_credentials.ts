import { config } from "dotenv";
import { join } from "node:path";

// Load the `.env` file configuration.
config({ path: join(__dirname, ".env") });

export const credentials = {
  instance: process.env.INSTANCE!,
  password: process.env.PASSWORD!,
  username: process.env.USERNAME!,
  oauth: process.env.OAUTH!,
  refresh: process.env.REFRESH!
};
