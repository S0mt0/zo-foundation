import Image from "next/image";

export const TeamMember = ({
  name,
  description,
  imgUrl = "/assets/img/anonymous-user.webp",
  role = "Member",
}: {
  imgUrl?: string;
  name: string;
  role?: string;
  description?: string;
}) => {
  return (
    <div className="shadow overflow-hidden hover:shadow-md transition-shadow duration-200 w-full max-w-sm border bg-white text-sm">
      <Image
        src={imgUrl}
        priority
        width={300}
        height={300}
        alt="Team Member"
        className="w-full h-72 object-center"
      />
      <div className="p-4 text-center">
        <strong className="capitalize">{name}</strong>
        <div>{role}</div>
        <p className="mt-1.5">{description}</p>
      </div>
    </div>
  );
};
