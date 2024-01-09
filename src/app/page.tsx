import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { HeaderButtons, FooterButton } from "./_components/headerFooterButtons";

export default function Home() {
  return (
    <div className="text-center">
      <header
        id="header"
        className="flex w-screen h-20 dark:bg-zinc-700 dark:border-zinc-600 flex-row items-center justify-center gap-6 text-4xl desktop:text-2xl top-0 fixed border-b bg-white shadow-sm opacity-95"
      >
        <HeaderButtons />
      </header>

      <main
        id="main"
        className="w-screen desktop:w-[60vw] dark:bg-zinc-700 flex flex-col items-center mt-20 mx-auto bg-white rounded-xl shadow-md"
      >
        <section id="about" className="w-full flex flex-col items-center mt-10">
          <h1>About me</h1>

          <div className="flex flex-col desktop:flex-row items-center justify-center w-full mt-10 gap-12">
            <div className="w-[95%] desktop:w-[45%] flex flex-col items-center">
              <p>
                Hi! I&apos;m Kevin, and I was born and raised in Akron, Ohio. I
                currently attend The University of Akron for a Bachelor&apos;s
                in Computer Science and have previously completed an
                Associate&apos;s in Technical Studies there during high school
                as well. I&apos;ll be graduating in 2024 and aspire to be a
                software engineer.
                <br />
                <br />
              </p>
              <p className="font-bold w-full text-center text-lg">
                Pictured is me and my girlfriend Britney
              </p>
              <ChevronRight className="hidden desktop:block mt-4 h-8 w-auto" />
            </div>
            <Image
              alt="me and my girlfriend"
              width={1000}
              height={1000}
              className="w-[95%] desktop:w-[45%] h-auto rounded-2xl shadow-md"
              src="/mengf.jpg"
            />
          </div>

          <br />

          <div className="flex flex-col desktop:flex-row items-center justify-center w-full gap-12">
            <Image
              alt="my mt-10"
              width={1000}
              height={1000}
              className="w-[95%] desktop:w-[45%] h-auto rounded-2xl hidden shadow-md desktop:block"
              src="/mt10.jpg"
            />
            <div className="w-[95%] desktop:w-[45%] flex flex-col justify-center items-center mt-10">
              <p>
                Some of my hobbies include lifting, video games, and riding my
                motorcycle. The motorcycle was a more recent impulsive purchase.
                For the interested people, it is a 2021 Yamaha MT-10, that i
                just upgraded from a 2023 Yamaha R3!
                <br />
                <br />
                Fun fact: I got hit by a car the first day I got my new bike and
                had to wait a month to get it fixed.
                <br />
                <br />
              </p>
              <p className="font-bold w-full text-center text-lg">
                Pictured is my MT-10
              </p>
              <ChevronLeft className="hidden desktop:block mt-4 h-8 w-auto" />
            </div>
            <Image
              alt="my mt=10"
              width={1000}
              height={1000}
              className="w-[95%] latop:w-[45%] h-auto rounded-2xl desktop:hidden shadow-md"
              src="/mt10.jpg"
            />
          </div>

          <br />
        </section>

        <section
          id="education"
          className="w-full flex flex-col items-center mt-10"
        >
          <h1>Education</h1>

          <div className="w-full flex justify-center mt-10 flex-wrap gap-4">
            <div className="flex dark:border-zinc-600 shadow-md flex-col items-center border p-8 desktop:p-2 w-full desktop:w-[45%] h-96 desktop:h-56 rounded-xl hover:scale-105">
              <h2>The University of Akron</h2>
              <p>2020-2024</p>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p>
                  After High School, I decided to pursue a Bachelor&apos;s in{" "}
                  <span className="font-bold">Computer Science</span>! I mainly
                  learned C++, web technologies, and a little bit of Python
                  during my coursework here.
                </p>
              </div>
            </div>

            <div className="flex dark:border-zinc-600 shadow-md flex-col items-center border p-8 desktop:p-2 w-full desktop:w-[45%] h-96 desktop:h-56 rounded-xl hover:scale-105 ">
              <h2>The University of Akron</h2>
              <p>2018-2020</p>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p>
                  During High School, I was offered an opportunity to get an
                  Associate&apos;s degree through the University of Akron during
                  my time at the Portage Lakes Career Center, granting an
                  Associate&apos;s in{" "}
                  <span className="font-bold">Technical Studies</span>!
                </p>
              </div>
            </div>

            <div className="flex shadow-md hover:scale-105 flex-col dark:border-zinc-600 items-center border p-8 desktop:p-2 w-full desktop:w-[45%] h-96 desktop:h-56 rounded-xl ">
              <h2>Portage Lakes Career Center</h2>
              <p>2018-2020</p>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p>
                  During my Junior and Senior years in High School, I chose to
                  attend a career tech school with a focus in the{" "}
                  <span className="font-bold">
                    Networking/Cyber Academy Classes
                  </span>
                  ! There I learned the basics of networking, technical terms,
                  HTML, and other various things related to technology.
                </p>
              </div>
            </div>

            <div className="flex flex-col shadow-md items-center hover:scale-105 border dark:border-zinc-600 p-8 desktop:p-2 w-full desktop:w-[45%] h-96 desktop:h-56 rounded-xl ">
              <h2>Coventry High School</h2>
              <p>2016-2020</p>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p>
                  I attended this little school here in the city of Akron where
                  I eventually graduated second in my class!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="w-full flex flex-col items-center mt-10 gap-4 mb-20"
        >
          <h1>Experience</h1>

          <div className="w-full desktop:w-[90%] hover:scale-105 flex flex-col gap-2 justify-center items-center dark:border-zinc-600 border rounded-xl  mt-10 p-8 h-96 shadow-md">
            <h2 className="w-full text-center">Intern</h2>
            <h3 className="w-full text-center">Biblish</h3>
            <p className="w-full text-center font-bold">Nov 2023 - Feb 2024</p>
            <p className="mx-4 desktop:mx-20 text-center">
              I accepted a position at Biblish in November of 2023 where I would
              mainly work on their products Papertrail and Submissions! There I
              leveraged tools such as Retool and PostHog for analytics and Next
              JS for development.
            </p>
          </div>

          <div className="w-full desktop:w-[90%] flex gap-2 flex-col hover:scale-105 justify-center items-center border dark:border-zinc-600 rounded-xl  p-8 h-96 shadow-md">
            <h2 className="w-full text-center">IT Intern</h2>
            <h3 className="w-full text-center">Goodyear</h3>
            <p className="w-full text-center font-bold">May 2023 - Aug 2023</p>
            <p className="mx-4 desktop:mx-20 text-center">
              I interned at Goodyear during the summer of 2023. There, I was on
              the Flexera team which was their choice of a software asset
              management tool. Utilizing Flexera and tools such as Excel, I was
              able to gather and monitor data regarding commercial software
              usage from every tracked device to ensure software license
              compliance.
            </p>
          </div>

          <div className="w-full desktop:w-[90%] flex gap-2 flex-col justify-center hover:scale-105 items-center border rounded-xl dark:border-zinc-600  p-8 h-96 shadow-md">
            <h2 className="w-full text-center">Shift Leader</h2>
            <h3 className="w-full text-center">Dairy Queen</h3>
            <p className="w-full text-center font-bold">Jul 2019 - Present</p>
            <p className="mx-4 desktop:mx-20 text-center">
              My first job! Here, I worked with a team ranging from 6-12
              employees and collaborated to complete orders and ensure customer
              satisfaction. As a shift leader, I assisted to train employees,
              maintain all stations, and handled cash-related duties. 10/10,
              would recommend for a first job.
            </p>
          </div>
        </section>
      </main>

      <footer
        id="footer"
        className="w-screen h-20 flex dark:bg-zinc-700 dark:border-zinc-600 flex-row justify-center items-center border-t gap-2 bg-white"
      >
        <p>Hey, you made it to the bottom!</p>
        <FooterButton />
      </footer>
    </div>
  );
}
