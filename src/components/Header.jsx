import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
const Header = () => {
	return (
		<div>
			<AppBar position='static' color='primary'>
				<Toolbar sx={{ textAlign: 'center' }}>
					<Typography variant='h6'>🔊 TTS Reader</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default Header
