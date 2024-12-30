


import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const ContactPage = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto dark:text-slate-100">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 dark:text-slate-100">
              Contact Us
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div>
                <div className="p-2 w-[90vw] md:w-[45vw]">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600 dark:text-slate-100"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-[90vw] md:w-[45vw]">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600 dark:text-slate-100"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600 dark:text-slate-100"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="p-2 w-full contactDiv">
                <button className="contact-btn">
                  <span className="transition"></span>
                  <span className="gradient"></span>
                  <span className="label">Submit</span>
                </button>
              </div>
              <div className="flex mt-10 w-full justify-center gap-8">
              <Link href="https://www.facebook.com/daniyalaneeq.ahmed" target="_blank"
              >
              <FaFacebook className="w-[30px] h-[30px] hover:scale-110"/>
              </Link>
              <Link href="https://www.linkedin.com/in/daniyal-aneeq-ahmed-3868452b7/" target="_blank">
              <FaLinkedin className="w-[30px] h-[30px] hover:scale-110"/>
              </Link>
              <Link href="https://www.instagram.com/daniyalaneeq/" target="_blank">
              <FaInstagram className="w-[30px] h-[30px] hover:scale-110"/>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
