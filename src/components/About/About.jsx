import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-[9vw] lg:px-[15vw] bg-[#0b0b0b] text-white font-sans"
    >
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 md:gap-x-32">
        {/* Left Side: Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Hi, I'm</h1>
          <h2 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#a855f7] mb-6">
            Ayush <span className='pt-3'>Mishra</span>
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold mb-4">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['Fullstack Developer', 'UI/UX Designer', 'Coder']}
              speed={100}
              eraseSpeed={50}
              typingDelay={300}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
            I'm a full-stack web developer focused on creating responsive and user-friendly websites. I've built three projects using various technologies, including the MERN stack, and continue to sharpen my skills through hands-on learning.
          </p>

          <a
            href="https://drive.google.com/file/d/1aIJy68auhkmen9mzGIuYbArTUfEUvGKL/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-3 text-white text-md font-semibold rounded-full bg-gradient-to-r from-[#8245ec] to-[#a855f7] shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
          >
            DOWNLOAD CV
          </a>
        </div>

{/* Right Side: Image with Glow */}
<div className="lg:w-1/2 flex justify-center">
  <div
    className="rounded-full bg-gradient-to-br from-[#8245ec] to-[#a855f7] p-1 shadow-[0_0_40px_#8245ec80] -mt-6 sm:-mt-10"
  >
    <div className="bg-[#0b0b0b] rounded-full overflow-hidden w-60 h-60 sm:w-80 sm:h-80 md:w-[23rem] md:h-[23rem]">
      <img
        src={profileImage}
        alt="Ayush Mishra"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default About;
