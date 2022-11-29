import React from 'react';
import Image from '../elements/Image';

const Hero = () => {


  return (
    <div className="relative overflow-hidden">

      <main>
        <div className="bg-gray-900 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-20 h-screen">
          <div className="pt-[5%] md:ml-[5%] lg:ml-none mx-auto max-w-7xl lg:px-8 reveal-from-bottom" data-reveal-delay="200">
            <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">custom software</span>
                    <span className="rainbow block">solutions</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Helping businesses build for the future.
                  </p>
                  <div className="mt-10 sm:mt-12">
                  </div>
                </div>
              </div>
              <div className="mt-12">
                  {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                  <Image
                    height={500}
                    width={500}
                    // className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                    // src="https://tailwindui.com/img/component-images/cloud-illustration-indigo-400.svg"
                    src={require('./../../assets/images/guava-logo.png')}
                    alt="guava fruit"
                  />
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default Hero;