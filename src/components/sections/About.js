import React from 'react';
import { DevicePhoneMobileIcon, GlobeAltIcon } from '@heroicons/react/24/outline'
import {FaCubes, FaRegChartBar} from 'react-icons/fa'

const features = [
  {
    name: 'SaaS',
    description:
      'Our software products solve problems and save time for businesses.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Application Development',
    description:
      'Custom built web and mobile projects, designed for seamless user experiences.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Blockchain',
    description:
      'Web3 solutions are our specialty including dApps, DAOs, smart contracts and token engineering.',
    icon: FaCubes
  },
  {
    name: 'Startups',
    description:
      'We love working with early stage startups to bring ideas to life.',
    icon: FaRegChartBar,
  },
]

const About = () => {

  return (
    <section>
      <div className="bg-transparent mb-10 reveal-from-right" data-reveal-delay="100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="sm:text-center">
            <h2 className="text-lg font-semibold leading-8 text-indigo-600">What We Do</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">A standard for software that lasts</p>
            {/* <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Clean code that scales
            </p> */}
          </div>

          <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500 text-white sm:shrink-0">
                    <feature.icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <div className="sm:min-w-0 sm:flex-1">
                    <p className="text-lg font-semibold leading-8 text-gray-300">{feature.name}</p>
                    <p className="mt-2 text-base leading-7 text-gray-500">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;