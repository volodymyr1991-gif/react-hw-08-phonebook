import axios from "axios";
import {
  contactRequest,
  contactSuccess,
  contactError,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
} from "./contactsAction";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

const addToContactsDB = (name, number) => (dispatch) => {
  dispatch(contactRequest());
  axios
    .post("/contacts", { name, number })
    .then(({ data }) => {
      dispatch(contactSuccess(data));
    })
    .catch((error) => dispatch(contactError(error)));
};
const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError(error)));
};
const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch((error) => dispatch(removeContactError(error)));
};

export { addToContactsDB, fetchContacts, removeContact };
