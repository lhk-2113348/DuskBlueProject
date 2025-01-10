import styled from "styled-components";
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

const FormSelect = styled.select`
  ${FormProps};
`;
const Label = styled.label`
  color: ${(props) => props.labelColor || "white"};
  display: block;
  margin-bottom: 5px;
`;
const Select = ({ label, name, options, labelColor, ...props }) => {
  return (
    <>
      <Label color={labelColor}>{label}</Label>
      <FormSelect name={name} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </FormSelect>
    </>
  );
};
export default Select;
