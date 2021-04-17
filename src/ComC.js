import { useContext } from "react";
import { Fname, Lname } from "./App";

const ComC = () => {
  const fname = useContext(Fname);
  const lname = useContext(Lname);
  return (
    <h1>
      My name is {fname} {lname}
    </h1>
  );
};

export default ComC;
