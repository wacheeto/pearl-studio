import React, { useEffect } from 'react'
import ConveyorBanner from '../components/ConveyorBanner.jsx'
import ButtonXs from '../components/ButtonXs.jsx'
import Card from '../components/Card.jsx'
import Footer from '../components/Footer.jsx'
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function Home() {
  useEffect(() => {
    AOS.init(
      { 
        duration: 900, 
        once: true,
        disable:'mobile' 
      }
    );
  }, []);
  return (
    <div className="flex flex-col bg-white text-black w-screen items-center">
      {/* hero dito */}
      <section data-aos="fade-up" className="w-full h-screen md:h-[95vh] bg-[url('/assets/hero-img.jpg')] bg-cover bg-center flex flex-col justify-end px-6 md:px-12 pb-16">
        <h1 className="text-7xl md:text-9xl font-bold text-white text-shadow-lg">
          Pearl Studio.
        </h1>
      </section>
      <div className="w-screen" data-aos="fade-up">
        <ConveyorBanner/>
      </div>
      <section data-aos="fade-up" className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 py-20 px-6">
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Your Smile, Our Passion
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            At Pearl Studio, we believe your smile is a masterpiece. Our approach combines advanced dental care with a refined, comfortable atmosphere, ensuring every visit feels as seamless as it is effective.
          </p>
          <p className="text-gray-600 text-lg mb-6">
            We’re here to make your smile brighter, your confidence stronger, and your experience truly personal. With gentle hands and artistic precision, we bring out the natural beauty in every smile.
          </p>
          <ButtonXs message={'Book an appointment'} />
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="/assets/hero-img.jpg"
            alt="Dental clinic"
            className="rounded-2xl shadow-md object-cover w-[100%] md:w-[90%] sm:h-[40vh] h-[40vh] md:h-[60vh]"
          />
        </div>
      </section>
      <section data-aos="fade-up" className="bg-gray-50 py-10 flex flex-col w-screen items-center" id='services'>
        <p className='text-center font-bold text-3xl md:text-4xl text-gray-800 mb-5'>What we offer</p>
        <div className="container  flex flex-wrap justify-center gap-6 ">
          <Card title="Whitening" body="Brighten your smile with our safe and effective whitening treatments designed to gently lift stains and restore your teeth’s natural brilliance" btn="Book here" link="/assets/whitening.webp" />
          <Card title="Cleaning" body="Experience a refreshing deep clean that keeps your smile healthy and your gums strong. Our gentle hygienic procedures remove buildup and prevent decay" link="/assets/cleaning.jpg" />
          <Card title="Alignment" body="We offer modern alignment solutions that discreetly straighten your teeth while preserving your natural look." btn="Book here" link="/assets/alignment.png" />
          <Card title="Care" body="Rediscover the beauty and strength of your smile through customized cosmetic and restorative treatments." btn="Book here" link="/assets/care.webp" />
          <Card title="Restoration" body="Restore both the beauty and function of your smile with our precise restorative treatments. Whether it’s repairing a damaged tooth, replacing lost structure, or strengthening weakened enamel." btn="Book here" link="/assets/restoration.jpg" />
          <Card title="Pediatric Care" body="Our pediatric services make dental visits a positive experience for children. We focus on building trust early, teaching good habits, and keeping little smiles bright, healthy, and full of confidence." btn="Book here" link="/assets/hero-img.jpg" />
        </div>
      </section>
      <section data-aos="fade-up" className='flex flex-col items-center py-20  px-6' id='contact'>
        <h2 className="text-4xl md:text-5xl font-bold text-center  text-gray-800 ">
          We're open for all and everyone
        </h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mt-20">
          <div className="flex-1 flex justify-center">
            <img
              src="/assets/dental-clinic.jpeg"
              alt="Dental clinic"
              className="rounded-2xl shadow-md object-cover w-[100%] sm:h-[40vh] h-[40vh] md:w-[80%] md:h-[60vh] "
            />
          </div>
          <div className="flex-1 space-y-3">
            <span className='mt-8 text-md  md:text-xl text-center w-[70%] text-gray-800 mb-5 '>
              Whether it’s your first visit or a regular checkup, our doors — and our smiles — are always open. Experience gentle, thoughtful care made for every kind of smile.
            </span>
            <div className="flex space-x-3 items-start">
              <i className="fa-solid fa-location-dot text-lg mt-1 text-gray-700"></i>
              <p className="text-gray-600 text-md leading-relaxed">
                <span className="font-semibold text-gray-800">Pearl Studio Dental</span><br />
                2F, The Axis Building<br />
                45 Crescent Lane, Midtown, Makati City
              </p>
            </div>

            <div className="flex space-x-3 items-center">
              <i className="fa-solid fa-clock text-lg text-gray-700"></i>
              <p className="text-gray-600 text-md">Mon–Sat: 9:00 AM – 6:00 PM</p>
            </div>

            <div className="flex space-x-3 items-center">
              <i className="fa-solid fa-mobile text-lg text-gray-700"></i>
              <p className="text-gray-600 text-md">(+63) 2 912 9923</p>
            </div>

            <div className="flex space-x-3 items-center">
              <i className="fa-solid fa-phone text-lg text-gray-700"></i>
              <p className="text-gray-600 text-md">(02) 8123 4567</p>
            </div>

            <div className="flex space-x-3 items-center">
              <i className="fa-solid fa-envelope text-lg text-gray-700"></i>
              <p className="text-gray-600 text-md">hello@pearlstudio.ph</p>
            </div>

            <p className="text-gray-500 text-sm italic mt-6 text-start">
              We’d love to meet you — schedule your visit and let your smile shine brighter.
            </p>

          </div>
        </div>
      </section>
      <div data-aos="fade-up" className="container space-y-4 px-4 items-center flex justify-center flex-col md:px-6 py-10">
        <span className='mt-8 text-md  md:text-xl text-center w-[70%] text-gray-800 mb-5  '>
          Whether you’re ready to book your first visit or just want more information, our team is only a message away.
        </span>

        <div className="container mx-auto flex flex-col md:flex-row  justify-center gap-8 mt-20">
          <div className="flex-1 flex flex-col space-y-4">
            {/* Full Name */}
            <label className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg focus-within:ring-2 focus-within:ring-gray-300">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="12" cy="8" r="4"></circle>
                  <path d="M4 20c0-4 4-6 8-6s8 2 8 6"></path>
                </g>
              </svg>
              <input
                type="text"
                className="grow bg-transparent outline-none text-gray-700 placeholder-gray-500"
                placeholder="Full Name"
              />
            </label>

            <label className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-lg focus-within:ring-2 focus-within:ring-gray-300">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
                  <path d="M3 7l9 6 9-6"></path>
                </g>
              </svg>
              <input
                type="email"
                className="grow bg-transparent outline-none text-gray-700 placeholder-gray-500"
                placeholder="Email Address"
              />
            </label>
          </div>

          <div className="flex-1 w-full">
            <textarea
              className="w-full h-[200px] bg-gray-100 rounded-lg p-4 outline-none focus:ring-2 focus:ring-gray-300 text-gray-700 placeholder-gray-500 resize-none"
              placeholder="Your message..."
            />
            <div className=' flex justify-end '>
              <ButtonXs message={'Submit'}/>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen mt-1">
        <ConveyorBanner/>
      </div>
      <Footer />
    </div>
  )
}
