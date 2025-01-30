/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";
import { cn } from "../utils/cn";

type FormInputProps = ComponentProps<"input"> & {
  control: Control<any>;
  label?: string;
  name: string;
  labelClassName?: string;
};
export default function Input({
  control,
  name,
  label,
  className,
  labelClassName,
  ...inputProps
}: FormInputProps) {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div className="flex flex-col">
      {label && (
        <label
          className={cn(
            `mb-2 text-base font-bold text-[#2f2f2f] ${labelClassName}`
          )}
        >
          {label}
        </label>
      )}
      <input
        {...control.register(name)}
        {...inputProps}
        className={cn(
          `h-[60px] w-full rounded-[12px]  bg-[#F7F7F7] p-[18px] text-base font-normal leading-[24px] outline-none transition-colors placeholder:text-[#10182899] focus-visible:text-[#101828] ${className}`,
          {
            "!border-error": errors?.[name],
          }
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
