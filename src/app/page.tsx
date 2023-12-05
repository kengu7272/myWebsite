"use client"

import {  useEffect, useState } from 'react';
import darkModeToggle from "./darkMode/darkModeToggle"
import scrollTo from './scrollTo/scrollTo';
import Image from 'next/image';

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('darkMode');
    }
  });

  useEffect(() => {
    if(darkMode && darkMode == 'true') {
      darkModeToggle('true');
      localStorage.setItem('darkMode', 'true');
    }
    else {
      darkModeToggle('false');
      localStorage.setItem('darkMode', 'false');
    }

  }, [darkMode])

  return (
    <>
      <header id="header" className="flex w-[100vw] h-20 flex-row items-center justify-center gap-6 text-4xl desktop:text-2xl top-0 fixed border-b bg-[#f5f5f5]">
        <button className="hover:border-b border-gray-300 py-1" onClick={() => {window.scrollTo({ top: 0, behavior: 'smooth' })}}>Kevin Nguyen</button>
        <button className="hover:border-b border-gray-300 hidden desktop:block py-1" onClick={() => scrollTo('about')}>About Me</button>
        <button className="hover:border-b border-gray-300 hidden desktop:block py-1" onClick={() => scrollTo('education')}>Education</button>
        <button className="hover:border-b border-gray-300 hidden desktop:block py-1" onClick={() => scrollTo('experience')}>Experience</button>
        <button onClick={() => {darkMode && darkMode === 'false' ? setDarkMode('true') : setDarkMode('false')}}><Image src="/darkMode.svg" alt='dark mode icon' className="w-10 desktop:w-7 h-auto"/></button>
      </header>

      <main id="main" className='w-[100vw] desktop:w-[60vw] flex flex-col items-center mt-20 mx-auto bg-[#f5f5f5] rounded-xl'>
        <section id="about" className='w-full flex flex-col items-center mt-10'>
          <h1>About me</h1>

          <div className="flex flex-col desktop:flex-row items-center justify-center w-full mt-10 gap-12">
            <div className="w-[95%] desktop:w-[45%] flex flex-col items-center">
              <p>
                Hi! I&apos;m Kevin, and I was born and raised in Akron, Ohio. I currently attend The University of Akron for a Bachelor&apos;s in Computer Science and have previously
                completed an Associate&apos;s in Technical Studies there during high school as well. I&apos;ll be graduating in 2024 and aspire to be a software engineer. 
                <br /><br />
              </p>
              <p className="font-bold w-full text-center text-lg">Pictured is me and my girlfriend Britney <span className="hidden desktop:block">&rarr;</span></p>
            </div>
            <Image alt='me and my girlfriend' className="w-[95%] desktop:w-[45%] h-auto rounded-2xl" src="/mengf.jpg" /> 
          </div>      

          <br />

          <div className="flex flex-col desktop:flex-row items-center justify-center w-full gap-12">
            <Image alt='my mt-10' className="w-[95%] desktop:w-[45%] h-auto rounded-2xl hidden desktop:block" src="/mt10.jpg"/>
            <div className="w-[95%] desktop:w-[45%]">
              <p>
                Some of my hobbies include lifting, video games, and riding my motorcycle. The motorcycle was a more recent impulsive purchase. For the interested people, it is a 2021 Yamaha MT-10, that i just upgraded from a 2023 Yamaha R3!
                <br /><br />
                Fun fact: I got hit by a car the first day I got my new bike and had to wait a month to get it fixed.
                <br /><br />
              </p>
              <p className="font-bold w-full text-center text-lg">Pictured is my MT-10 <span className="hidden desktop:block">&larr;</span></p>
            </div>
            <Image alt='my mt=10' className="w-[95%] latop:w-[45%] h-auto rounded-2xl desktop:hidden" src="/mt10.jpg"/>
          </div>

          <br />
        </section>

        <section id="education" className='w-full flex flex-col items-center mt-10'>
          <h1>Education</h1>
          
          <div className="w-full flex justify-center mt-10 flex-wrap gap-2">
            <div className="flex flex-col items-center border p-8 desktop:p-2 w-full desktop:w-[45%] h-96 desktop:h-56 rounded-xl hover:border-gray-300">
              <h2>The University of Akron</h2>
              <p>2020-2024</p>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p>After High School, I decided to pursue a Bachelor&apos;s in <span className="font-bold">Computer Science</span>!
                  I mainly learned C++, web technologies, and a little bit of Python during my coursework here.</p>
              </div>
            </div>

            <div className="flex flex-col items-center border p-8 desktop:p-2 w-full desktop:w-[45%] h-96 desktop:h-56 rounded-xl hover:border-gray-300">
              <h2>The University of Akron</h2>
              <p>2018-2020</p>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p>During High School, I was offered an opportunity to get an Associate&apos;s degree through the University of Akron
                  during my time at the Portage Lakes Career Center, granting an Associate&apos;s in <span className="font-bold">Technical Studies</span>!</p>
              </div>
            </div>

            <div className="flex flex-col items-center border p-8 desktop:p-2 w-full desktop:w-[45%] h-96 desktop:h-56 rounded-xl hover:border-gray-300">
              <h2>Portage Lakes Career Center</h2>
              <p>2018-2020</p>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p>During my Junior and Senior years in High School, I chose to attend a career tech school with a focus in the <span className="font-bold">Networking/Cyber Academy Classes</span>!
                  There I learned the basics of networking, technical terms, HTML, and other various things related to technology.</p>
              </div>
            </div>

            <div className="flex flex-col items-center border p-8 desktop:p-2 w-full desktop:w-[45%] h-96 desktop:h-56 rounded-xl hover:border-gray-300">
              <h2>Coventry High School</h2>
              <p>2016-2020</p>
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p>I attended this little school here in the city of Akron where I eventually graduated second in my class!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className='w-full flex flex-col items-center mt-10 gap-2 mb-20'>
          <h1>Experience</h1>

          <div className='w-full desktop:w-[90%] flex flex-col justify-center items-center border rounded-xl hover:border-gray-300 mt-10 p-8 h-96'>
            <h2 className='w-full text-center'>Analytics Intern</h2>
            <h3 className='w-full text-center'>Biblish</h3>
            <p className='w-full text-center font-bold'>Nov 2023 - Feb 2024</p>
            <p className='mx-4 desktop:mx-20 text-center mt-2'>
              I accepted a position at Biblish in November of 2023 where I would mainly work on their product Papertrail! 
              There I leveraged tools such as Retool and PostHog to retrieve and collect data from the application to 
              create insightful dashboards that provided comprehensive visibility into the performance and usage of Papertrail.     
            </p>
          </div>

          <div className='w-full desktop:w-[90%] flex flex-col justify-center items-center border rounded-xl hover:border-gray-300 p-8 h-96'>
            <h2 className='w-full text-center'>IT Intern</h2>
            <h3 className='w-full text-center'>Goodyear</h3>
            <p className='w-full text-center font-bold'>May 2023 - Aug 2023</p>
            <p className='mx-4 desktop:mx-20 text-center mt-2'>
              I interned at Goodyear during the summer of 2023. There, I was on the Flexera team which 
              was their choice of a software asset management tool. Utilizing Flexera and tools such as 
              Excel, I was able to gather and monitor data regarding commercial software usage from every tracked device to 
              ensure software license compliance.
            </p>
          </div>

          <div className='w-full desktop:w-[90%] flex flex-col justify-center items-center border rounded-xl hover:border-gray-300 p-8 h-96'>
            <h2 className='w-full text-center'>Shift Leader</h2>
            <h3 className='w-full text-center'>Dairy Queen</h3>
            <p className='w-full text-center font-bold'>Jul 2019 - Present</p>
            <p className='mx-4 desktop:mx-20 text-center mt-2'>
              My first job! Here, I worked with a team ranging from 6-12 employees and collaborated to 
              complete orders and ensure customer satisfaction. As a shift leader, I assisted to train employees, 
              maintain all stations, and handled cash-related duties. 10/10, would recommend for a first job.
            </p>
          </div>
        </section>
      </main>

      <footer id='footer' className='w-[100vw] h-20 flex flex-row justify-center items-center border-t gap-2'>
        <p>Hey, you made it to the bottom!</p>
        <button onClick={() => {scrollTo('about')}} className='border-b hover:border-gray-300 py-1 font-bold'>Scroll to top</button>
      </footer>
    </>
  );
}