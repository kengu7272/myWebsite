"use client"

export default function Home() {
  const scrollTo = (target: string) => {
    const element: HTMLElement | null = document.getElementById(target);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
    <header className="flex w-[100vw] h-20 flex-row items-center justify-center gap-6 text-4xl laptop:text-2xl top-0 fixed bg-[#f5f5f5] border-b">
      <button className="hover:border-b border-gray-300 py-2" onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}}>Kevin Nguyen</button>
      <button className="hover:border-b border-gray-300 hidden laptop:block py-2" onClick={() => scrollTo('about')}>About Me</button>
      <button className="hover:border-b border-gray-300 hidden laptop:block py-2" onClick={() => scrollTo('education')}>Education</button>
      <button className="hover:border-b border-gray-300 hidden laptop:block py-2" onClick={() => scrollTo('experience')}>Experience</button>
    </header>

    <main className='w-[100vw] flex flex-col items-center mt-16'>
      <section id="about" className='w-[90%] laptop:w-[55%] flex flex-col items-center mt-10'>
        <h1>About me</h1>

        <div className="flex flex-col laptop:flex-row items-center justify-center w-full mt-10 gap-12">
          <div className="w-[95%] laptop:w-[45%] flex flex-col items-center">
            <p>
              Hi! I'm Kevin, and I was born and raised in Akron, Ohio. I currently attend The University of Akron for a Bachelor's in Computer Science and have previously
              completed an Associate's in Technical Studies there during high school as well. I'll be graduating in 2024 and aspire to be a software engineer. 
              <br /><br />
            </p>
            <p className="font-bold w-full text-center text-lg">Pictured is me and my girlfriend Britney <span className="hidden laptop:block">&rarr;</span></p>
          </div>
          <img className="w-[95%] laptop:w-[45%] h-auto rounded-2xl" src="/mengf.jpg" /> 
        </div>      

        <br />

        <div className="flex flex-col laptop:flex-row items-center justify-center w-full gap-12">
          <img className="w-[95%] laptop:w-[45%] h-auto rounded-2xl hidden laptop:block" src="/mt10.jpg"/>
          <div className="w-[95%] laptop:w-[45%]">
            <p>
              Some of my hobbies include lifting, video games, and riding my motorcycle. The motorcycle was a more recent impulsive purchase. For the interested people, it is a 2021 Yamaha MT-10, that i just upgraded from a 2023 Yamaha R3!
              <br /><br />
              Fun fact: I got hit by a car the first day I got my new bike and had to wait a month to get it fixed.
              <br /><br />
            </p>
            <p className="font-bold w-full text-center text-lg">Pictured is my MT-10 <span className="hidden laptop:block">&larr;</span></p>
          </div>
          <img className="w-[95%] latop:w-[45%] h-auto rounded-2xl laptop:hidden" src="/mt10.jpg"/>
        </div>

        <br />
      </section>

      <section id="education" className='w-[90%] laptop:w-[60%] flex flex-col items-center mt-10'>
        <h1>Education</h1>
        
        <div className="w-full flex justify-center mt-10 flex-wrap gap-2">
          <div className="flex flex-col items-center border p-8 laptop:p-2 w-full laptop:w-[45%] h-96 laptop:h-52 rounded-xl hover:border-gray-300">
            <h2>The University of Akron</h2>
            <p>2020-2024</p>
            <div className="flex flex-col items-center justify-center h-full">
              <p>After High School, I decided to pursue a Bachelor's in <span className="font-bold">Computer Science</span>!
                 I mainly learned C++, web technologies, and a little bit of Python during my coursework here.</p>
            </div>
          </div>

          <div className="flex flex-col items-center border p-8 laptop:p-2 w-full laptop:w-[45%] h-96 laptop:h-52 rounded-xl hover:border-gray-300">
            <h2>The University of Akron</h2>
            <p>2018-2020</p>
            <div className="flex flex-col items-center justify-center h-full">
              <p>During High School, I was offered an opportunity to get an Associate's degree through the University of Akron
                during my time at the Portage Lakes Career Center, granting an Associate's in <span className="font-bold">Technical Studies</span>!</p>
            </div>
          </div>

          <div className="flex flex-col items-center border p-8 laptop:p-2 w-full laptop:w-[45%] h-96 laptop:h-52 rounded-xl hover:border-gray-300">
            <h2>The Portage Lakes Career Center</h2>
            <p>2018-2020</p>
            <div className="flex flex-col items-center justify-center h-full">
              <p>During my Junior and Senior years in High School, I chose to attend a career tech school with a focus in the <span className="font-bold">Networking/Cyber Academy Classes</span>!
                There I learned the basics of networking, technical terms, HTML, and other various things related to technology.</p>
            </div>
          </div>

          <div className="flex flex-col items-center border p-8 laptop:p-2 w-full laptop:w-[45%] h-96 laptop:h-52 rounded-xl hover:border-gray-300">
            <h2>Coventry High School</h2>
            <p>2016-2020</p>
            <div className="flex flex-col items-center justify-center h-full">
              <p>I attended this little school here in the city of Akron where I eventually graduated second in my class!</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experience">

      </section>
    </main>
    </>
  );
}