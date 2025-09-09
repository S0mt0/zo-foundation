export const BASE_URL = "https://www.zitaonyekafoundation.org";

export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://admin.zitaonyekafoundation.org/api"
    : "http://localhost:3000/api";
