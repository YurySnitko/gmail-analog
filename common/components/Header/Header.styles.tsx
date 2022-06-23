import { Avatar as MuiAvatar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Header = styled("header")(({ theme }) => ({
  backgroundColor: "none",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  height: "64px",
  padding: "8px",
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

export const LeftSide = styled("div")`
  display: flex;
  align-items: center;
  flex: 1 0 auto;
  height: 48px;
  min-width: 238px;
  padding-right: 30px;
`;

export const RightSide = styled("div")`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
  height: 48px;
`;

export const Center = styled("div")`
  display: flex;
  align-items: center;
  flex: 1 1 100%;
  height: 48px;
`;

export const SearchBarWrapper = styled("div")`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  height: 48px;
  width: 100%;
  padding-right: 30px;
  padding-left: 10px;
`;

export const Toolbar = styled("div")`
  display: flex;
  align-items: center;
  height: 48px;
`;

export const Avatar = styled(MuiAvatar)((props) => ({
  width: "32px",
  height: "32px",
  fontSize: "16px",
  backgroundColor: props.theme.palette.primary.main,
}));

export const Title = styled("div")`
  display: flex;
  align-items: flex-end;
`;
