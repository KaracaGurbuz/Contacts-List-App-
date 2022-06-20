import { useState, useEffect } from "react";
const intialFormValues = { fullname: "", phone_number: "" };
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(intialFormValues);
  useEffect(() => {
    setForm(intialFormValues);
  }, [contacts]);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]);
  };
  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          value={form.fullname}
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <input
          value={form.phone_number}
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
        ></input>
      </div>
      <div>
        <button className="addBtn">Add</button>
      </div>
    </form>
  );
}
export default Form;
