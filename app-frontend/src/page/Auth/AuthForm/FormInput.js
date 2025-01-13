import styled from "styled-components";
import { ErrorMessage } from "./WholeForm";

const FormProps = {
  padding: "10px",
  fontsize: "20px",
  borderRadius: "4px",
  width: "300px",
  height: "40px",
  margin: "0 auto",
  boxSizing: "border-box",
  display: "block",
  border: "transparent",
  marginBottom: "10px",
};

const FormInput = styled.input`
  ${FormProps};
`;

const Label = styled.label`
  color: ${(props) => props.color || "white"};
  display: block;
  margin-bottom: 5px;
`;
const ErrorMessageComponent = ({ message }) => {
  return <ErrorMessage dangerouslySetInnerHTML={{ __html: message }} />;
};
const Input = ({
  label,
  type,
  $labelColor = "white",
  register,
  name,
  rules = {},
  errors,
  errorMessage,
}) => {
  return (
    <>
      <Label color={$labelColor}>{label}</Label>
      <FormInput {...register(name, rules)} type={type} name={name} />
      {errors[name] && <ErrorMessageComponent message={errorMessage} />}
    </>
  );
};

export default Input;
