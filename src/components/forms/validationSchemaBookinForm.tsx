import * as yup from "yup";

interface BookingForm {
  name: string;
  email: string;
  bookingDate: Date;
  comment?: string | undefined;
}

const validationSchemaBookingForm = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name is too short!")
    .max(25, "Name is too long!")
    .required("Name is required."),
  email: yup
    .string()
    .email("Please enter a valid email address.")
    .min(2, "Email is too short!")
    .max(50, "Email is too long!")
    .matches(/[@]/, "Please enter a valid email address.")
    .required("Email is required."),
  bookingDate: yup
    .date()
    .transform((value, originalValue) => {
      // Transform empty string to undefined
      return originalValue === "" ? undefined : value;
    })
    .required("Booking date is required"),
  comment: yup.string().max(200, "Comment is too long!"),
});

export type BookingFormValues = BookingForm;

export default validationSchemaBookingForm;
