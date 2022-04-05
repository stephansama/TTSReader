import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

// Components
import Footer from './components/Footer'
import Header from './components/Header'
import Controls from './components/Controls'
import Input from './components/Input'
import Output from './components/Output'

import { TTSProvider } from './contexts/tts'

function App() {
	return (
		<TTSProvider>
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
						my: '50px',
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
								subheader='This web application allows you to input text and have the website read it to you.'
							/>
							<Stack>
								<Input />
								<Controls />
								<Output />
							</Stack>
						</CardContent>
					</Card>
				</Container>
				<Footer />
			</div>
		</TTSProvider>
	)
}

export default App
