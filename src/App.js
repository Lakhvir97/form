import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function App() {
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [address, setAddress] = useState("");
  const schema = yup
    .object({
      name: yup.string().required(),
      age: yup.string().required(),
      address: yup.string().required(),
    })
    .required();

  const [entry, setEntry] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = () => {

  //
  //   setName("");
  //   setAge("");
  //   setAddress("");
  // };

  const onSubmit = (data) => {
    const { name, address, age } = data;
    // console.log(data);
    const newEntry = { name, age, address };
    setEntry([...entry, newEntry]);
    reset();
  };

  return (
    <>
      {/* <form className="App" onSubmit={Submit}>
        <span>Name</span>
        <input
          type="text"
          autoComplete="off"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <span>Age</span>
        <input
          name="age"
          autoComplete="off"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <span>Address</span>
        <input
          {...register("Address", { required: true })}
          type="Text"
          autoComplete="off"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <button>Submit</button>
      </form> */}

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Name"
          autoComplete="off"
          {...register("name")}
          // onChange={(e) => setName(e.target.value)}
          // value={name}
        />
        {errors.name && <p>Name is required.</p>}
        <input
          placeholder="Age"
          autoComplete="off"
          {...register("age")}
          // onChange={(e) => setAge(e.target.value)}
          // value={age}
          type="number"
        />
        {errors.age && <p>Age invalid.</p>}
        <input
          placeholder="Address"
          autoComplete="off"
          {...register("address", { required: true })}
          // onChange={(e) => setAddress(e.target.value)}
          // value={address}
        />

        {errors.address && <p>Address is required.</p>}
        <input type="submit" className="Button" />
      </form>
      <div className="Main-div">
        {entry.map((cur) => {
          const { name, age, address } = cur;

          return (
            <div className="List">
              <li>
                <span>Name -</span>
                {name}
              </li>

              <li>
                <span>Age -</span>
                {age}
              </li>

              <li>
                <span>Address -</span>
                {address}
              </li>
              {/* <div class="Delete" id="Delete">
                <span>
                  <i class="material-icons">delete</i>
                </span>
              </div> */}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
