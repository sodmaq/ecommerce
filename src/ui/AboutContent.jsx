function AboutContent() {
  return (
    <div>
      <div className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Best place to choose <br /> your{" "}
                <span className="text-blue-500 ">shoe</span>
              </h1>

              <p className="mt-3 text-gray-600 dark:text-gray-400 font-libre">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Natus fuga itaque dicta hic minima
                exercitationem incidunt nam earum. Asperiores facilis minima
                animi tempora accusantium delectus omnis necessitatibus incidunt
                ipsam sunt? Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Beatae eos numquam delectus a nam? Maiores quia quod
                architecto ullam numquam unde tempore iste autem iusto,
                laboriosam laborum quisquam, velit corporis?
              </p>

              <button className="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-blue-600 rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                Shop Now
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
            <img
              className="w-full h-full lg:max-w-3xl"
              src="https://merakiui.com/images/components/Catalogue-pana.svg"
              alt="Catalogue-pana.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
