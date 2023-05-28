import * as yup from "yup";

export const validateSchema = () =>
  yup.object().shape({
    name: yup
      .string()
      .required(`Required`)
      .min(3, `Name should be from 3 to 15 characters`)
      .max(15, `Name should be from 3 to 15 characters`)
      .trim(),
    email: yup
      .string()
      .required(`Required`)
      .email(`Enter a valid email`)
      .min(3, `Name should be from 3 to 15 characters`)
      .max(15, `Name should be from 3 to 15 characters`)
      .trim(),
    phone: yup
      .string()
      .required(`Required`)
      .min(3, `Phone should be from 3 to 15 characters`)
      .max(15, `Phone should be from 3 to 15 characters`)
      .trim(),
    address: yup
      .string()
      .required(`Required`)
      .min(3, `Address should be from 3 to 30 characters`)
      .max(30, `Address should be from 3 to 30 characters`)
      .trim(),
  });
