import './App.css';
import Navbar from './Navbar';
import Cards from './Cards';
import nightSky from './images/night_sky.jpeg';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {
	const [type, setType] = useState('driver');

	let buttonStyle = {
        color: '#5AA9EF',
        backgroundColor: 'white',
        width: '200px', 
        '&:hover': {
            color: 'white',
            backgroundColor: '#5AA9EF',
        },
		marginBottom: '5rem',
		marginTop: '-2rem',
		fontSize: 20
    }

	let typeStyle = {
		textDecoration: 'underline',
		'&:hover': {
			cursor: 'pointer',
			textSize: 40
		}
	}

	return (
		<div style={{margin: '0px 5rem'}}>
			<Navbar/>
			<div style={{marginTop: '-1px', height: '1px', borderColor: 'lightgrey', border: '5px', backgroundColor: 'grey', width: '100vw', marginLeft: '-5rem'}}>

			</div>
			<div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', 'alignItems': 'center' }}>
				<img src={nightSky} style={{ width: '100%', objectFit: 'scale-down', borderRadius: 20}}/>

				<div style={{position: 'absolute', color: 'white', width: '820px', fontSize: 32, marginTop: '120px'}}>
					<div style={{display: 'flex', flexDirection: 'row', marginBottom: '20px'}}>
						<a href="#" style={{...typeStyle, marginRight: '20px', textDecorationColor: type === 'driver' ? '#5AA9EF': 'white', color: type === 'driver' ? '#5AA9EF': 'white'}} 
							onClick = {() => setType("driver")}>
							Driver
						</a>
						<a href="#" style={{...typeStyle, textDecorationColor: type === 'ryder' ? '#5AA9EF': 'white', color: type === 'ryder' ? '#5AA9EF': 'white'}} 
							onClick = {() => setType("ryder")}>
							Ryder
						</a>
					</div>
					{ type === 'driver' ? 
						<div>
							Driving somewhere? Sell those empty seats to other
							college students in a few easy steps! 
							<a href="https://drive.google.com/file/d/1jvhxNLgqCJtuowSzVtYOu5pVHNJ3qheJ/view?usp=sharing" target="_blank" style={{color: 'white', paddingLeft: 4}}>Learn more</a>.
						</div> :
						<div>
							Looking for a ride? Book the empty seats in other
							college students’ cars for! 
							<a href="https://drive.google.com/file/d/1jvhxNLgqCJtuowSzVtYOu5pVHNJ3qheJ/view?usp=sharing" target="_blank" style={{color: 'white', paddingLeft: 4}}>Learn more</a>.
						</div>
					}
				</div>
			</div>
			<Cards/>
			<div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', 'alignItems': 'center' }}>
				<h1 style={{color: '#386D9C', textAlign: 'center', margin: '5rem'}}>
					Want to see how it works? Check out the demo below!
				</h1>
				<Button sx={buttonStyle} variant="outlined" onClick={() => {window.open('https://www.youtube.com/watch?v=Gb0SCjeDO3Q', '_blank')}}>
					Over Here!
				</Button>
			</div>
		</div>
	);
}

export default App;
