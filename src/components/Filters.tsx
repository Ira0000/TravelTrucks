import { SubmitHandler, useForm } from "react-hook-form";
import Icon from "../utils/icon";
import { cn } from "../utils/cn";
import { changeFilter } from "../redux/campers/slice";
import { useAppDispatch } from "../redux/hooks";
import { Equipment } from "../../types/CampersTypes";

interface FormValues {
  location: string;
  vehicleType: string;
  equipment: Equipment[];
}

export default function Filters() {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      location: "",
      vehicleType: "",
      equipment: [],
    },
  });

  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FormValues> = (data) =>
    dispatch(changeFilter(data));

  const vehicleTypes = [
    { name: "Panel Truck", icon: "icon-grid-3" },
    { name: "Fully Integrated", icon: "icon-grid-4" },
    { name: "Alcove", icon: "icon-grid-9" },
  ];
  const equipmentOptions = [
    { name: "kitchen", icon: "icon-cup-hot" },
    { name: "AC", icon: "icon-wind" },
    { name: "bathroom", icon: "icon-shower" },
    { name: "TV", icon: "icon-tv" },
    { name: "radio", icon: "icon-ui-radios" },
    { name: "refrigerator", icon: "icon-fridge" },
    { name: "microwave", icon: "icon-microwave" },
    { name: "gas", icon: "icon-gas-stove" },
    { name: "water", icon: "icon-water" },
  ];

  return (
    <form
      className="w-[360px] flex flex-col gap-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="location"
          className="text-[#6C717B] font-normal text-base leading-[24px]"
        >
          Location
        </label>
        <div className="relative group">
          <input
            id="location"
            type="text"
            {...register("location")}
            className="pl-[48px] w-90 bg-[#F7F7F7] h-14 rounded-2xl focus:outline-none focus:fill-[#101828] placeholder:text-[#6C717B] text-[#101828] font-normal text-base leading-[24px]"
            placeholder="City"
          />
          <Icon
            id="icon-Map"
            w={20}
            h={20}
            className="flex w-5 h-14 items-center justify-center absolute top-0 left-5  fill-[#6C717B] group-hover:fill-[#101828] group-focus:fill-[#101828]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-8">
        <p className="font-medium text-base leading-[24px] text-[#475467]">
          Filters
        </p>
        <div className="flex flex-col gap-6">
          <label className=" font-semibold text-xl leading-[24px] mb-6">
            Vehicle Equipment
          </label>
          <hr className="border border-[#DADDE1]" />
          <ul className="grid grid-cols-3 gap-3">
            {equipmentOptions.map((item, index) => (
              <li key={index} className="relative">
                <input
                  type="checkbox"
                  id={item.name}
                  value={item.name}
                  {...register("equipment")}
                  className="peer sr-only"
                />
                <label
                  htmlFor={item.name}
                  className="flex flex-col gap-2 items-center rounded-xl justify-center border border-[#DADDE1] w-[112px] h-[96px] transition-colors duration-200 cursor-pointer hover:border-[#101828] peer-checked:!border-[#E44848]"
                >
                  <Icon
                    id={item.icon}
                    w={32}
                    h={32}
                    className={cn({
                      "stroke-[#000000] fill-transparent":
                        item.icon === "icon-water" ||
                        item.icon === "icon-microwave" ||
                        item.icon === "icon-gas-stove",
                    })}
                  />
                  <p className="capitalize">{item.name}</p>
                </label>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-8">
          <label className="font-semibold text-xl leading-[24px] mb-6">
            Vehicle Type
          </label>
          <hr className="border border-[#DADDE1]" />
          <ul className="grid grid-cols-3 gap-3">
            {vehicleTypes.map((type) => (
              <li key={type.name} className="relative">
                <input
                  type="radio"
                  id={type.name}
                  value={type.name}
                  {...register("vehicleType")}
                  className="peer sr-only"
                />
                <label
                  htmlFor={type.name}
                  className="flex flex-col gap-2 items-center rounded-xl justify-center border border-[#DADDE1] w-[112px] h-[96px] transition-colors duration-200 cursor-pointer hover:border-[#101828] peer-checked:!border-[#E44848]"
                >
                  <Icon id={type.icon} w={32} h={32} />
                  <p className="capitalize text-center">{type.name}</p>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="submit"
        className="w-[166px] h-[56px] bg-[#E44848] text-white rounded-[200px] hover:bg-[#D84343] transition-colors cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
