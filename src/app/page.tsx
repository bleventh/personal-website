
import Head from "next/head";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai";


export default function Home() {
  return (
    <div className="min-h-screen bg-green-500 text-white relative">
      <Head>
        <title>Brandon's Personal Page</title>
        <meta name="description" content="My personal page"/>
      </Head>

      <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1zQNiKio9l-rOuXcUKZM2PUZJx3aSQmZN/view?usp=sharing" className="absolute top-4 right-4 bg-white text-green-500 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white border border-green-500 transition ">
      Resume
      </a>

      <section className="flex flex-col items-center text-center justify-center h-screen">
        <h1 className="text-5xl font-bold">Hello, I'm Brandon</h1>
        
        <img
          src="/me.jpeg" 
          alt="Brandon's Photo"
          className="w-32 h-32 rounded-full mt-6"
        />

        <p className="text-xl mt-4">Software Engineer</p>
        <p className="text-lg mt-4">Currently working on all things Wallet at Apple</p>
        <div className="flex space-x-8 mt-10">
          <a href="https://github.com/bleventh" target="_blank" rel="noopener noreferrer">
            <AiFillGithub></AiFillGithub>
          </a>
          <a href="https://linkedin.com/in/brandon-leventhal" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin></AiFillLinkedin>
          </a>
        </div>
      </section>
    </div>
  );
}
