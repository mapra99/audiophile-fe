import { installGlobals } from "@remix-run/node";
import "@testing-library/jest-dom/extend-expect";

installGlobals();

process.env.SESSION_SECRET = "super-duper-s3cret"
process.env.AUDIOPHILE_API_BASE_URL = "http://0.0.0.0:3001"
process.env.AUDIOPHILE_API_KEY = "audiophile"
process.env.AUDIOPHILE_API_VERSION = "v1"
