import React from 'react'
import heroImg from '../../assets/heroImg.jpg'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-10 overflow-hidden">
      <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center">
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Shop Now on Swadesi Bazar, Before
            <br className="hidden lg:inline-block"/> They Sell Out!
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            Discover Men's, Women's, Electronics, and Jewelry on Swadesi Bazar. 
            Experience premium quality with lightning-fast delivery!
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-600 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 rounded-full text-lg font-semibold">
              Show All Products
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-gray-200 transition-all duration-300 rounded-full text-lg font-semibold">
              Contact Us
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200 to-pink-200 rounded-3xl transform rotate-3 scale-105 -z-10 animate-pulse"></div>
          <img className="object-cover object-center rounded-3xl shadow-2xl transform transition-transform duration-500 hover:scale-105 cursor-pointer" alt="hero" src={heroImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero