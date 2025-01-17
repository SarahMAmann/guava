import React from 'react';

const Testimonial = () => {

  return (
    <section className="bg-transparent reveal-from-bottom" data-reveal-delay="100">
    <div className="mx-auto max-w-7xl md:grid md:grid-cols-2 md:px-6 lg:px-8">
      <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:border-r md:border-indigo-900 md:py-16 md:pl-0 md:pr-10 lg:pr-16">
        <div className="h-12">
          {/* <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg" alt="Tuple" /> */}
        </div>
        <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
          <div className="relative text-lg font-medium text-white md:flex-grow">
            <svg
              className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative">
              They [guava team] are extremely informative... Definitely going to be my go to.
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex items-start">
              <div className="inline-flex flex-shrink-0 rounded-full">
                {/* <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="ml-4">
                <div className="text-base font-medium text-white">Justin Botillier</div>
                <div className="text-base font-medium text-indigo-200">CPA</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
      <div className="border-t-2 border-indigo-900 py-12 px-4 sm:px-6 md:border-t-0 md:border-l md:py-16 md:pr-0 md:pl-10 lg:pl-16">
        <div className="h-12">
          {/* <img
            className="h-12"
            src="https://tailwindui.com/img/logos/workcation-logo-indigo-300.svg"
            alt="Workcation"
          /> */}
        </div>
        <blockquote className="mt-6 md:flex md:flex-grow md:flex-col">
          <div className="relative text-lg font-medium text-white md:flex-grow">
            <svg
              className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-600"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="relative">
              The team is extremely knowledgeable - it's obvious they live and breathe Web3, based on the sheer amount of conversational knowledge they have about current trends and technologies. If you have any, ANY, ideas that might need some Web3 tech, they are the ones to talk to. Thank you so much for the time and wisdom!
            </p>
          </div>
          <footer className="mt-8">
            <div className="flex items-start">
              <div className="inline-flex flex-shrink-0 rounded-full">
                {/* <img
                  className="h-12 w-12 rounded-full"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                /> */}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="ml-4">
                <div className="text-base font-medium text-white">Rick Plautz</div>
                <div className="text-base font-medium text-indigo-200">Motion Designer</div>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>
  );
}

export default Testimonial;