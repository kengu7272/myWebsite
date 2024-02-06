import Image from "next/image";
import Link from "next/link";
import Badge from "./_components/badge";
import { FileText } from "lucide-react";

export default function Page() {
  return (
    <main className="relative w-full flex flex-col pt-24 pb-8 items-center gap-24 px-2 lg:px-40 2xl:px-72">
      <section className="w-full flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-5xl font-bold">Kevin Nguyen</h1>
          <span className="text-xl">Computer Science Student</span>
          <span>Aspiring Software Engineer</span>
          <Link className="flex gap-1 justify-center items-center rounded-lg w-fit" href="/KevinNguyenResume.pdf" download>
            <span className="text-sky-400 hover:text-sky-500 font-semibold">Resume</span>
            <FileText/>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/kengu7272" className="hover:scale-105">
            <Image
              src={"/github-mark.svg"}
              height={50}
              width={50}
              alt="github logo"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kevin-nguyen-160354232/"
            className="hover:scale-105"
          >
            <Image
              src={"/linkedin.svg"}
              height={50}
              width={50}
              alt="linkedin logo"
            />
          </Link>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center lg:justify-between gap-4 w-full">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-3xl">ABOUT</h1>
          <p>
            I was born and raised in Akron, Ohio, and started my little Computer
            Science journey at The University of Akron. There we mainly worked
            with languages such as C++, which was utterly confusing at first,
            yet extremely interesting.
          </p>
          <p>
            I currently have the pleasure of interning at a start up called{" "}
            <strong>Biblish </strong>
            where I assume a role of a mix between a software development and
            analytics position.
          </p>
          <p>
            My interests outside of Computer Science include hanging out with
            friends and of course girlfriend, video games, lifting, and more
            recently riding my new motorcycle (2021 Yamaha MT-10 for those
            interested).
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image
            src={"/mengf.jpg"}
            alt="Me and my girlfriend"
            height={600}
            width={600}
            className="rounded-lg shadow-sm"
          />
          <span className="text-sm text-gray-500">
            Pictured me and my girlfriend
          </span>
        </div>
      </section>

      <section className="flex flex-col w-full">
        <h1 className="text-3xl">EDUCATION</h1>
        <div className="gap-8 flex flex-col lg:flex-row pt-8">
          <div className="flex justify-between items-center border border-gray-300 w-full lg:gap-8 bg-white shadow-sm py-6 2xl:py-12 px-2 2xl:px-16 rounded-lg">
            <div className="flex flex-col gap-2 text-center">
              <strong>The University of Akron</strong>
              <span>B.S. Computer Science</span>
              <span>2020 - 2024</span>
              <span>3.881 / 4.0</span>
            </div>
            <Image
              src={"/University_of_Akron_seal.svg"}
              alt="UA Logo"
              height={120}
              width={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-between border-gray-300 items-center w-full border lg:gap-8 bg-white shadow-sm py-6 px-2 2xl:py-12 2xl:px-16 rounded-lg">
            <div className="flex flex-col gap-2 text-center">
              <strong>The University of Akron</strong>
              <span>A.S. Technical Studies</span>
              <span>2018 - 2020</span>
              <span>4.0 / 4.0</span>
            </div>
            <Image
              src={"/University_of_Akron_seal.svg"}
              alt="UA Logo"
              height={120}
              width={120}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center w-full">
        <h1 className="text-3xl">EXPERIENCE</h1>
        <div className="gap-8 flex flex-col xl:flex-row pt-8 h-[1250px] lg:h-[700px] xl:h-[500px]">
          <div className="flex flex-col-reverse lg:flex-row lg:px-6 h-1/2 lg:h-full justify-between border border-gray-300 items-center w-full bg-white shadow-sm py-2 px-2 rounded-lg">
            <div className="flex flex-col h-full py-4 items-center justify-between">
              <div className="flex justify-between h-1/3 w-full items-center">
                <div className="flex flex-col">
                  <strong className="text-lg">Biblish</strong>
                  <span>Intern</span>
                  <span>Nov 2023 - Present</span>
                </div>
                <Image
                  src={"/biblish.svg"}
                  alt="Biblish Logo"
                  height={150}
                  width={150}
                  className="rounded-lg"
                />
              </div>
              <p className="h-1/3">
                I started my internship with Biblish in November of 2023. There
                I started with analytics tools such as Retool and PostHog to
                gather and display information regarding the application usage.
                Later, I was offered the opportunity to participate in the full
                stack development of the &quot;Submissions&quot; product and website where
                I utilized modern tools revolving around Next.js to complete
                tasks.
              </p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <Badge word="Next.js" />
                <Badge word="React" />
                <Badge word="Tailwind CSS" />
                <Badge word="tRPC" />
                <Badge word="Drizzle ORM" />
                <Badge word="MySQL" />
                <Badge word="TypeScript" />
              </div>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row lg:px-6 h-1/2 lg:h-full justify-between border border-gray-300 items-center w-full bg-white shadow-sm py-2 px-2 rounded-lg">
            <div className="flex flex-col h-full justify-between py-4 items-center">
              <div className="flex h-1/3 justify-between w-full items-center">
                <div className="flex flex-col">
                  <strong className="text-lg">
                    Goodyear Tire and Rubber Company
                  </strong>
                  <span>Intern</span>
                  <span>May 2023 - Aug 2023</span>
                </div>
                <Image
                  src={"https://www.carlogos.org/tire-logos/goodyear-logo.png"}
                  alt="Goodyear Logo"
                  height={150}
                  width={150}
                  className="rounded-lg"
                />
              </div>
              <p className="h-1/3">
                I started my internship with Goodyear in the summer of 2023. There
                I was placed on the Flexera team, where I learned about and used
                Flexera, their software asset management tool. My focus was the new Java 
                licensing rules and devices on the cloud, and to complete tasks, Flexera 
                was used along with Excel to gather and process data. 
              </p>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <Badge word="Next.js" />
                <Badge word="React" />
                <Badge word="Tailwind CSS" />
                <Badge word="tRPC" />
                <Badge word="Drizzle ORM" />
                <Badge word="MySQL" />
                <Badge word="TypeScript" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
