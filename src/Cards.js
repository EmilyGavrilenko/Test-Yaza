import logo from './images/logo.png';
import { Button } from '@mui/material';
import { borderRadius } from '@mui/system';

function Cards() {

    let card = {
        width: '100%',
        color: 'white',
        backgroundColor: '#5AA9EF',
        padding: '50px',
        borderRadius: 20,
    }

    return (
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'row', borderBottom: '1px', borderColor: 'grey' }}>
            <div style={card}>
                <h1>Our Mission</h1>
                <div style={{fontSize: 20}}>
                    To enable college students to travel hundreds of miles for next to nothing.
                </div>
            </div>
            <div style={{width: '10%'}}/>
            <div style={card}>
                <h1>Our Vision</h1>
                <div style={{marginBottom: '50px', fontSize: 20}}>
                    To enable college students to travel anywhere on any budget.
                </div>
            </div>
        </div>
    );
}

export default Cards;
