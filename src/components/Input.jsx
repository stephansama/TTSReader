import TextareaAutosize from '@mui/material/TextareaAutosize'
import { useContext } from 'react'
import { tts } from '../contexts/tts'

import './Input.css'

const Input = () => {
	const { textInput, setTextInput, showOutput } = useContext(tts)

	return (
		<TextareaAutosize
			value={textInput}
			onChange={(e) => setTextInput(e.target.value)}
			disabled={showOutput}
			autoFocus={true}
			minRows={5}
			className='textArea'
			placeholder='Input text here'
		/>
	)
}

export default Input
