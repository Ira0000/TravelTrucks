import { Controller, useForm } from "react-hook-form";
import validationSchemaBookingForm, {
  BookingFormValues,
} from "./validationSchemaBookinForm";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Textarea from "../Textarea";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "../Calendar";

export default function BookingForm() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<BookingFormValues>({
    resolver: yupResolver(validationSchemaBookingForm),
    defaultValues: {
      name: "",
      email: "",
      bookingDate: null,
      comment: "",
    },
  });

  const onSubmit = async (data: BookingFormValues) => {
    console.log(data);
  };

  return (
    <form
      className="px-11 py-[57px] w-[641px] h-[588px] border border-[#DADDE1] rounded-[10px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-xl font-semibold leading-[24px] mb-2">
            Book your campervan now
          </h3>
          <p className="text-base font-normal leading-[24px] text-[#6C717B]">
            Stay connected! We are always ready to help you.
          </p>
        </div>
        <div className="flex flex-col gap-[14px]">
          <div className="">
            <Input
              control={control}
              name="name"
              placeholder="Name*"
              type="name"
              required={true}
            />
          </div>
          <div className="">
            <Input
              control={control}
              name="email"
              placeholder="Email*"
              type="email"
              required={true}
            />
          </div>

          {/* <div>
            <Input
              control={control}
              name="bookingDate"
              type="date"
              placeholder="Booking Date*"
            />
          </div> */}
          <div>
            <Calendar control={control} name="bookingDate" />
          </div>
          <div className="">
            <Textarea
              control={control}
              name="comment"
              placeholder="Comment"
              className="h-[118px]"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer place-self-center w-[166px] h-[56px] rounded-[200px] bg-[#E44848] text-base font-medium text-[#FFFFFF] transition-colors hover:bg-[#D84343]"
        >
          Send
        </button>
      </div>
    </form>
  );
}
