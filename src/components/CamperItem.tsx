import { Campers } from "../../types/CampersTypes";
import { cn } from "../utils/cn";
import Icon from "../utils/icon";

interface CamperItemProps {
  camperItem: Campers;
}

export default function CamperItem({ camperItem }: CamperItemProps) {
  const smallImageLink = camperItem?.gallery?.[0]?.thumb;
  const reviewsCount = camperItem?.reviews?.length ?? 0;
  const averageRating =
    camperItem.reviews?.reduce(
      (sum, review) => sum + review.reviewer_rating,
      0
    ) ?? 0;
  const roundedRating =
    averageRating > 0
      ? Math.round((averageRating / reviewsCount) * 10) / 10
      : 0;

  const camperItemUtilities = [
    {
      name: camperItem.transmission,
      value: camperItem.transmission,
      icon: "icon-diagram",
    },
    {
      name: camperItem.engine,
      value: camperItem.engine,
      icon: "icon-fuel-pump",
    },
    { name: "Kitchen", value: camperItem.kitchen, icon: "icon-cup-hot" },
    { name: "AC", value: camperItem.AC, icon: "icon-wind" },
    { name: "Bathroom", value: camperItem.bathroom, icon: "icon-shower" },
    { name: "TV", value: camperItem.TV, icon: "icon-tv" },
    { name: "Radio", value: camperItem.radio, icon: "icon-ui-radios" },
    {
      name: "Refrigerator",
      value: camperItem.refrigerator,
      icon: "icon-fridge",
    },
    { name: "Microwave", value: camperItem.microwave, icon: "icon-microwave" },
    { name: "Gas", value: camperItem.gas, icon: "icon-gas-stove" },
    { name: "Water", value: camperItem.water, icon: "icon-water" },
  ].filter((utility) => utility.value);

  const handleClick = () => {};

  return (
    <>
      <div className="w-73 overflow-hidden h-80  rounded-[10px]">
        <img
          className="object-cover w-full h-full"
          src={smallImageLink}
          alt={camperItem.name}
        />
      </div>
      <div className="w-131">
        <div className="flex justify-between mb-2">
          <h2 className="font-semibold text-2xl leading-[32px] w-[339px] truncate">
            {camperItem.name}
          </h2>
          <div className="flex items-center gap-3">
            <p className="font-semibold text-2xl leading-[32px]">
              €{camperItem.price}.00
            </p>
            <button className="cursor-pointer justify-center items-center">
              <Icon
                id="icon-heart"
                h={24}
                w={26}
                className="hover:fill-[#E44848]"
              />
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center mb-6">
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
        <p className="mb-6 w-131 font-normal text-base leading-[24px] text-[#475467] truncate">
          {camperItem.description}
        </p>
        <ul className="flex flex-wrap gap-2 w-100 mb-6">
          {camperItemUtilities.slice(0, 4).map((utility, index) => {
            return (
              <li
                key={`${camperItem.id}-feature-${index}`}
                className="flex justify-center items-center gap-2 capitalize font-medium text-base leading-[24px] bg-[#F2F4F7] rounded-[100px] px-[18px] py-[12px]"
              >
                <Icon
                  id={utility.icon}
                  w={20}
                  h={20}
                  className={cn("", {
                    "stroke-[#000000] fill-transparent":
                      utility.icon === "icon-water" ||
                      utility.icon === "icon-microwave" ||
                      utility.icon === "icon-gas-stove",
                  })}
                />
                {utility.name}
              </li>
            );
          })}
        </ul>
        <button
          type="button"
          onClick={handleClick}
          className="cursor-pointer bg-[#E44848] text-[#FFFFFF] hover:bg-[#D84343] rounded-[200px] px-10 py-4"
        >
          Show more
        </button>
      </div>
    </>
  );
}
