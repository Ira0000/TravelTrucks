import CampersList from "../components/CampersList";
import Filters from "../components/Filters";
import Location from "../components/Location";

const Catalog = () => {
  return (
    <div className="flex px-16 py-12 gap-16">
      <div className="flex flex-col gap-10 w-90">
        <Location />
        <Filters />
      </div>
      <CampersList />
    </div>
  );
};

export default Catalog;
