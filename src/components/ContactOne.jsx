import image from "../../public/image.webp";

const ContactOne = () => {
  return (
    <div className="bg-white">
      <div className="relative pt-28 pb-4">
        <div className="w-full">
          <div className="w-full px-4 mx-auto max-w-[1400px]">
            <div className="justify-center w-full pb-14">
              <div className="w-full max-w-[14000px] mx-auto space-y-4 ">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                  <div>
                    <img src={image} alt="" />
                  </div>
                  <div>
                    <div className="flex md:justify-start justify-center">
                      <h1 className="md:text-5xl text-4xl md:font-semibold font-bold">
                        Have any Questions?
                      </h1>
                    </div>
                    <div className="flex md:justify-start justify-center md:mt-2 mt-4">
                      <h1 className="md:text-5xl text-4xl md:font-semibold font-bold">
                        Shoot us an email.
                      </h1>
                    </div>
                    <div className="flex md:justify-start justify-center md:mt-6 mt-4 items-center">
                      <p className="text-gray-800 text-lg font-light">
                        We are an industry-leading organization that provides
                        the latest news and insights about cutting edge
                        technologies, and how it impacts your business and
                        career.
                      </p>
                    </div>
                    <div className="flex md:justify-start justify-center mt-1 md:mt-4">
                      <p className="text-gray-800 text-lg font-light">
                        Have a question for us or feedback? Please click on the
                        most appropriate category and fill out the form to reach
                        us.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-16 mt-8">
                    <div>
                      <div className="flex md:justify-start justify-center">
                        <h1 className="text-4xl font-bold">
                          Get in touch with us!
                        </h1>
                      </div>
                      <div className="flex flex-col gap-4 mt-8">
                        <div className="grid grid-cols-4">
                          <div className="col-span-1 flex justify-center">
                            <h1>Hello</h1>
                          </div>
                          <div className="col-span-3 ">
                            <h1>vahastechnologies@clouddatanetworks.com</h1>
                          </div>
                        </div>
                        <div className="grid grid-cols-4">
                          <div className="col-span-1 flex justify-center">
                            <h1>Hello</h1>
                          </div>
                          <div className="col-span-3 ">
                            <h1>91+ 8340060805</h1>
                          </div>
                        </div>
                        <div className="grid grid-cols-4">
                          <div className="col-span-1  flex justify-center">
                            <h1>Hello</h1>
                          </div>
                          <div className="col-span-3 ">
                            <h1>
                              402, Yula Twee, Kanthivanam Colony, Hyderabad,
                              5000084
                            </h1>
                          </div>
                        </div>
                        <div className="flex md:justify-start justify-center md:mt-6 mt-4">
                          <h1 className="text-3xl font-bold">
                            Contact us for below issues
                          </h1>
                        </div>
                        <div className="flex md:justify-start justify-center">
                          <ul className="space-y-4 text-colorTwo text-lg font-normal leading-relaxed tracking-wide flex flex-col list-disc md:mx-8 mx-12">
                            <li>I want to report a bug or technical issue.</li>
                            <li>
                              I want to report a correction on the website.
                            </li>
                            <li>
                              Guidance towards careers at vahaas technologies.
                            </li>
                            <li>
                              Need to get technical support from our technical
                              staff.
                            </li>
                            <li>
                              I want to advertise my product on vahaas
                              technologies.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div>
                      <form action="" method="POST" className="mt-8">
                        <div className="w-full flex justify-center items-center">
                          <div className="mb-5 md:w-10/12 w-full">
                            <label
                              htmlFor="email"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Full Name
                            </label>
                            <input
                              required
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Your Full Name"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                            />
                          </div>
                        </div>
                        <div className="w-full flex justify-center items-center">
                          <div className="mb-5 md:w-10/12 w-full">
                            <label
                              htmlFor="email"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Email Address
                            </label>
                            <input
                              required
                              type="email"
                              name="email"
                              id="email"
                              placeholder="example@domain.com"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                            />
                          </div>
                        </div>

                        <div className="w-full flex justify-center items-center">
                          <div className="mb-5 md:w-10/12 w-full">
                            <label
                              htmlFor="subject"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Subject
                            </label>
                            <input
                              required
                              type="text"
                              name="subject"
                              id="subject"
                              placeholder="Enter your subject"
                              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:shadow-md"
                            />
                          </div>
                        </div>

                        <div className="w-full flex justify-center items-center">
                          <div className="mb-5 md:w-10/12 w-full">
                            <label
                              htmlFor="message"
                              className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                              Message
                            </label>
                            <textarea
                              required
                              rows="4"
                              name="message"
                              id="message"
                              placeholder="Type your message"
                              className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none  focus:shadow-md"
                            ></textarea>
                          </div>
                        </div>

                        <div className="w-full flex justify-center items-center ">
                          <div className=" md:w-8/12 w-full flex md:justify-start justify-center items-center">
                            <a
                              href="#home"
                              className="hover:shadow-form rounded-md bg-[#6d49c8] transition duration-1000 ease-in-out hover:bg-[#6d49c8] py-3 px-12 text-base font-medium text-white outline-none"
                            >
                              Submit
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <form className="max-w-md mx-auto">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Search Mockups, Logos..."
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactOne;
