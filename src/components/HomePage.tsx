import React, { useState } from "react";
import {
  FaGem,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="bg-[#131313] h-20 flex justify-center items-center sticky top-0 z-[999]">
        <div className="flex justify-between items-center h-20 w-full max-w-[1300px] px-12">
          <a
            href="/"
            className="text-2xl font-bold bg-gradient-to-t from-[#ff0844] to-[#ffb199] bg-clip-text text-transparent flex items-center cursor-pointer"
          >
            <FaGem className="mr-2" /> NEXT GENERATION TECHNOLOGY
          </a>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div
              className={`w-6 h-[3px] my-1 bg-white transition-transform ${
                mobileMenuOpen ? "transform rotate-45 translate-y-[6px]" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-[3px] my-1 bg-white ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-[3px] my-1 bg-white transition-transform ${
                mobileMenuOpen ? "transform -rotate-45 -translate-y-[6px]" : ""
              }`}
            ></div>
          </div>
          <ul
            className={`md:flex items-center list-none text-white text-lg md:static absolute w-full top-20 bg-[#131313] transition-all duration-500 ease-in-out ${
              mobileMenuOpen
                ? "opacity-100 top-20 z-50"
                : "opacity-0 -top-[1000px] z-[-1]"
            } md:opacity-100 md:top-auto md:z-auto`}
          >
            <li className="h-20 flex items-center justify-center md:px-4 w-full md:w-auto">
              <a
                href="/"
                className="hover:text-[#f77062] transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li className="h-20 flex items-center justify-center md:px-4 w-full md:w-auto">
              <a
                href="/tech.html"
                className="hover:text-[#f77062] transition-all duration-300"
              >
                Tech
              </a>
            </li>
            <li className="h-20 flex items-center justify-center md:px-4 w-full md:w-auto">
              <a
                href="/"
                className="hover:text-[#f77062] transition-all duration-300"
              >
                Products
              </a>
            </li>
            <li className="h-20 flex items-center justify-center md:px-4 w-full md:w-auto">
              <a
                href="/"
                className="bg-[#f77062] hover:bg-[#4837ff] text-white py-2 px-6 rounded transition-all duration-300"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#141414] py-20">
        <div className="grid md:grid-cols-2 items-center max-w-[1300px] px-12 mx-auto h-[90vh]">
          <div className="text-white text-center md:text-left">
            <h1 className="text-5xl font-bold bg-gradient-to-t from-[#ff0844] to-[#ffb199] bg-clip-text text-transparent">
              JAGUAR HEATING
            </h1>
            <h2 className="text-4xl font-bold mt-4 bg-gradient-to-t from-[#b721ff] to-[#21d4fd] bg-clip-text text-transparent">
              & COOLING MECHANICAL CO.
            </h2>
            <p className="text-2xl font-semibold mt-6">
              See What Makes Us Different
            </p>
            <button className="mt-8 bg-gradient-to-t from-[#f77062] to-[#fe5196] text-white px-8 py-4 rounded relative overflow-hidden group">
              <a href="tel:4315574253" className="relative z-10">
                Contact Me Here: (431)-557-4253
              </a>
              <span className="absolute top-0 left-0 w-0 h-full bg-[#4837ff] transition-all duration-300 group-hover:w-full rounded"></span>
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/Jaguar Heating And Cooling Mechanical Co..png"
              alt="hero"
              className="w-4/5 h-4/5"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#141414] flex flex-col items-center min-h-screen py-20">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-[#ff8177] via-[#ff8c7f] to-[#b12a5b] bg-clip-text mb-20 text-center px-4">
          We Are High-Quality HVAC-R Services And Energy Solutions
        </h1>
        <div className="flex flex-wrap justify-center">
          <div
            className="relative m-4 h-[525px] w-[300px] md:w-[400px] bg-cover bg-center rounded-lg text-white transform transition-transform duration-200 hover:scale-105"
            style={{ backgroundImage: "url('/images/Image1.jpg')" }}
          >
            <h2 className="absolute left-6 top-[350px] text-2xl font-semibold">
              HVAC-R Service & Repairs
            </h2>
            <p className="absolute left-6 top-[400px]">
              At An Affordable Price
            </p>
            <button className="absolute left-6 top-[440px] bg-[#f77062] py-2 px-6 rounded">
              Get Started
            </button>
          </div>
          <div
            className="relative m-4 h-[525px] w-[300px] md:w-[400px] bg-cover bg-center rounded-lg text-white transform transition-transform duration-200 hover:scale-105"
            style={{ backgroundImage: "url('/images/Image2.jpg')" }}
          >
            <h2 className="absolute left-6 top-[350px] text-2xl font-semibold">
              Maintenance Contracts
            </h2>
            <p className="absolute left-6 top-[400px]">Innovative Solutions</p>
            <button className="absolute left-6 top-[440px] bg-[#f77062] py-2 px-6 rounded">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#141414] py-20 flex flex-col items-center">
        <div className="w-full max-w-[1000px] flex flex-wrap justify-center gap-8">
          {["About Us", "Contact Us", "Videos", "Social Media"].map(
            (title, i) => (
              <div
                key={i}
                className="flex flex-col items-start text-white text-left w-40 px-4"
              >
                <h2 className="mb-4 text-xl font-bold">{title}</h2>
                <a href="/" className="mb-2 hover:text-gray-300">
                  Link 1
                </a>
                <a href="/" className="mb-2 hover:text-gray-300">
                  Link 2
                </a>
                <a href="/" className="mb-2 hover:text-gray-300">
                  Link 3
                </a>
              </div>
            )
          )}
        </div>
        <div className="flex flex-col items-center mt-10">
          <a
            href="/"
            className="text-2xl font-bold text-white flex items-center"
          >
            <FaGem className="mr-2" /> NEXT GENERATION TECHNOLOGY
          </a>
          <p className="text-white mt-4">
            © Jaguar Heating & Cooling 2025. All rights reserved
          </p>
          <div className="flex justify-center mt-4 space-x-6 text-white text-2xl">
            <a
              href="https://m.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
