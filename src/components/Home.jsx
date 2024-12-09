import React from "react";

function Home() {
  return (
    <section>
      <div className="relative w-full h-screen bg-gradient-to-b from-blue-600 to-indigo-900">
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto py-20">
            {/* Left Section (Text) */}
            <div className="md:w-1/2 text-white text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
                Hi There!{" "}
                <span role="img" aria-labelledby="wave" className="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
                I'M
                <strong className="text-yellow-400"> Arun Vijo Tharakan</strong>
              </h1>

              <div className="mt-8 text-lg">
                <Type />
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img
                src={homeLogo}
                alt="home pic"
                className="w-full h-auto max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
