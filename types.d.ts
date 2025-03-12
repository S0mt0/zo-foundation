/* eslint-disable @typescript-eslint/no-explicit-any */
type BlockType = "paragraph" | "header" | "list" | "image" | "quote";

interface BlockData {
  text?: string;
  level?: number;
  style?: "unordered" | "ordered";
  items?: string[];
  file?: {
    url: string;
    size?: number;
    name?: string;
    extension?: string;
  };
  caption?: string;
  title?: string;

  [key: string]: any;
}

interface Block {
  id: string;
  type: BlockType;
  data: BlockData;
}

// NGO blog
interface TBlog {
  blogId: string;
  title: string;
  banner: string;
  desc: string;
  featured: boolean;
  content: { blocks: Block[]; time: number; version: string };
  createdAt: string;
  updatedAt: string;

  [key: string]: any;
}

type TBlogSnippet = Omit<TBlog, "content" | "updatedAt">;

// NGO Events
interface TEvent {
  eventId: string;
  title: string;
  desc: string;
  banner: string;
  featured: boolean;
  scheduledFor: string;
  details: string;
}

type TEventSnippet = Omit<TEvent, "details">;

interface MessagePayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject?: string;
}
