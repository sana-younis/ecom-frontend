/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontWeight: {
        custom: 550,
      },
      backgroundImage: {
        carImage: "url('/public/images/bg_18.jpg')",
        laptopImage: "url('/public/images/img_108.png')",
        storeImage: "url('/public/images/store-image-1.avif')",
        textureImage: "url('/public/images/textured-image.avif')",
      },
    },
  },
  plugins: [],
};
