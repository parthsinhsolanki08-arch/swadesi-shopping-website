import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
            About Swadesi Bazar
          </h1>
          <p className="text-lg md:text-xl font-medium text-indigo-100 leading-relaxed mb-8">
            Empowering local artisans, businesses, and creators. We are more than just a marketplace; we are a movement towards self-reliance and celebrating our roots.
          </p>
        </div>
      </section>

      {/* Our Mindset Section */}
      <section className="py-16 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mindset & Philosophy</h2>
            <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              At Swadesi Bazar, our mindset is rooted in the idea of "Vocal for Local." We believe in creating a sustainable ecosystem where indigenous quality shines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Empowering Locals</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide a robust platform for local artisans, farmers, and small business owners to showcase their incredible craftsmanship and products to a wider audience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Uncompromised Quality</h3>
              <p className="text-gray-600 leading-relaxed">
                Authenticity is our priority. We ensure that every product listed on our platform meets high standards, delivering true value and satisfaction to our customers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Aatmanirbhar Bharat</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision aligns with building a self-reliant economy. By choosing Swadesi Bazar, you directly contribute to the growth and prosperity of local communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-2">10k+</div>
              <div className="text-gray-400 font-medium">Local Artisans</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-2">50k+</div>
              <div className="text-gray-400 font-medium">Products</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-pink-400 mb-2">100k+</div>
              <div className="text-gray-400 font-medium">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-indigo-400 mb-2">500+</div>
              <div className="text-gray-400 font-medium">Cities Delivered</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Prompt */}
      <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Journey</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
          Whether you are a buyer looking for authentic local goods or a seller wanting to expand your reach, Swadesi Bazar is your home.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="/products" className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors shadow-lg">Shop Now</a>
          <a href="/contact" className="px-8 py-3 bg-gray-100 text-indigo-600 font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-sm">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default About;
