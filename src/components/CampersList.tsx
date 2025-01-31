import { useEffect } from "react";
import {
  selectAllCampers,
  selectCampersError,
  selectCampersHasMorePages,
  selectCampersLoading,
  selectFilters,
} from "../redux/campers/selectors";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import CamperItem from "./CamperItem";
import { fetchCampers } from "../redux/campers/operations";
import { incrementPage, resetPagination } from "../redux/campers/slice";
import Loader from "./Loader/Loader";

export default function CampersList() {
  const dispatch = useAppDispatch();

  const list = useAppSelector(selectAllCampers);
  const filters = useAppSelector(selectFilters);
  const error = useAppSelector(selectCampersError);
  useEffect(() => {
    dispatch(resetPagination());
    dispatch(fetchCampers());
  }, [dispatch, filters.location, filters.form, filters.equipment]);

  const isLoading = useAppSelector(selectCampersLoading);
  const hasMore = useAppSelector(selectCampersHasMorePages);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(fetchCampers());
  };

  if (error)
    return (
      <div>
        <h2 className="font-semibold text-2xl leading-[32px] w-[339px] truncate">
          No Campers to show
        </h2>
      </div>
    );

  return (
    <div className="flex flex-col gap-10 ">
      <ul className="flex flex-col gap-3 lg:gap-8">
        {list.map((item) => {
          return (
            <li key={item.id} className="">
              <CamperItem camperItem={item} />
            </li>
          );
        })}
      </ul>
      {isLoading && <Loader />}
      {!isLoading && !error && hasMore && (
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
}
