import { object, string } from "yup";

const payload = {
  body: object({
    title: string()
      .required("Title is required")
      .max(40, "Title must be at most 40 characters.")
      .min(5, "Title must be atleast 5 characters."),
    subtitle: string()
      .required("Subtitle is required")
      .max(20, "Subtitle must be at most 20 characters.")
      .min(5, "Subtitle must be atleast 5 characters."),
    desc: string()
      .required("Description is required")
      .max(500, "Description is too long.")
      .min(50, "Description is too short."),
    url: string()
      .required("Url Path is required")
      .max(20, "Url path is too long.")
      .min(5, "Url path is too short."),
  }),
};

const params = {
  params: object({
    id: string().required("id is required"),
  }),
};

export const createProductSchema = object({
  ...payload,
});

export const editProductSchema = object({
  ...params,
  ...payload,
});
