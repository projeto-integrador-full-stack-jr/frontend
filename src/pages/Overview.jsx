import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Tabs from '../components/Tabs';
// import clsx from 'clsx';

const Overview = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col justify-between">
        <Header />
        <main className="flex-1">
          <section className="relative">
            <article className="p-4">
              <div className="mx-auto -mt-4 flex h-full w-full max-w-4xl flex-col gap-8 rounded-b-4xl bg-[#F4F7F9] p-6 text-[#6D7895] lg:p-10">
                <div className="flex justify-between pt-20">
                  <div className="flex flex-col">
                    <h1 className="pb-2 text-xl font-bold text-[#2D3139]">
                      Codifica Edu
                    </h1>
                    <h2 className="">Estágiario em Suporte</h2>
                  </div>

                  <div className="flex flex-col text-right">
                    <p className="pb-2">2-5 anos de carreira</p>
                    <p>CISO (Chief Information Security Officer)</p>
                  </div>
                </div>

                <p>
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <div>
                  <Tabs />
                </div>
              </div>
            </article>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Overview;
