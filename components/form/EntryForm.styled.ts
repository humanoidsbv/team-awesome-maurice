import styled from "styled-components";

export const EntryFormWrapper = styled.form<{ isOpen?: boolean }>`
  background-color: #f5f8fa;
  border: solid 1px #e6eaee;
  border-radius: 4px;
  display: none;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 5px;
  padding: 16px 16px;
  position: relative;
  width: 100%;

  ${(props) => props.isOpen && `display: flex`};

  @media screen and (min-width: 1024px) {
    display: inline-flex;
    flex-direction: row;
    height: 94px;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const InputElementWrapper = styled.div<{ smallWidth?: boolean }>`
  height: 62px;
  margin-top: 10px;
  width: 100%;
  width: ${(props) => (props.smallWidth ? "calc(50% - 6px)" : "100%")};

  @media screen and (min-width: 1024px) {
    width: 14%;
    margin-right: 12px;
    margin-top: 0px;
  }
`;

export const EntryFormInputTitle = styled.label`
  color: #68768c;
  font-family: "Proxima Nova", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  opacity: 0.5;
  text-transform: uppercase;

  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;

export const EntryFormInput = styled.input<{ invalid?: boolean }>`
  background-image: linear-gradient(to top, #f2f4f7, #fff);
  border-radius: 4px;
  border: solid 1px ${(props) => (props.invalid ? "#ced0da;" : "#fb6375")};
  font-family: "Proxima Nova", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
  font-weight: 600;
  margin-top: 12px;
  padding: 9px 15px;
  width: 100%;

  @media screen and (min-width: 1024px) {
    font-size: 10px;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 3px;
  position: absolute;
  right: 15px;
  top: 20px;

  img {
    height: 10px;
    width: 10px;
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const FormTitle = styled.h1`
  color: #354052;
  font-family: "Proxima Nova", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 24px;
  font-weight: normal;
  margin-bottom: 10px;

  @media screen and (min-width: 0px) and (max-width: 1024px) {
    display: none;
  }
`;
