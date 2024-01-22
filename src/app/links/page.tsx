import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <main className="flex flex-col items-center gap-8 h-full">
        <h1 className="font-bold text-4xl mt-32">My Links (so far)</h1>
        <Link
          href="https://github.com/kengu7272"
          className="hover:scale-105 shadow-sm rounded-lg bg-white h-20 flex justify-center items-center w-72 gap-4 "
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
          className="hover:scale-105 w-72 h-20 shadow-sm rounded-lg bg-white flex justify-center items-center gap-4"
        >
          <strong className="text-3xl">LinkedIn</strong>
          <Image
            src={"/linkedin.svg"}
            height={50}
            width={50}
            alt="github logo"
          />
        </Link>
      </main>
    </div>
  );
}
