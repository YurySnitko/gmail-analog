import {Grid, Typography} from "@mui/material";
import styled from "@emotion/styled";
import EditIcon from "@mui/icons-material/Edit";

export const S = {
  Aside: styled(Grid)`
    width: 256px;
    display: flex;
    padding-top: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  `,

  WriteButtonWrapper: styled.div`
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  `,

  EditIcon: styled(EditIcon)`
    color: red;
  `,

  WriteButtonText: styled(Typography)`
    color: red;
    font-size: .875rem;
    letter-spacing: .25px;
    line-height: 2.5rem;
  `,
}