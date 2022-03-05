// MUI Components
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

// Icons
import ContactPageIcon from '@mui/icons-material/ContactPage'
import EmailIcon from '@mui/icons-material/Email'
import GitHub from '@mui/icons-material/GitHub'
import LinkedIn from '@mui/icons-material/LinkedIn'

const Footer = () => {
	const openPage = (url) => window.open(url, '_blank')

	return (
		<Container
			sx={{
				display: 'flex',
				borderTop: '1px solid gray',
				pt: '5px',
				justifyContent: 'space-between',
			}}
		>
			{/* COPYRIGHT */}
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Typography>&copy; 2022</Typography>
			</div>
			{/* RIGHT ICONS */}
			<div>
				{/* EMAIL */}
				<Tooltip title='E-Mail' placement='top'>
					<IconButton
						onClick={() => openPage('mailto:stephanrandle.dev@gmail.com')}
					>
						<EmailIcon />
					</IconButton>
				</Tooltip>
				{/* PORTFOLIO */}
				<Tooltip title='Portfolio' placement='top'>
					<IconButton
						onClick={() => openPage('https://stephanrandle.netlify.app/')}
					>
						<ContactPageIcon />
					</IconButton>
				</Tooltip>
				{/* GITHUB */}
				<Tooltip title='GitHub' placement='top'>
					<IconButton
						onClick={() => openPage('https://github.com/stephansama')}
					>
						<GitHub />
					</IconButton>
				</Tooltip>
				{/* LINKEDIN */}
				<Tooltip title='LinkedIn' placement='top'>
					<IconButton
						onClick={() =>
							openPage('https://www.linkedin.com/in/stephan-randle-38a30319a/')
						}
					>
						<LinkedIn />
					</IconButton>
				</Tooltip>
			</div>
		</Container>
	)
}

export default Footer
