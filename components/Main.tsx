import React from "react";
import { links } from "../utils/link";
import Github from "../assets/image/github.png";
import Slack from "../assets/image/slack.png";
import Image from "next/image";

const Main = () => {
  return (
    <main className="container mx-auto w-full mb-20">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        {links.map((link) => (
          <button
            id={link.tag}
            className="bg-[#EAECF0] text-center rounded-md border border-[#eaecf0] py-3 max-w-6xl w-11/12"
            key={link.id}
          >
            <a
              href={link.link}
              className="font-semibold text-[#101828] text-md"
            >
              {link.name}
            </a>
          </button>
        ))}
      </div>
      <div className="flex gap-x-4 items-center justify-center mt-8">
        <Image src={Slack} alt="slack" />
        <Image src={Github} alt="github" />
      </div>
    </main>
  );
};

export default Main;
