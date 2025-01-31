import { Campers } from "../../types/CampersTypes";
import Icon from "../utils/icon";

interface CamperFeaturesProps {
  camperItem: Campers;
}
export default function CamperReviews({ camperItem }: CamperFeaturesProps) {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <Icon key={`yellow-star-${i}`} id="icon-yellow-star" w={16} h={16} />
      );
    }

    for (let i = rating; i < 5; i++) {
      stars.push(<Icon key={`empty-star-${i}`} id="icon-star" w={16} h={16} />);
    }
    return stars;
  };
  return (
    <ul className="flex flex-col gap-5 lg:gap-11 py-3 w-full lg:w-[631px] lg:h-[588px] ">
      {camperItem.reviews?.map((review, index) => {
        return (
          <li
            className="flex flex-col gap-4 overflow-y-auto"
            key={`${review.reviewer_name}-${index}`}
          >
            <div className="flex gap-4 items-center">
              <span className="flex justify-center items-center size-15 rounded-full bg-[#F2F4F7] font-semibold text-2xl leading-[32px] text-[#E44848] ">
                {review.reviewer_name.charAt(0).toUpperCase()}
              </span>
              <div className="flex flex-col gap-1">
                <p className="capitalise font-medium text-base leading-[24px]">
                  {review.reviewer_name}
                </p>
                <div className="flex gap-1">
                  {renderStars(review.reviewer_rating)}
                </div>
              </div>
            </div>
            <p className="font-normal text-base leading-[24px] text-[#475467]">
              {review.comment}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
