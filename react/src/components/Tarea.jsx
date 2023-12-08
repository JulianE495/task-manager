
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './css/Tarea.css';
// import { BiSolidDashboard } from "react-icons/bi";

import user01 from './images/user-photo-01.png'

export const TareaPendiente = ({ titulo, fecha, hora, label }) => {
    return (
        <div className='task-container'>
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="" />
            </FormGroup>
            <div className='info-container'>
                <h3>{titulo}</h3>
                <div className='date-container'>
                    <span>{fecha} |</span>
                    <span>{hora}</span>
                </div>
            </div>
        </div>
    )
}

export const ReunionPendiente = ({ titulo, fecha, hora, label }) => {
    return (
        <div className='task-container'>
            <img src={user01}></img>
            <div className='info-container'>
                <h3>{titulo}</h3>
                <div className='date-container'>
                    <span>{fecha} | </span>
                    <span>{hora}</span>
                </div>
            </div>
        </div>
    )
}
