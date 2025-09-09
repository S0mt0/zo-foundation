import { CommentForm } from "./form";

type Props = {
  settingsDataPromise: Promise<ApiResponse<IWebsiteSettings> | undefined>;
  blogId: string;
};

export const BlogCommentForm = async ({
  settingsDataPromise,
  blogId,
}: Props) => {
  const settings = (await settingsDataPromise)?.data;
  if (!settings || !settings.blogComments) return null;

  return (
    <div className="w-full space-y-4">
      <h2 className="font-extrabold text-2xl text-black capitalize">
        Leave a comment
      </h2>
      <p>Your email address will not be published.</p>
      <CommentForm blogId={blogId} />
    </div>
  );
};
