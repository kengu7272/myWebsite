import Image from "next/image";
import Link from "next/link";
import Badge from "./_components/badge";

export default function Page() {
  return (
    <main className="relative w-screen min-h-screen flex flex-col py-24 items-center gap-24 px-2 lg:px-40 2xl:px-72">
      <section className="w-full flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex flex-col justify-center gap-2">
          <h1 className="text-5xl font-bold">Kevin Nguyen</h1>
          <span className="text-xl">Computer Science Student</span>
          <span>Aspiring Software Engineer</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/kengu7272" className="hover:scale-105">
            <Image src={"/github-mark.svg"} height={50} width={50} alt="github logo" />
          </Link>
          <Link href="https://www.linkedin.com/in/kevin-nguyen-160354232/" className="hover:scale-105">
            <Image src={"/linkedin.svg"} height={50} width={50} alt="linkedin logo" />
          </Link>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-center lg:justify-between gap-4 w-full">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-3xl">ABOUT</h1>
          <p>
            I was born and raised in Akron, Ohio, and started my little Computer
            Science journey at The University of Akron. There we mainly worked with 
            languages such as C++, which was utterly confusing at first, yet extremely interesting.
          </p>
          <p>
            I currently have the pleasure of interning at a start up called <strong>Biblish </strong> 
            where I assume a role of a mix between a software development and analytics position.
          </p>
          <p>My interests outside of Computer Science include hanging out with friends and of course girlfriend, video games, lifting, and more recently riding my new motorcycle (2021 Yamaha MT-10 for those interested).</p>
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
          <div className="flex justify-between items-center border w-full lg:gap-8 bg-white shadow-sm py-6 2xl:py-12 px-2 2xl:px-16 rounded-lg">
            <div className="flex flex-col gap-2 text-center">
              <strong>The University of Akron</strong>
              <span>B.S. Computer Science</span>
              <span>2020 - 2024</span>
              <span>3.881</span>
            </div>
            <Image
              src={"/University_of_Akron_seal.svg"}
              alt="UA Logo"
              height={120}
              width={120}
              className="rounded-lg"
            />
          </div>
          <div className="flex justify-between items-center w-full border lg:gap-8 bg-white shadow-sm py-6 px-2 2xl:py-12 2xl:px-16 rounded-lg">
            <div className="flex flex-col gap-2 text-center">
              <strong>The University of Akron</strong>
              <span>A.S. Technical Studies</span>
              <span>2018 - 2020</span>
              <span>4.0</span>
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
        <div className="gap-8 flex flex-col lg:flex-row pt-8">
          <div className="flex flex-col-reverse lg:flex-row lg:px-6 justify-between border items-center w-full bg-white shadow-sm py-2 h-80 px-2 rounded-lg">
            <div className="flex flex-col items-center gap-2 w-3/4 text-center">
              <strong>Biblish</strong>
              <span>Intern</span>
              <span>Nov 2023 - Present</span>
              <ul className="text-sm text-gray-600">
                <li>Next.js full stack development</li>
                <li>Focus on {'"Submissions"'} product</li>
                <li>Retool & PostHog for dashboards & analytics</li>
              </ul>
              <div className="hidden xl:flex items-center justify-center gap-2 flex-wrap">
                <Badge word="Next.js" />
                <Badge word="React" />
                <Badge word="Tailwind CSS" />
                <Badge word="tRPC" />
                <Badge word="Drizzle ORM" />
                <Badge word="MySQL" />
                <Badge word="TypeScript" />
              </div>
            </div>
            <Image
              src={"/biblish.svg"}
              alt="Biblish Logo"
              height={150}
              width={150}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col-reverse border lg:flex-row justify-between lg:px-6 items-center w-full bg-white shadow-sm py-2 h-80 lg:h-80 px-2 rounded-lg">
            <div className="flex flex-col gap-2 text-center w-3/4">
              <strong>Goodyear</strong>
              <span>Intern</span>
              <span>May 2023 - Aug 2023</span>
              <ul className="text-sm text-gray-600">
                <li>Flexera software asset management tool</li>
                <li>Focus on Java licensing and devices on the cloud</li>
              </ul>
              <div className="hidden xl:flex items-center justify-center gap-2 flex-wrap">
                <Badge word="Flexera" />
                <Badge word="Excel" />
              </div>
            </div>
            <Image
              src={"https://www.carlogos.org/tire-logos/goodyear-logo.png"}
              alt="Goodyear Logo"
              height={150}
              width={150}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
