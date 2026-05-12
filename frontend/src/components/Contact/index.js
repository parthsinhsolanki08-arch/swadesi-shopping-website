import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill all the fields');
            return;
        }
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="text-gray-600 body-font relative bg-gradient-to-br from-gray-50 to-gray-200 min-h-[80vh] flex items-center">
            <div className="container px-5 py-24 mx-auto flex justify-center">
                <div className="lg:w-1/2 md:w-2/3 bg-white rounded-2xl shadow-2xl p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 border border-gray-100">
                    <div className="mb-6">
                        <h2 className="text-gray-900 text-3xl mb-2 font-extrabold title-font">Get in Touch</h2>
                        <div className="w-16 h-1 bg-indigo-500 rounded-full mb-4"></div>
                        <p className="leading-relaxed text-gray-600">Have a question about our indigenous products or need help with your order? Send us a message!</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-sm font-semibold text-gray-700">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-gray-50 rounded-xl border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-sm"
                                placeholder="Your full name"
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="email" className="leading-7 text-sm font-semibold text-gray-700">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-gray-50 rounded-xl border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out shadow-sm"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="message" className="leading-7 text-sm font-semibold text-gray-700">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-gray-50 rounded-xl border border-gray-200 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out shadow-sm"
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>
                        <button type="submit" className="text-white bg-gradient-to-r from-indigo-500 to-purple-600 border-0 py-3 px-6 focus:outline-none hover:from-indigo-600 hover:to-purple-700 rounded-xl text-lg font-bold shadow-lg transform transition-transform hover:-translate-y-0.5">
                            Send Message
                        </button>
                    </form>
                    
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="flex flex-col space-y-4 text-sm text-gray-600">
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                <span>Swadesi Bhawan, Connaught Place, New Delhi, India 110001</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                <span>support@swadesibazar.in</span>
                            </div>
                            <div className="flex items-center">
                                <svg className="w-5 h-5 mr-3 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                <span>+91 98765 43210</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;