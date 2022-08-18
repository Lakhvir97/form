import React, { useState } from "react";

const Input = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const onChange = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  //   const click = (e) =>{
  //     setAge(e.target.value)
  //   }
  return (
    <div>
      <input type="text" name="name" value="name" onChange={onChange}></input>
      {/* <input type="Text" name="age" onChange={click}></input> */}
    </div>
  );
};
export default Input;
