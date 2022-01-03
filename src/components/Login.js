import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Login({ userId }) {
  const idRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(idRef.current.value);
  };

  const createId = () => {
    console.log(uuidv4());
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="login">login: </label>
      <input type="text" ref={idRef} required />

      <button type="submit">Login</button>
      <button onClick={createId}>Create user Id</button>
    </form>
  );
}
