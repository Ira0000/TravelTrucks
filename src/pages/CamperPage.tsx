import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import { fetchCampersById } from "../redux/campers/operations";
import {
  selectOneCamper,
  selectOneCamperLoading,
} from "../redux/campers/selectors";
import { Campers } from "../../types/CampersTypes";
import Icon from "../utils/icon";
import { countAverage } from "../utils/counterHelpers";
import { cn } from "../utils/cn";
import Loader from "../components/Loader/Loader";
import CamperReviews from "../components/CamperReviews";
import CamperFeatures from "../components/CamperFeatures";
import BookingForm from "../components/forms/BookingForm";

export default function CamperPage() {
  const buildLinkClass = (tab: boolean): string => {
    return cn(
      "text-xl leading-[24px] font-semibold text-[#101828] relative pb-6 cursor-pointer",
      {
        "after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-full after:bg-[#E44848] after:z-10":
          tab,
      }
    );
  };

  const [activeTab, setActiveTab] = useState(false);

  const { id } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchCampersById(id));
    }
  }, [dispatch, id]);

  const camperItem: Campers | null = useAppSelector(selectOneCamper);
  const isLoading: boolean = useAppSelector(selectOneCamperLoading);
  const { reviewsCount, roundedRating } = camperItem
    ? countAverage(camperItem)
    : { reviewsCount: 0, roundedRating: 0 };

  if (isLoading) {
    return <Loader />;
  }

  if (!camperItem) {
    return <div>No camper found</div>;
  }

  return (
    <div className="flex flex-col lg:gap-7 lg:px-16 lg:py-12 gap-3 px-3 py-5">
      <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-2xl leading-[32px]">
          {camperItem.name}
        </h2>
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center gap-1">
            <Icon
              id="icon-yellow-star"
              w={16}
              h={16}
              className=" flex items-center justify-center"
            />
            <p className="font-normal text-base leading-[24px]">
              {roundedRating} ({reviewsCount} Reviews)
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <Icon id="icon-Map" h={16} w={16} />
            <p className="font-normal text-base leading-[24px]">
              {camperItem.location}
            </p>
          </div>
        </div>
        <p className="font-semibold text-2xl leading-[32px]">
          €{camperItem.price}.00
        </p>
      </div>
      <ul className="flex flex-col md:flex-row md:flex-wrap gap-5 lg:gap-12 mx-auto lg:mx-0">
        {camperItem.gallery?.map((photo, index) => {
          return (
            <li
              key={`gallery-${camperItem.id}-${index}`}
              className="w-full md:w-73 lg:w-73 overflow-hidden h-78  rounded-[10px]"
            >
              <img
                className="object-cover size-full"
                src={photo.thumb}
                alt="Camper"
              />
            </li>
          );
        })}
      </ul>
      <p className="mb-8 font-normal text-base leading-[24px] text-[#475467]">
        {camperItem.description}
      </p>
      <div>
        <div className="relative mb-11">
          <div>
            <div className="flex gap-10">
              <button
                onClick={() => setActiveTab(false)}
                className={buildLinkClass(activeTab === false)}
              >
                Features
              </button>
              <button
                onClick={() => setActiveTab(true)}
                className={buildLinkClass(activeTab === true)}
              >
                Reviews
              </button>
            </div>
            <hr className="absolute bottom-0.5 left-0 w-full h-[1px] bg-[#DADDE1] border-0" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 w-full">
          {activeTab ? (
            <CamperReviews camperItem={camperItem} />
          ) : (
            <CamperFeatures camperItem={camperItem} />
          )}
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
