export const BASE_URL = "https://www.zitaonyekafoundation.org";

// export const API_BASE_URL = "http://localhost:8000/api/v1";

export const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://zof-server.onrender.com"
    : "http://localhost:8000/api/v1";
