import Button from "./Button";
import FirstComponent from "./FirstComponent";

export const Assembly = () => {
  return (
    <>
      <Button />
      <FirstComponent />
    </>
  );
};

export const AssemblyTwo = () => {
  return (
    <>
      <FirstComponent />
      <Button />
    </>
  );
};