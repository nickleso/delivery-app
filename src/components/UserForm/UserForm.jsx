import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { toast } from "react-toastify";

import { getCart, getCartTotal } from "../../redux/selectors";
import { GreenIcon, RedIcon } from "./Icons";
import { validateSchema } from "../../utills.js/validateSchema";
import {
  LogInTitle,
  LogInInput,
  LogInButton,
  LogInWrapper,
  ErrorMessage,
  ApproveMessage,
  InputWrapper,
} from "./UserForm.styled";
import { cartActoins } from "../../redux/cartSlice";
import { sendCartDataAndAddHistory } from "../../redux/operations";

const UserForm = () => {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const cartTotal = useSelector(getCartTotal);

  const formSubmit = (values) => {
    const userCart = { ...values, cartTotal, cart };

    dispatch(sendCartDataAndAddHistory(userCart));
    dispatch(cartActoins.refreshCart());

    toast.success("Cart submitted! Thank you!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <Formik
      validationSchema={validateSchema}
      initialValues={{
        name: "",
        email: "",
        phone: "",
        address: "",
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        formSubmit(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <LogInWrapper>
          <LogInTitle>Checkout</LogInTitle>
          <Form>
            <InputWrapper>
              <LogInInput
                name="name"
                type="text"
                autoComplete="off"
                placeholder="Name"
                marginbottom={touched.name && "24" && (errors.name ? "0" : "0")}
                border={
                  touched.name &&
                  "rgba(245, 146, 86, 0.5)" &&
                  (errors.name
                    ? "1px solid rgba(226, 0, 26, 1)"
                    : `1px solid rgba(60, 188, 129, 1)`)
                }
              />
              {touched.name &&
                "rgba(245, 146, 86, 0.5)" &&
                (errors.name ? (
                  <ErrorMessage>{errors.name}</ErrorMessage>
                ) : (
                  <ApproveMessage>Name is correct</ApproveMessage>
                ))}
              {touched.name &&
                "rgba(245, 146, 86, 0.5)" &&
                (!errors.name ? <GreenIcon /> : <RedIcon />)}
            </InputWrapper>

            <InputWrapper>
              <LogInInput
                name="email"
                type="email"
                autoComplete="off"
                placeholder="Email"
                marginbottom={
                  touched.email && "24" && (errors.email ? "0" : "0")
                }
                border={
                  touched.email &&
                  "rgba(245, 146, 86, 0.5)" &&
                  (errors.email
                    ? "1px solid rgba(226, 0, 26, 1)"
                    : `1px solid rgba(60, 188, 129, 1)`)
                }
              />
              {touched.email &&
                "rgba(245, 146, 86, 0.5)" &&
                (errors.email ? (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                ) : (
                  <ApproveMessage>Email is correct</ApproveMessage>
                ))}
              {touched.email &&
                "rgba(245, 146, 86, 0.5)" &&
                (!errors.email ? <GreenIcon /> : <RedIcon />)}
            </InputWrapper>

            <InputWrapper>
              <LogInInput
                name="phone"
                type="tel"
                autoComplete="off"
                placeholder="Phone"
                marginbottom={
                  touched.phone && "24" && (errors.phone ? "0" : "0")
                }
                border={
                  touched.phone &&
                  "rgba(245, 146, 86, 0.5)" &&
                  (errors.phone
                    ? "1px solid rgba(226, 0, 26, 1)"
                    : `1px solid rgba(60, 188, 129, 1)`)
                }
              />
              {touched.phone &&
                "rgba(245, 146, 86, 0.5)" &&
                (errors.phone ? (
                  <ErrorMessage>{errors.phone}</ErrorMessage>
                ) : (
                  <ApproveMessage>Phone is correct</ApproveMessage>
                ))}
              {touched.phone &&
                "rgba(245, 146, 86, 0.5)" &&
                (!errors.phone ? <GreenIcon /> : <RedIcon />)}
            </InputWrapper>

            <InputWrapper>
              <LogInInput
                name="address"
                type="text"
                autoComplete="off"
                placeholder="Address"
                marginbottom={
                  touched.address && "24" && (errors.address ? "0" : "0")
                }
                border={
                  touched.address &&
                  "rgba(245, 146, 86, 0.5)" &&
                  (errors.address
                    ? "1px solid rgba(226, 0, 26, 1)"
                    : `1px solid rgba(60, 188, 129, 1)`)
                }
              />
              {touched.address &&
                "rgba(245, 146, 86, 0.5)" &&
                (errors.address ? (
                  <ErrorMessage>{errors.address}</ErrorMessage>
                ) : (
                  <ApproveMessage>Address is secure</ApproveMessage>
                ))}
              {touched.address &&
                "rgba(245, 146, 86, 0.5)" &&
                (!errors.address ? <GreenIcon /> : <RedIcon />)}
            </InputWrapper>

            <LogInButton type="submit">Submit</LogInButton>
          </Form>
        </LogInWrapper>
      )}
    </Formik>
  );
};

export default UserForm;
