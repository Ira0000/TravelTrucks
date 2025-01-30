import { ComponentProps } from "react";
import { Control, useController } from "react-hook-form";
import { cn } from "../utils/cn";

type FormTextareaProps = ComponentProps<"textarea"> & {
  control: Control<any>;
  label?: string;
  name: string;
  labelClassName?: string;
  required?: boolean;
};

export default function Textarea({
  control,
  name,
  label,
  className,
  labelClassName,
  required,
  ...textareaProps
}: FormTextareaProps) {
  const {
    formState: { errors },
  } = useController({ control, name });

  return (
    <div className="flex flex-col">
      {label && (
        <div className="flex items-start gap-1">
          <label
            className={cn(
              `mb-2 text-base font-bold text-[#2f2f2f] ${labelClassName}`
            )}
          >
            {label}
            {required && (
              <span className="text-red-500 text-xs align-top ml-0.5">*</span>
            )}
          </label>
        </div>
      )}
      <textarea
        {...control.register(name)}
        {...textareaProps}
        className={cn(
          `min-h-[120px] w-full rounded-[12px] bg-[#F7F7F7] p-[18px] text-base font-normal leading-[24px] outline-none transition-colors placeholder:text-[#10182899] focus-visible:text-[#101828] resize-y ${className}`,
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
