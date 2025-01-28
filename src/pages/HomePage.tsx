import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div
      className="flex flex-col text-[#F7F7F7] pl-16 justify-center bg-[url(/public/hero_1x.avif)] bg-cover bg-center 
          h-screen"
    >
      <h1 className="font-semibold text-5xl leading-[32px] mb-4">
        Campers of your dreams
      </h1>
      <p className="font-semibold text-2xl leading-[32px] mb-10">
        You can find everything you want in our catalog
      </p>
      <Link
        to="/catalog"
        className="bg-[#E44848] text-[#FFFFFF] w-[173px] h-[56px] text-base rounded-[200px] cursor-pointer hover:bg-[#D84343] transition-colors flex justify-center items-center"
      >
        View Now
      </Link>
    </div>
  );
};

export default HomePage;
