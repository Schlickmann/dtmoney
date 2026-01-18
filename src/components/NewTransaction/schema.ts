import * as yup from "yup";

export const transactionSchema = yup.object().shape({
  description: yup.string().required("Description is required"),
  value: yup
    .number()
    .min(0.01, "Value must be positive")
    .required("Value is required"),
  typeId: yup.number().min(1, "Type is required").required("Type is required"),
  categoryId: yup
    .number()
    .min(1, "Category is required")
    .required("Category is required"),
});
