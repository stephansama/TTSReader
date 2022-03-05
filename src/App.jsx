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
import { useState } from 'react'

function App() {
	const [textInput, setTextInput] = useState('')
	const [showOutput, setShowOutput] = useState(false)
	// TODO: define state of playing
	// TODO: define state of positional
	// TODO: create function to play text input
	// TODO: create function to pause speaking
	// TODO: create function to stop speaking
	// TODO: open output section with currently selected text

	const closeOutput = (e) => {
		setShowOutput(false)
		setTextInput('')
		window.speechSynthesis.cancel()
	}

	const changeSpeed = (e) => {}

	const pauseSpeaking = (e) => window.speechSynthesis.pause()

	const startSpeaking = (e) => {
		e.preventDefault()
		if (window.speechSynthesis.speaking && window.speechSynthesis.pending) {
			window.speechSynthesis.resume()
			return
		}
		let utterance = new SpeechSynthesisUtterance(textInput)
		window.speechSynthesis.speak(utterance)
		setShowOutput(true)
	}

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
							sx={{
								textAlign: 'center',
							}}
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
								changeSpeed={changeSpeed}
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
