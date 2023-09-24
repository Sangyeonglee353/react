const Feedback = () => {
  const image = "https//images.unsplash.com/photo-1491528323818-fddlfaba62cc";
  return (
    <section
      name="testimonials"
      className="w-full my-24 text-white bg-slate-700"
    >
      <div className="max-w-6xl px-5 mx-auto text-center py-12">
        <h2 className="text-4xl font-bold">Testimonials</h2>

        <p className="py-8 text-2xl text-white">
          Eiusmod minim reprehenderit ut officia fugiat nostrud velit cupidatat
          nisi quis minim voluptate tempor consectetur. In excepteur ut veniam
          do sit ipsum duis commodo voluptate dolor aliquip.
        </p>

        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3">
            <img
              src={image}
              className="w-16 -mt-14 rounded-full"
              alt="person"
            />
            <h5 className="text-lg font-bold">Ali ko</h5>
            <p className="text-sm">
              Anim et exercitation nostrud nisi fugiat nulla minim adipisicing
              consectetur veniam culpa laborum cupidatat qui. Eiusmod veniam
              consectetur pariatur in ex sint minim culpa labore velit ipsum
              aliquip.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3">
            <img
              src={image}
              className="w-16 -mt-14 rounded-full"
              alt="person"
            />
            <h5 className="text-lg font-bold">Ali ko</h5>
            <p className="text-sm">
              Anim et exercitation nostrud nisi fugiat nulla minim adipisicing
              consectetur veniam culpa laborum cupidatat qui. Eiusmod veniam
              consectetur pariatur in ex sint minim culpa labore velit ipsum
              aliquip.
            </p>
          </div>
          <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-gray-100/30 md:w-1/3">
            <img
              src={image}
              className="w-16 -mt-14 rounded-full"
              alt="person"
            />
            <h5 className="text-lg font-bold">Ali ko</h5>
            <p className="text-sm">
              Anim et exercitation nostrud nisi fugiat nulla minim adipisicing
              consectetur veniam culpa laborum cupidatat qui. Eiusmod veniam
              consectetur pariatur in ex sint minim culpa labore velit ipsum
              aliquip.
            </p>
          </div>
        </div>

        <button className="px-6 py-3 my-8 duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Feedback;
