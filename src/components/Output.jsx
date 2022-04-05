import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import Box from '@mui/material/Box'

import { useContext, useEffect } from 'react'

import { tts } from '../contexts/tts'

import './Output.css'

const Output = () => {
	const { textInput, closeOutput, currentCharacter, showOutput } =
		useContext(tts)

	const getCurr = (before) => {
		// get the words before the cursor
		let tmp = textInput.substring(0, currentCharacter)
		// grab the words after the cursor
		let t2 = textInput.substring(currentCharacter)
		// find the next space
		let spaceLoc = t2.indexOf(' ')
		if (spaceLoc > -1)
			return before
				? textInput.substring(0, tmp.length + spaceLoc)
				: textInput.substring(tmp.length + spaceLoc)
		return before ? textInput : ''
	}

	useEffect(() => {
		console.log(currentCharacter)
	}, [currentCharacter])

	return (
		<Box
			id='output'
			className={showOutput ? 'output-display' : 'output-hide'}
			sx={{
				backgroundColor: (theme) => theme.palette.error.light,
			}}
		>
			<IconButton onClick={closeOutput}>
				<CloseIcon />
			</IconButton>
			<Typography sx={{ p: '5px' }}>
				<span className='highlighted'>{getCurr(true)}</span>
				<span>{getCurr(false)}</span>
			</Typography>
		</Box>
	)
}

export default Output
