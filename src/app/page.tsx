export default function Home() {
  return (
    <>
    <header className="hidden laptop:flex w-[100vw] h-20 flex-row items-center justify-center gap-6 text-2xl">
      <button className="hover:border-b border-gray-300">Kevin Nguyen</button>
      <button className="hover:border-b border-gray-300">About Me</button>
      <button className="hover:border-b border-gray-300">Education</button>
      <button className="hover:border-b border-gray-300">Professional Experience</button>
    </header>
    <header className="laptop:hidden text-4xl w-[100vw] flex justify-center h-20 items-center">Kevin's Website!</header>

    <main className='w-[100vw] flex flex-col items-center'>
      <section className='w-[90%] laptop:w-3/5 flex flex-col items-center mt-10'>
        <h1>About me</h1>
        <div className="flex flex-col laptop:flex-row items-center justify-center w-full gap-4 mt-10">
          <div className="w-[95%] laptop:w-1/2">
            <p className="mr-auto">
              Hi! I'm Kevin, and I was born and raised in Akron, Ohio. I currently attend The University of Akron for a Bachelor's in Computer Science and have previously
              completed an Associate's in Technical Studies there during high school as well. I'll be graduating in 2024 and aspire to be a software engineer. 
              <br /><br />
            </p>
            <p className="font-bold w-full text-center laptop:text-right">Pictured is me and my girlfriend Britney</p>
          </div>
          <img className="w-[95%] laptop:w-1/2 h-auto rounded-2xl" src="/mengf.jpg" /> 
        </div>      
        <br />
        <div className="flex flex-col laptop:flex-row items-center justify-center w-full gap-4">
          <img className="w-[95%] laptop:w-1/2 h-auto rounded-2xl laptop:mr-auto hidden laptop:block" src="/mt10.jpg"/>
          <div className="w-[95%] laptop:w-1/2">
            <p>
              Some of my hobbies include lifting, video games, and riding my motorcycle. The motorcycle was a more recent impulsive purchase. For the interested people, it is a 2021 Yamaha MT-10, that i just upgraded from a 2023 Yamaha R3!
              <br /><br />
              Fun fact: I got hit by a car the first day I got to ride my new bike and had to wait a month to get it fixed.
              <br /><br />
            </p>
            <p className="font-bold w-full text-center">Pictured is my MT-10</p>
          </div>
          <img className="w-[95%] latop:w-1/2 h-auto rounded-2xl laptop:mr-auto laptop:hidden" src="/mt10.jpg"/>
        </div>
        <br />
      </section>

      <section className='w-3/5 flex flex-col items-center'>
        <h1>Education</h1>
        
      </section>
    </main>
    </>
  );
}