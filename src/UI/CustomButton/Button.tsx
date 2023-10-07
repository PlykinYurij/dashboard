import {ReactNode, FC} from 'react'
import classes from './Button.module.scss'

interface IButton {
    children: ReactNode,
    onClick?: () => void,
}
const Button: FC<IButton> = ({children, onClick}) => {
    return (
        <button className={classes.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button