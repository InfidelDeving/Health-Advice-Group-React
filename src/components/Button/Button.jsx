import { NavLink } from 'react-router'
import './Button.css'

export default function Button({text, path}){

    return(
        <NavLink to={path} className='btn'>
            {text}
        </NavLink>
    )
}