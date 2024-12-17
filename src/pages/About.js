import React from "react";

const About = () => {
  return (
    <>
      <section className="bg-storeImage text-white h-[300px] mt-10 flex justify-center items-center bg-no-repeat">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-4xl md:text-4xl font-bold mb-4">About Us</h1>
        </div>
      </section>

      <section className="bg-white pt-14 pb-10 relative">
        <div className="flex justify-between items-start gap-10">
          <div className="px-6 py-12 md:py-16 w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-base ">
              Our mission is to empower businesses of all sizes by providing a
              seamless marketplace to connect vendors and customers. We strive
              to build trust and convenience, ensuring an excellent experience
              for everyone.
            </p>
            <p className="text-base mt-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, adipisci velit, sed quia non
              numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
              exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur?
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="/images/store-image-1.avif"
              alt="Team Member 1"
              className="w-[450px] h-[450px] object-cover"
            />
          </div>
        </div>
        <div className="absolute top-72 right-8">
          <img
            src="/images/store-image-2.jpeg"
            alt="Team Member 1"
            className="w-[300px] h-[300px] object-cover"
          />
        </div>
      </section>
      <section className="py-10">
        <div className="container mx-auto px-6 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Meet the Team
          </h2>
          <p className="text-base max-w-2xl mx-auto mb-10 mt-5 tracking-widest text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="/images/shipman-northcutt-sgZX15Da8YE-unsplash.jpg"
                alt="Team Member 1"
                className="mx-auto rounded-full mb-4 w-[150px] h-[150px] object-cover"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>

            <div className="text-center">
              <img
                src="/images/julian-wan-WNoLnJo7tS8-unsplash.jpg"
                alt="Team Member 2"
                className="mx-auto rounded-full mb-4 w-[150px] h-[150px] object-cover"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
            </div>

            <div className="text-center">
              <img
                src="/images/woman-image.jpg"
                alt="Team Member 3"
                className="mx-auto rounded-full mb-4 w-[150px] h-[150px] object-cover"
              />
              <h3 className="text-xl font-bold">Emily Johnson</h3>
              <p className="text-gray-600">Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 text-black py-5 bg-textureImage h-[400px] flex flex-col justify-center items-center">
        <div className="container mx-auto px-6 py-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Us Today</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10 mt-7 tracking-widest">
            Become a part of our growing community. Whether you're a vendor or a
            customer, we have something amazing for you!
          </p>
          <a
            href="/sign-up"
            className="bg-[#ff8717] text-white px-6 py-3 rounded-lg font-semibold"
          >
            Sign Up Now
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
