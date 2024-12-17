/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { useFormik } from "formik";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-10">
        {/* <!-- Map Section --> */}
        <div className="w-full h-96 mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5464675031985!2d-0.12209412466684796!3d51.503189711012595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2s!4v1731160813538!5m2!1sen!2s"
            className="w-full h-full border-0"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* <!-- Contact Details Section --> */}
        <div className="bg-white shadow-md border-t border-[#ff8717] rounded-t-none rounded-lg p-6 md:flex md:justify-between mt-6 lg:mx-8">
          {/* <!-- Address --> */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Our Address
            </h3>
            <p className="text-gray-600">
              123 E-Commerce St. Shopville, <br /> 45678 Country
            </p>
          </div>

          {/* <!-- Contact Information --> */}
          <div className="mb-6 md:mb-0 md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Contact Us
            </h3>
            <p className="text-gray-600">
              Phone:{" "}
              <a href="tel:+1234567890" className="text-[#FF8717]">
                +1 234 567 890
              </a>
            </p>
            <p className="text-gray-600">
              Email:{" "}
              <a href="mailto:support@ecommerce.com" className="text-[#FF8717]">
                support@ecommerce.com
              </a>
            </p>
          </div>

          {/* <!-- Business Hours --> */}
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Business Hours
            </h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
