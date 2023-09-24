const Contact = () => {
  return (
    <section name="contact" className="w-full h-screen p-4 bg-gradient-to-b">
      <div className="flex flex-col justify-center h-full max-w-screen-lg p-4 mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">Contact</h2>
          <p className="py-6 text-3xl text-gray-500">
            Ullamco sunt veniam quis commodo laboris. Ullamco non nisi cupidatat
            amet. Magna occaecat ipsum reprehenderit ea do veniam proident
            exercitation.{" "}
          </p>
        </div>

        <div className="flex items-center justify-center mt-10">
          <form className="flex flex-col w-full md:w-1/2">
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 border-2 rounded-md focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 border-2 mt-4 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 border-2 rounded-md focus:outline-none mt-4"
            />

            <button className="duration-300 bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110 my-8 mx-auto px-6 py-3">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
