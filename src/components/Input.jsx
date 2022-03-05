// CSS
import './Input.css'

import TextareaAutosize from '@mui/material/TextareaAutosize'

const Input = ({ textInput, onChange, disabledState }) => {
	return (
		<TextareaAutosize
			value={textInput}
			onChange={onChange}
			disabled={disabledState}
			minRows={5}
			className='textArea'
			placeholder='Input text here'
		/>
	)
}

export default Input
