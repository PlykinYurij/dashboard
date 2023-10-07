import React, {FC} from 'react'
import classes from './Input.module.scss'

interface IInput {
    placeholder?: string,
    value: string | number,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    type?: string;
}

const Input: FC<IInput>  = ({
                       placeholder,
                       value,
                       onChange,
                       type = 'text'
                   }) => {

    return <input
                className={classes.input}
                placeholder={placeholder}
                type={type}
                onChange={onChange}
                value={value}
            />
}

export default Input