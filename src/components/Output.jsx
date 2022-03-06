import './Output.css'

import CloseIcon from '@mui/icons-material/Close'

// Components
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
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
		<Box
			className='output'
			sx={{
				backgroundColor: (theme) => theme.palette.error.light,
			}}
		>
			<IconButton onClick={closeOutput}>
				<CloseIcon />
			</IconButton>
			<Typography sx={{ p: '5px' }}>{textInput}</Typography>
		</Box>
	)
}

export default Output
