import React from "react";
import { links } from "../utils/link";
import Github from "../assets/image/github.png";
import Slack from "../assets/image/slack.png";

const Main = () => {
  return (
    <main className="container mx-auto w-full mb-20">
      <div className="flex flex-col gap-y-4 items-center justify-center">
        {links.map((link) => (
          <a
            href={link.link}
            id={link.tag}
            key={link.id}
            className="font-semibold text-[#101828] text-md bg-[#EAECF0] text-center rounded-md border border-[#eaecf0] py-5 max-w-6xl w-10/12 hover:bg-[#D0D5DD] px-2"
            target="_blank"
            rel="noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
      <div className="flex gap-x-4 items-center justify-center mt-8">
        <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U048P0W7709">
          <img src={Slack.src} alt="slack" />
        </a>
        <a href="https://github.com/Qreamville">
          <img src={Github.src} alt="github" />
        </a>
      </div>
    </main>
  );
};

export default Main;
