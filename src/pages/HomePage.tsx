import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex h-screen flex-col justify-center bg-[url(/public/hero_1x.avif)] bg-cover bg-center pl-2 text-bgInputGray md:pl-16">
      <h1 className="mb-4 text-5xl leading-[48px] font-semibold md:leading-[32px]">
        Campers of your dreams
      </h1>
      <p className="mb-10 text-2xl font-xl">
        You can find everything you want in our catalog
      </p>
      <Link
        to="/catalog"
        className="flex h-[56px] w-[173px] cursor-pointer items-center justify-center rounded-[200px] bg-red text-base text-white transition-colors hover:bg-hoverRed"
      >
        View Now
      </Link>
    </div>
  );
};

export default HomePage;
