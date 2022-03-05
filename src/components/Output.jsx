import './Output.css'

import CloseIcon from '@mui/icons-material/Close'
// import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
// import Wave from '@foobar404/wave'
// import { useEffect, useState } from 'react'

const Output = ({ textInput, closeOutput }) => {
	// let [wave] = useState(new Wave())

	// const loadWave = () => {
	// 	navigator.mediaDevices
	// 		.getUserMedia({
	// 			audio: true,
	// 		})
	// 		.then(function (stream) {
	// 			wave.fromStream(stream, '#here', {
	// 				type: 'shine',
	// 				colors: ['red', 'white', 'blue'],
	// 			})
	// 		})
	// 		.catch(function (err) {
	// 			console.log(err.message)
	// 		})
	// }

	// useEffect(() => {
	// 	loadWave()
	// }, [])
	return (
		<div className='output'>
			<IconButton onClick={closeOutput}>
				<CloseIcon />
			</IconButton>
			<Typography>{textInput}</Typography>
		</div>
	)
}

export default Output
