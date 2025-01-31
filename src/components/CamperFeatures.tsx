import { Campers, CamperUtility } from "../../types/CampersTypes";
import { filterCamperUtilities } from "../utils/counterHelpers";
import Icon from "../utils/icon";
import { cn } from "../utils/cn";

interface CamperFeaturesProps {
  camperItem: Campers;
}

export default function CamperFeatures({ camperItem }: CamperFeaturesProps) {
  const camperItemUtilities: CamperUtility[] = camperItem
    ? filterCamperUtilities(camperItem)
    : [];
  return (
    <div className="flex flex-col px-3 py-5 lg:px-13 lg:py-11 lg:w-[631px] lg:h-[588px] justify-between bg-[#F7F7F7] rounded-[10px]">
      <ul className="flex flex-wrap gap-2 lg:w-[527px] w-full">
        {camperItemUtilities.map((utility, index) => {
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
      <div className="flex flex-col gap-6">
        <h3 className="font-semibold text-xl leading-[24px] ">
          Vehicle details
        </h3>
        <hr className="w-full h-[1px] bg-[#DADDE1] border-0" />
        <table className="border-separate border-spacing-y-4">
          <tbody className="font-medium text-base leading-[24px]">
            <tr>
              <td>Form</td>
              <td className="capitalize text-right">{camperItem.form}</td>
            </tr>
            <tr>
              <td>Length</td>
              <td className="text-right">{camperItem.length}</td>
            </tr>
            <tr>
              <td>Width</td>
              <td className="text-right">{camperItem.width}</td>
            </tr>
            <tr>
              <td>Height</td>
              <td className="text-right">{camperItem.height}</td>
            </tr>
            <tr>
              <td>Tank</td>
              <td className="text-right">{camperItem.tank}</td>
            </tr>
            <tr>
              <td>Consumption</td>
              <td className="text-right">{camperItem.consumption}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
