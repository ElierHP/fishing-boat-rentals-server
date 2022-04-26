import * as yup from "yup";

export const productSchema = yup.object().shape({
  title: yup
    .string()
    .required("Title is required")
    .max(40, "Title must be at most 40 characters.")
    .min(5, "Title must be atleast 5 characters."),
  subtitle: yup
    .string()
    .required("Subtitle is required")
    .max(20, "Subtitle must be at most 20 characters.")
    .min(5, "Subtitle must be atleast 5 characters."),
  desc: yup
    .string()
    .required("Description is required")
    .max(500, "Description is too long.")
    .min(50, "Description is too short."),
  url: yup
    .string()
    .required("Url Path is required")
    .max(20, "Url path is too long.")
    .min(5, "Url path is too short."),
});
