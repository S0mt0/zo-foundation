import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blogs & Updates",
    template: "Blogs & Updates | %s",
  },
  description:
    "Stay informed with the latest news, success stories, and updates from the Zita-Onyeka Foundation. Learn how we’re making a difference in the lives of women, youth, and communities.",
};

export default function BlogsPage() {
  return <main>blogs</main>;
}
