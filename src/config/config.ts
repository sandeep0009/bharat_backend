
import dotenv from "dotenv";

dotenv.config();
export const DATABASE_URI=process.env.DATABASE_URI;
export const ADMIN_KEY=process.env.ADMIN_KEY ?? "";