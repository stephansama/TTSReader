import './Controls.css'

// MUI Components
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack'
// import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

// ICONS
import FastForwardIcon from '@mui/icons-material/FastForward'
import FastRewindIcon from '@mui/icons-material/FastRewind'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'

import { useContext } from 'react'
import { tts } from '../contexts/tts'

const Controls = () => {
	const { changeRate, pauseSpeaking, startSpeaking, rate } = useContext(tts)
	return (
		<Stack className='controls'>
			{/* VOICES }
			<Tooltip title='Possible voices' placement='left'>
				<FormControl sx={{ alignSelf: 'center', width: '50%' }}>
					{/* <InputLabel id='demo-simple-select-label'>Voice</InputLabel> }
					<Select
						id='demo-simple-select'
						size='small'
						label='Voice'
						value={selectedVoice}
						variant='standard'
						labelId='demo-simple-select-label'
					>
						<MenuItem>Test</MenuItem>
						{voices.map((voice, i) => (
							<MenuItem value={i} key={i}>
								{voice.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Tooltip>
			{/* SPEED Slide */}
			<Tooltip title='Speed' placement='left'>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<FastRewindIcon />
					<Slider
						sx={{ mx: '15px' }}
						min={0.5}
						max={1.5}
						step={0.01}
						value={rate}
						onChange={changeRate}
					/>
					<FastForwardIcon />
				</div>
			</Tooltip>
			<div className='controlsButtons'>
				{/* PAUSE Button */}
				<Tooltip title='Pause'>
					<Button onClick={pauseSpeaking} variant='outlined'>
						<PauseIcon />
					</Button>
				</Tooltip>
				{/* START Button */}
				<Tooltip title='Start'>
					<Button onClick={startSpeaking} variant='outlined'>
						<PlayArrowIcon />
					</Button>
				</Tooltip>
			</div>
		</Stack>
	)
}

export default Controls
