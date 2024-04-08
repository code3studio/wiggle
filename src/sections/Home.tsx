import { Box, styled } from '@mui/material';
import React, {  } from 'react';

type Props = {
    children: React.ReactNode;
    image:number
};



const Root = styled(Box, { shouldForwardProp: (prop) => prop !== 'image' })<{ image: number }>(({  image }) => ({
    background: `url(assets/background/1${image}.jpg) no-repeat`, 
    backgroundSize:'cover',
    width:"100vw",height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
    
}));

const Home = ({ children ,image}: Props) => {
    return (
        <Root image={image}> 
            {children}
        </Root>
    );
};

export default Home;
