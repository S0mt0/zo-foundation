export const BASE_URL = "https://www.zitaonyekafoundation.org";

export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://www.admin.zitaonyekafoundation/api"
    : "http://localhost:3000/api";
