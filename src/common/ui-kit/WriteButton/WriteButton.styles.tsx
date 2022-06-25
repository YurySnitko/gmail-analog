import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { WriteButtonWrapperProps } from "./WriteButton.interface";

export const S = {
  Button: styled.button`
    background-color: white;
    border-radius: 20px;
    outline: none;
    border: none;
    box-shadow: 0 1px 3px 0 #9d9d9d;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    margin-left: 0.725rem;

    &:hover {
      box-shadow: 1px 2px 4px 1px #9d9d9d;
    }
  `,

  WriteButtonWrapper: styled.div<WriteButtonWrapperProps>`
    padding: ${(props) => (props.isOpen ? "0 10px 0 5px" : "0 5px")};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    min-height: 2.5rem;
  `,

  WriteButtonText: styled(Typography)`
    color: #d93025;
    font-size: 0.875rem;
    letter-spacing: 0.25px;
    line-height: 2.5rem;
  `,

  EditIcon: styled(EditIcon)`
    color: #d93025;
  `,
};
