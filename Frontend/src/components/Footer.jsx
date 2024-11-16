import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Top Section: Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul>
              <li>
                <a href="#about-us" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
              </li>
              <li>
                <a href="#careers" className="text-gray-400 hover:text-white transition duration-300">Jobs</a>
              </li>
              <li>
                <a href="#internships" className="text-gray-400 hover:text-white transition duration-300">Internships</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul>
              <li>
                <a href="#web-development" className="text-gray-400 hover:text-white transition duration-300">Web Development</a>
              </li>
              <li>
                <a href="#app-development" className="text-gray-400 hover:text-white transition duration-300">App Development</a>
              </li>
              <li>
                <a href="#digital-marketing" className="text-gray-400 hover:text-white transition duration-300">Digital Marketing</a>
              </li>
              <li>
                <a href="#cloud-services" className="text-gray-400 hover:text-white transition duration-300">Cloud Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="#privacy-policy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms-of-service" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white transition duration-300">Blog</a>
              </li>
              <li>
                <a href="#support" className="text-gray-400 hover:text-white transition duration-300">Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-gray-700 pt-6 mt-12 text-center">
          <p className="text-sm text-gray-400">Copyright © {new Date().getFullYear()} - All rights reserved by ArrayLogic Softwares Pvt. Ltd.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
