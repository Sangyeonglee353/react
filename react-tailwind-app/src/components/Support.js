import supportImg from "../assets/support.jpeg";
import { FaArrowRight } from "react-icons/fa";

const Support = () => {
  return (
    <div name="support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-slate-900/90 absolute">
        <img
          className="object-cover w-full h-full mix-blend-overlay"
          src={supportImg}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="pt-8 text-3xl text-center uppercase text-slate-300">
            Support
          </h2>
          <h3 className="py-6 text-5xl font-bold text-center">
            We support you
          </h3>
          <p className="py-4 text-3xl text-slate-300">
            Excepteur adipisicing voluptate ullamco sit ipsum voluptate. Qui do
            ex aute incididunt sit. Veniam incididunt ea eiusmod excepteur
            cupidatat consequat exercitation exercitation incididunt
            reprehenderit et magna.
          </p>
        </div>
        <div className="grid gird-cols-1 px-4 pt-12 text-black lg:grid-cols-3 gap-x-8 gap-y-16 sm:pt-20">
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <h3 className="my-6 text-2xl font-bold">Support</h3>
              <p className="text-xl text-gray-600">
                Velit ex dolor aliquip culpa minim consectetur adipisicing eu
                esse. Eu quis aute ipsum consequat excepteur enim sunt. Aute
                cupidatat dolor anim duis. Nulla id sint ullamco esse elit id
                pariatur adipisicing qui.
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-blue-600">
                More Info... <FaArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <h3 className="my-6 text-2xl font-bold">Inquiries</h3>
              <p className="text-xl text-gray-600">
                Velit ex dolor aliquip culpa minim consectetur adipisicing eu
                esse. Eu quis aute ipsum consequat excepteur enim sunt. Aute
                cupidatat dolor anim duis. Nulla id sint ullamco esse elit id
                pariatur adipisicing qui.
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-blue-600">
                More Info... <FaArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white shadow-2xl rounded-xl">
            <div className="p-8">
              <h3 className="my-6 text-2xl font-bold">Sales</h3>
              <p className="text-xl text-gray-600">
                Velit ex dolor aliquip culpa minim consectetur adipisicing eu
                esse. Eu quis aute ipsum consequat excepteur enim sunt. Aute
                cupidatat dolor anim duis. Nulla id sint ullamco esse elit id
                pariatur adipisicing qui.
              </p>
            </div>
            <div className="py-4 pl-8 bg-slate-100">
              <p className="flex items-center text-blue-600">
                More Info... <FaArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
