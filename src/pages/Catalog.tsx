import CampersList from "../components/CampersList";
import Filters from "../components/Filters";

const Catalog = () => {
  return (
    <div className="flex px-16 py-12 gap-[64px]">
      <Filters />
      <CampersList />
    </div>
  );
};

export default Catalog;
