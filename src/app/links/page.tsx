"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [destroy, setDestroy] = useState(false);

  return (
    <div className="w-full h-screen flex justify-center items-center overflow-hidden">
      <main className="flex flex-col items-center gap-8 h-full">
        <h1 className="font-bold text-4xl mt-32">
          {!destroy ? "My Links (so far)" : "Great, now what?"}
        </h1>
        <Link
          href="https://github.com/kengu7272"
          className={clsx({
            "hover:scale-105 shadow-sm rounded-lg bg-white transition-all ease-in-out h-20 flex justify-center items-center w-72 gap-4 border border-gray-300 ":
              true,
            "opacity-0 translate-y-[100vh] duration-[2000ms] ": destroy,
          })}
        >
          <strong className="text-3xl">Github</strong>
          <Image
            src={"/github-mark.svg"}
            height={50}
            width={50}
            alt="github logo"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/kevin-nguyen-160354232/"
          className={clsx({
            "hover:scale-105 w-72 h-20 shadow-sm ease-in-out rounded-lg bg-white transition-all flex justify-center items-center gap-4 border border-gray-300 ":
              true,
            "opacity-0 translate-y-[100vh] duration-[2000ms] ": destroy,
          })}
        >
          <strong className="text-3xl">LinkedIn</strong>
          <Image
            src={"/linkedin.svg"}
            height={50}
            width={50}
            alt="linkedin logo"
          />
        </Link>
        <Link
          href="/"
          className={clsx({
            "hover:scale-105 w-72 h-20 ease-in-out shadow-sm rounded-lg bg-white transition-all flex justify-center items-center gap-4 border border-gray-300 ":
              true,
            "opacity-0 translate-y-[100vh] duration-[2000ms]": destroy,
          })}
        >
          <strong className="text-3xl">My Website</strong>
          <Image
            src={"/logo.png"}
            height={50}
            width={50}
            alt="mywebsite logo"
          />
        </Link>
        <button
          onClick={() => setDestroy(true)}
          className={clsx({
            "hover:scale-105 text-3xl ease-in-out text-gray-50 font-bold w-72 h-20 shadow-sm transition-all rounded-lg bg-red-400 flex justify-center hover:bg-red-500 active:bg-red-600  items-center gap-4 border":
              true,
            "opacity-0 translate-y-[100vh] duration-[2000ms] ": destroy,
          })}
        >
          Don&apos;t Click!!!
        </button>
      </main>
    </div>
  );
}
