import logo from './images/logo.png';
import { Button } from '@mui/material';

function Navbar() {

    let buttonStyle = {
        color: '#5AA9EF',
        backgroundColor: 'white',
        width: '180px', 
        '&:hover': {
            color: 'white',
            backgroundColor: '#5AA9EF',
        },
        fontSize: 18
    }

    return (
        <div style={{ margin: '1rem', display: 'flex', flexDirection: 'row', borderBottom: '1px', borderColor: 'grey' }}>
            <div style={{textAlign: 'left', flexGrow: '1' }}>
                <img src={logo} style={{width: '100px'}}/>
            </div>
            <div style={{textAlign: 'right', borderColor: 'red', border: '2px'}}>
                <Button sx={buttonStyle} variant="outlined" 
                    onClick={() => {window.open('mailto:jmorri54@calpoly.edu', '_blank')}}
                >
                    Contact Us
                </Button>
            </div>
        </div>
    );
}

export default Navbar;
