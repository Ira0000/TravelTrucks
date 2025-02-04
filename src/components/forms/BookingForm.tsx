import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DatePicker from "react-datepicker";
import toast, { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";
import bookingValidationSchema, {
  BookingFormData,
} from "./validationSchemaBookinForm";
import Button from "../ui/Button";

// Input component
const Input = ({
  control,
  name,
  placeholder,
  type,
  required,
}: {
  control: any;
  name: string;
  placeholder: string;
  type: string;
  required?: boolean;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col">
          <input
            {...field}
            type={type}
            required={required}
            placeholder={placeholder}
            className="h-[60px] w-full rounded-[12px] bg-bgInputGray p-[18px] text-base font-base transition-colors outline-none placeholder:text-[#10182899] hover:bg-bgLightGray"
          />
          {error && (
            <p className="mt-[10px] text-sm text-hoverRed">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

// Textarea component
const Textarea = ({
  control,
  name,
  placeholder,
  className,
}: {
  control: any;
  name: string;
  placeholder: string;
  className?: string;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col">
          <textarea
            {...field}
            placeholder={placeholder}
            className={`w-full rounded-[12px] bg-bgInputGray p-[18px] text-base font-base transition-colors outline-none placeholder:text-[#10182899] hover:bg-bgLightGray ${className}`}
          />
          {error && (
            <p className="mt-[10px] text-sm text-hoverRed">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

// Calendar component
const Calendar = ({
  control,
  name,
}: {
  control: any;
  name: string;
  required?: boolean;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="flex flex-col">
          <DatePicker
            selected={value}
            onChange={onChange}
            placeholderText="Booking Date*"
            dateFormat="dd/MM/yyyy"
            className="h-[60px] w-full rounded-[12px] bg-bgInputGray p-[18px] text-base font-base transition-colors outline-none placeholder:text-[#10182899] hover:bg-bgLightGray"
          />
          {error && (
            <p className="mt-[10px] text-sm text-red-500">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};

export default function BookingForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<BookingFormData>({
    resolver: yupResolver(bookingValidationSchema),
    defaultValues: {
      name: "",
      email: "",
      bookingDate: undefined,
      comment: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: BookingFormData) => {
    toast.success(`${data.name}, your request was submitted!`, {
      duration: 4000,
      position: "top-right",
    });
  };

  return (
    <>
      <Toaster />
      <form
        noValidate
        className="w-full rounded-[10px] border border-borderGray px-3 py-5 lg:h-[588px] lg:w-[641px] lg:px-11 lg:py-[57px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="mb-2 text-xl font-xl">Book your campervan now</h3>
            <p className="text-base font-base text-gray">
              Stay connected! We are always ready to help you.
            </p>
          </div>
          <div className="flex flex-col gap-[14px]">
            <Input
              control={control}
              name="name"
              placeholder="Name*"
              type="text"
              required
            />
            <Input
              control={control}
              name="email"
              placeholder="Email*"
              type="email"
              required
            />
            <Calendar control={control} name="bookingDate" />
            <Textarea
              control={control}
              name="comment"
              placeholder="Comment"
              className="h-[118px]"
            />
          </div>
          <Button
            text="Send"
            type="submit"
            className="place-self-center text-white"
          />
        </div>
      </form>
    </>
  );
}
