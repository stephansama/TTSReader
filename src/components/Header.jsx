// MUI Components
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

const Header = () => {
	return (
		<div>
			<AppBar position='static' color='primary'>
				<Toolbar>
					<Container>
						<Typography align='center' variant='h6'>
							TTS Reader
						</Typography>
					</Container>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
