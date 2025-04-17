import React from 'react';

const Blogimg = () => {
  return (
    <section className="bg-white text-center">
      {/* Full width image section */}
      <div className="w-full">
        <img 
          src="/assets/img13.png" 
          alt="T-shirt design close-up" 
          className=" object-cover"
           style={{ width: "80%", height: "400px", backgroundColor: "#FBCEB1", marginLeft: "10%" }}
        />
      </div>

      {/* Text content section */}
      <div className="flex flex-col items-center justify-center px-4 py-12 mt-5">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Unveiling the Artistry of Comfort: A Deep Dive into <br />
          the Craftsmanship of Our T-Shirt Collection
        </h2>
        <p className="mt-4 max-w-2xl text-gray-600 text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.        </p>
      </div>
    </section>
  );
};

export default Blogimg;
