import React from 'react';
import robot from '../assets/robot.svg';

const about = () => {
  return (
    <section className="relative flex min-h-screen items-center">
      <div className="absolute top-0 left-0 h-40 w-full bg-[#2C49FA]"></div>

      <div className="mt-50 min-w-1/2 px-8 sm:mt-90 lg:mt-0 lg:w-1/2 lg:px-20">
        <h1 className="pb-20 text-5xl font-extrabold text-[#3F3D56]">
          Sobre o mentorIA
        </h1>
        <p className="pb-12 text-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book.
        </p>
        <p className="text-lg">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>

      <img
        src={robot}
        alt="robot"
        className="absolute -top-1 right-0 h-1/3 lg:-top-20 lg:h-full"
      />
    </section>
  );
};

export default about;
