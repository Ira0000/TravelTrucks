/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from "react";
import { Control, Controller, useController } from "react-hook-form";
import DatePicker from "react-datepicker";

type FormCalendarProps = ComponentProps<"input"> & {
  control: Control<any>;
  name: string;
};

export default function Calendar({ control, name }: FormCalendarProps) {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div className="flex flex-col">
      <Controller
        name="bookingDate"
        control={control}
        render={({ field: { onChange, value, ...rest } }) => (
          <DatePicker
            selected={value || null}
            onChange={onChange}
            placeholderText="Booking Date*"
            dateFormat="dd/MM/yyyy" // Customize date format
            className="h-[60px] w-full rounded-[12px]  bg-[#F7F7F7] p-[18px] text-base font-normal leading-[24px] outline-none transition-colors placeholder:text-[#10182899]" // Apply your styles
            {...rest}
          />
        )}
      />
      {errors[name] && (
        <p className="mt-[10px] text-sm text-red-500">
          {errors[name].message?.toString()}
        </p>
      )}
    </div>
  );
}
