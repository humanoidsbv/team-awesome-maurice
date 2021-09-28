import styled from "styled-components";

export const EntryFormWrapper = styled.form`
  background-color: #f5f8fa;
  border-radius: 4px;
  border: solid 1px #e6eaee;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 422px; 
  margin-top: 5px;
  padding: 16px 16px;
  position: relative;
  width: auto;
`;

export const InputElementWrapper = styled.div<{ smallWidth?: boolean }>`
  height: 62px;
  margin: 5px;
  width: 100%;

  width: ${(props) => (props.smallWidth ? "47%" : "100%")};
`;

export const EntryFormInputTitle = styled.label`
  color: #68768c;
  font-family: "Proxima Nova";
  font-size: 12px;
  opacity: 0.5;
`;

export const EntryFormInput = styled.input`
  background-image: linear-gradient(to top, #f2f4f7, #fff);
  border-radius: 4px;
  border: solid 1px #ced0da;
  font-family: "Proxima Nova";
  font-size: 14px;
  font-weight: 600;
  margin-top: 12px;
  padding: 9px 15px;
  width: 100%;
`;

export const FormClose = styled.img`
  height: auto;
  position: absolute;
  right: 20px;
  top: 23px;
  width: 7px;
`;
