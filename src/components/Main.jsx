// COMPONENTS
import {
	Button,
	Card,
	CardContent,
	Container,
	CardHeader,
	Tooltip,
} from '@mui/material'

// ICONS
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

const Main = () => {
	return (
		<Container
			sx={{
				marginTop: '40px',
				display: 'flex',
				flexDirection: 'column',
				flexGrow: '1',
				alignItems: 'center',
			}}
		>
			<Card variant='outlined' sx={{ width: 'max-content', boxShadow: 3 }}>
				<CardContent>
					{/* Heading */}
					<CardHeader
						title='Text To Speech Reader'
						subheader='this is a simple web application'
					/>
					{/* <Typography>Testing</Typography> */}

					{/* Controls */}
					<Tooltip title='Start'>
						<Button variant='outlined'>
							<PlayArrowIcon />
						</Button>
					</Tooltip>
					<Tooltip title='Pause'>
						<Button variant='outlined'>
							<PauseIcon />
						</Button>
					</Tooltip>
				</CardContent>
			</Card>
		</Container>
	)
}

export default Main
