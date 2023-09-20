import styled, { css } from "styled-components";

export const NasButton = styled.button`
  box-shadow: inset -2px -2px 37px 0px #cf866c;
  border-radius: 27px;
  border: 2px solid #96736c;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: ${(props) => (props.varijanta === "primary" ? 16 : 14)}px;
  padding: 10px 53px;
  text-decoration: none;
  text-shadow: 8px 5px 0px #854629;

  ${(props) =>
    props.varijanta === "primary" &&
    css`
      background-color: blue;
    `}

  ${(props) =>
    props.varijanta === "secondary" &&
    css`
      background-color: gray;
    `}
`;
