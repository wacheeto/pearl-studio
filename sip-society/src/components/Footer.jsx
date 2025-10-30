import React from "react";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal p-10 bg-white text-gray-800 border-gray-200">
      <aside>
        {/* <svg
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-700"
        >
          <path d="M12 22s8-4.5 8-10V5l-8-3-8 3v7c0 5.5 8 10 8 10z" />
        </svg> */}
        <p className="mt-3 text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-800 text-8xl">Pearl Studio</span>
          <br />
          <span className="text-2xl">
            Your Smile, Our Passion
          </span>
          <br />
          <span className="text-md text-gray-500">
            © 2025 Pearl Studio. All rights reserved.
          </span>
        </p>
      </aside>

      <nav>
        <h6 className="footer-title">Follow Us</h6>
        <div className=" grid-flow-col gap-4 items-center justify-center flex">
          <a href="#" aria-label="Twitter">
            <i className="fa-brands fa-x-twitter text-xl hover:text-gray-500 transition"></i>
          </a>
          <a href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram text-xl hover:text-gray-500 transition"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook text-xl hover:text-gray-500 transition"></i>
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
