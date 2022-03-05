import './Controls.css'

// MUI Components
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'

// ICONS
import FastForwardIcon from '@mui/icons-material/FastForward'
import FastRewindIcon from '@mui/icons-material/FastRewind'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

const Controls = ({ changeSpeed, pauseSpeaking, startSpeaking }) => {
	return (
		<Stack className='controls'>
			{/* VOICES */}
			<Tooltip title='Possible voices' placement='left'>
				<FormControl sx={{ alignSelf: 'center', width: '50%' }}>
					<InputLabel id='demo-simple-select-label'>Voice</InputLabel>
					<Select
						size='small'
						variant='standard'
						labelId='demo-simple-select-label'
						id='demo-simple-select'
						label='Age'
						value={undefined}
					>
						<MenuItem value={undefined}></MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Tooltip>
			<Tooltip title='Speed' placement='left'>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<FastRewindIcon />
					<Slider sx={{ mx: '15px' }} defaultValue={50} />
					<FastForwardIcon />
				</div>
			</Tooltip>
			<div className='controlsButtons'>
				<Tooltip title='Pause'>
					<Button onClick={pauseSpeaking} variant='outlined'>
						<PauseIcon />
					</Button>
				</Tooltip>
				<Tooltip title='Start'>
					<Button variant='outlined' onClick={startSpeaking}>
						<PlayArrowIcon />
					</Button>
				</Tooltip>
			</div>
		</Stack>
	)
}

export default Controls
