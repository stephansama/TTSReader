import { createContext, useState } from 'react'

export const tts = createContext('')

export function TTSProvider({ children }) {
	const [textInput, setTextInput] = useState('')
	const [showOutput, setShowOutput] = useState(false)
	const [utterance, setUtterance] = useState(null)
	const [currentCharacter, setCurrentCharacter] = useState('')
	const [rate, setRate] = useState(1)

	const closeOutput = (e) => {
		setShowOutput(false)
		setTextInput('')
		window.speechSynthesis.cancel()
	}

	const changeRate = (e) => {
		setRate(parseFloat(e.target.value))
		if (window.speechSynthesis.speaking) window.speechSynthesis.cancel()

		// TODO: restart playback if playing
	}

	const pauseSpeaking = (e) => {
		if (window.speechSynthesis.speaking) window.speechSynthesis.pause()
	}

	const startSpeaking = (e) => {
		if (window.speechSynthesis.speaking && window.speechSynthesis.paused)
			return window.speechSynthesis.resume()

		console.log(textInput)

		setUtterance(() => {
			const utter = new SpeechSynthesisUtterance(textInput)
			utter.rate = rate
			window.speechSynthesis.speak(utter)
			utter.onboundary = (e) => setCurrentCharacter(e.charIndex)
			return utter
		})
		setShowOutput(true)
	}

	return (
		<tts.Provider
			value={{
				textInput,
				setTextInput,
				showOutput,
				setShowOutput,
				closeOutput,
				pauseSpeaking,
				startSpeaking,
				currentCharacter,
				rate,
				changeRate,
			}}
		>
			{children}
		</tts.Provider>
	)
}
