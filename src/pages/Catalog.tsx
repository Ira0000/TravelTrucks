import { useState } from "react";
import CampersList from "../components/CampersList";
import Filters from "../components/Filters";
import { FaFilter } from "react-icons/fa";
import { useViewport } from "../hooks/viewportWidth";

export default function Catalog() {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const { width } = useViewport();
  const breakpoint = 768;

  if (width > breakpoint)
    return (
      <div className="relative flex flex-col md:flex-row px-2 md:px-5 lg:px-16 py-5 md:py-12 gap-6 md:justify-between lg:gap-[64px] w-full">
        <Filters setIsFilterOpen={setIsFilterOpen} />
        <CampersList />
      </div>
    );

  return (
    <div className="relative flex flex-col md:flex-row px-2 md:px-16 py-5 md:py-12 gap-6 md:gap-[64px] w-full">
      <div className="fixed top-15  z-50 md:hidden">
        <button
          onClick={() => setIsFilterOpen(true)}
          className="bg-transparent text-[#E44848] size-5 cursor-pointer hover:text-[#D84343]"
        >
          <FaFilter />
        </button>
      </div>
      {isFilterOpen && (
        <div className="fixed inset-0 bg-white z-[100] overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-[#E44848]">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="text-3xl text-[#E44848] hover:text-red-700"
              >
                &times;
              </button>
            </div>
            <Filters setIsFilterOpen={setIsFilterOpen} />
          </div>
        </div>
      )}
      <div className="mx-auto w-full">
        <CampersList />
      </div>
    </div>
  );
}
