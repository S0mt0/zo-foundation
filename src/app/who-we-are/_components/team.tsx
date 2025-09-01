"use client";
import { useState } from "react";
import Image from "next/image";

export const OurTeam = ({ teams }: { teams?: ITeamMember[] }) => {
  if (!teams) return null;

  return (
    <section className="py-20 px-6 md:px-14 bg-gray-100">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-bold text-red-700 uppercase text-center mb-14">
          Meet The Team
        </h2>
        <div className="flex flex-col xs:flex-row flex-wrap gap-8 justify-center">
          {teams.map(({ name, role, avatar, bio }, i) => {
            const [imgSrc, setImgSrc] = useState(
              avatar?.trim().length ? avatar : "/assets/img/anonymous-user.webp"
            );

            return (
              <div
                key={i}
                className="overflow-hidden hover:shadow-md transition-shadow duration-200 w-full max-w-sm border bg-white text-sm"
              >
                <Image
                  src={imgSrc}
                  priority
                  width={300}
                  height={300}
                  alt={`Team member: ${name}`}
                  className="w-full aspect-square object-center object-cover"
                  onError={() => setImgSrc("/assets/img/anonymous-user.webp")}
                />
                <div className="p-6 text-center flex flex-col">
                  <strong className="capitalize text-lg">{name}</strong>
                  <span className="text-red-700">({role})</span>
                  <p className="mt-1.5">{bio}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
