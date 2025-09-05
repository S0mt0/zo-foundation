import { apiFetch } from "./util";

interface AllBlogsQuery {
  page?: number;
  limit?: number;
  search?: string;
  fields?: (keyof IBlog)[];
  featured?: "all" | "featured" | "not-featured";
}

export const getAllBlogs = (query?: AllBlogsQuery) =>
  apiFetch<ApiPaginatedResponse<IBlog>>("/blogs", query as any);
