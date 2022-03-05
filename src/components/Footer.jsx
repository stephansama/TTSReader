import { GitHub, LinkedIn } from '@mui/icons-material'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import EmailIcon from '@mui/icons-material/Email'
import { IconButton, Container, Tooltip, Typography } from '@mui/material'

const Footer = () => {
	return (
		<Container
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Typography>&copy; 2022</Typography>
			</div>
			<div>
				<Tooltip title='E-Mail' placement='top'>
					<IconButton>
						<EmailIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title='Portfolio' placement='top'>
					<IconButton>
						<ContactPageIcon />
					</IconButton>
				</Tooltip>
				<Tooltip title='GitHub' placement='top'>
					<IconButton>
						<GitHub />
					</IconButton>
				</Tooltip>
				<Tooltip title='LinkedIn' placement='top'>
					<IconButton>
						<LinkedIn />
					</IconButton>
				</Tooltip>
			</div>
		</Container>
	)
}

export default Footer
