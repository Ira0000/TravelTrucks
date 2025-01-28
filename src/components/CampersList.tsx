import { useEffect } from "react";
import {
  selectAllCampers,
  selectCampersHasMorePages,
  selectCampersLoading,
} from "../redux/campers/selectors";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CamperItem from "./CamperItem";
import { fetchCampers } from "../redux/campers/operations";
import { incrementPage } from "../redux/campers/slice";
import Loader from "./Loader/Loader";

const CampersList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  const list = useAppSelector(selectAllCampers);
  //   console.log(list);
  const isLoading = useAppSelector(selectCampersLoading);
  const hasMore = useAppSelector(selectCampersHasMorePages);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCampers());
  };

  return (
    <div className="flex flex-col gap-10">
      <ul className="flex flex-col gap-8">
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className="flex gap-6 border rounded-[20px] border-[#DADDE1] p-6"
            >
              <CamperItem camperItem={item} />
            </li>
          );
        })}
      </ul>
      {isLoading && <Loader />}
      {hasMore && (
        <button
          type="button"
          onClick={handleLoadMore}
          className="cursor-pointer self-center w-[145px] h-[56px] rounded-[200px]  border border-[#DADDE1] tracking-tighter font-medium text-base leading-[24px] hover:border-[#D84343]"
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CampersList;
