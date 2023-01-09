import { AppBar, Toolbar, styled, Box } from "@mui/material";

// components
import LoginDialog from "./account/LoginDialog";

const Header = styled(AppBar)`
  height: 210px;
  background-color: #00bfa5;
  box-shadow: none;
`;

const Component = styled(Box)`
  height: 100vh;
  background-color: #dcdcdc;
`;

const Messenger = () => {
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <LoginDialog />
    </Component>
  );
};

export default Messenger;
