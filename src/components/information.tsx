import { Box, Grid, Typography } from '@mui/material'

type Props = {}

const Information = (_props: Props) => {
  return (
    <div>
        <Box sx={{p:4}}>

<Grid container justifyContent={"center"}>
    <Typography variant='h5'>About us</Typography>
</Grid>
        <Typography>World of Wiggles is a community of diverse, and unique women living on the Solana blockchain. Each Wiggle was a hand-drawn labor of love that took months of planning Join us in our journey as we try to lift up and help bring Women led projects to the forefront of Crypto Space!</Typography>
        </Box>
    </div>
  )
}

export default Information