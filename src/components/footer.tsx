import { Box, Grid, IconButton, Typography } from '@mui/material';
import Dog from './dog';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
type Props = {}

const Footer = (_props: Props) => {
  return (
    <div>
      <Grid container alignItems="center" sx={{ p: 2 }}>
        <Grid item xs={4} container justifyContent="flex-start">
          <Dog width="30px" />
        </Grid>
        <Grid item xs={4} container justifyContent="center">
          <Typography variant="h5" textAlign={"center"}>$wiggle</Typography>
        </Grid>
        <Grid item xs={4} container justifyContent="flex-end">
          <Box display={"flex"}>
            <IconButton>
              <TelegramIcon />
            </IconButton>
            <IconButton sx={{ ml: 3 }}>
              <XIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
