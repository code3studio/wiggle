import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';

type Props = {};

const Header = (_props: Props) => {
  return (
    <AppBar sx={{ background: "transparent", boxShadow: "none" }}>
      <Toolbar sx={{mx:4}}>
        <Typography variant="h5">Wiggle</Typography>
        <Box flexGrow={1} />
        <IconButton>
            <TelegramIcon sx={{color:'white'}}/>
          </IconButton>
          <IconButton sx={{ ml: 3,color:'white' }}>
            <XIcon />
          </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
