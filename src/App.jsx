// Components
import Controls from './components/Controls'
import Footer from './components/Footer'
import Header from './components/Header'
import Input from './components/Input'
import Output from './components/Output'

// MUI Components
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { useEffect, useRef, useState } from 'react'

function App() {
	const [textInput, setTextInput] = useState('')
	const [showOutput, setShowOutput] = useState(false)
	const [utterance, setUtterance] = useState(null)
	const [currentCharacter, setCurrentCharacter] = useState('')
	const [currentVoice, setCurrentVoice] = useState(null)
	const [voices, setVoices] = useState([])
	const [selectedVoice, setSelectedVoice] = useState(null)
	const [rate, setRate] = useState(1)
	// TODO: define state of playing
	// TODO: define state of positional

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

	const changeVoice = (e) => {}

	const pauseSpeaking = (e) => {
		if (window.speechSynthesis.speaking) window.speechSynthesis.pause()
	}

	const startSpeaking = (e) => {
		if (window.speechSynthesis.speaking && window.speechSynthesis.paused)
			return window.speechSynthesis.resume()

		setUtterance(() => {
			const utter = new SpeechSynthesisUtterance(textInput)
			utter.rate = rate
			window.speechSynthesis.speak(utter)
			utter.onboundary = (e) => setCurrentCharacter(e.charIndex)
			return utter
		})
		setShowOutput(true)
	}

	useEffect(() => {
		setTimeout(() => {
			const voices = window.speechSynthesis.getVoices()
			if (voices.length !== 0) {
				setVoices(() => voices)
				for (let i = 0; i < voices.length; i++) {
					if (voices[i].default) setCurrentVoice(i)
				}
			} else alert('An error has occurred')
			// setVoices(() => window.speechSynthesis.getVoices())
		}, 50)
	}, [])

	useEffect(() => {
		console.log(currentCharacter)
	}, [currentCharacter])

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100vh',
			}}
		>
			<Header />
			<Container
				sx={{
					marginTop: '50px',
					display: 'flex',
					flexDirection: 'column',
					flexGrow: '1',
					alignItems: 'center',
				}}
			>
				<Card variant='outlined' sx={{ maxWidth: '500px', boxShadow: 3 }}>
					<CardContent>
						{/* Heading */}
						<CardHeader
							sx={{ textAlign: 'center' }}
							title='Text To Speech Reader 🗣'
							subheader='this is a simple web application'
						/>
						<Stack>
							<Input
								textInput={textInput}
								disabledState={showOutput}
								onChange={(e) => setTextInput(e.target.value)}
							/>
							<Controls
								rate={rate}
								changeRate={changeRate}
								changeVoice={changeVoice}
								selectedVoice={selectedVoice}
								voices={voices}
								pauseSpeaking={pauseSpeaking}
								startSpeaking={startSpeaking}
							/>
							{showOutput && (
								<Output textInput={textInput} closeOutput={closeOutput} />
							)}
						</Stack>
					</CardContent>
				</Card>
			</Container>
			<Footer />
		</div>
	)
}

export default App
