interface IUser {
  name: string;
  email: string;
  image: string;
  emailVerified?: Date | null;
}

type BlogStatus = "published" | "draft" | "scheduled";

interface IBlog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  bannerImage: string;
  status: BlogStatus;
  featured: boolean;
  tags: string[];
  comments: IComment[];
  views: number;
  createdBy: string;
  authorId?: string | null;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date | null;
  author?: IUser | null;
}

interface IComment {
  id: string;
  comment: string;
  authorName: string;
  authorEmail: string;
  blogId: string;
  blog?: Blog;
  createdAt: Date;
  updatedAt: Date;
}

type EventStatus = "upcoming" | "draft" | "completed" | "cancelled";

interface IEvent {
  id: string;
  name: string;
  slug: string;
  detail?: string | null;
  excerpt?: string | null;
  organizer?: string | null;
  date: Date;
  startTime: string;
  endTime: string | null;
  location: string;
  maxAttendees: number | null;
  currentAttendees: number;
  bannerImage: string;
  status: EventStatus;
  featured: boolean;
  tags: string[];
  ticketPrice?: string | null;
  registrationRequired: boolean;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  createdByUser?: IUser | null;
}

interface IMessage {
  sender: string;
  email: string;
  subject: string;
  content: string;
}

interface ITeamMember {
  name: string;
  role: string;
  email: string;
  bio?: string | null;
  avatar?: string | null;
}

interface IFoundationInfo {
  id: string;
  name: string;
  email: string;
  description?: string | null;
  address?: string | null;
  phone?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface ApiResponse<T> {
  message: string;
  data?: T;
}
interface ApiPaginatedResponse<T> extends ApiResponse {
  data: T[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
