export const validateForm = (form) => {
  const errors = { isValid: true };
  if (!form.firstName) {
    errors.firstName = "Please enter first name";
    errors.isValid = false;
  }
  if (!form.lastName) {
    errors.lastName = "Please enter last name";
    errors.isValid = false;
  }
  if (!form.address) {
    errors.address = "Please enter address";
    errors.isValid = false;
  }
  if (!form.contactNumber.match(/^\d{10}$/g)) {
    errors.contactNumber = "Please enter valid contact number";
    errors.isValid = false;
  }
  return errors;
};

export const formFields = [
  {
    id: "firstName",
    placeholder: "Enter first name",
  },
  {
    id: "lastName",
    placeholder: "Enter last name",
  },
  {
    id: "address",
    placeholder: "Enter address",
  },
  {
    id: "contactNumber",
    placeholder: "Enter contact number",
  },
];
export const initialValues = {
  firstName: "",
  lastName: "",
  address: "",
  contactNumber: "",
};
