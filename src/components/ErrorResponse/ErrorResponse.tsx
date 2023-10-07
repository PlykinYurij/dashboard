import {FC} from 'react'
import classes from './ErrorResponse.module.scss'

interface IErrorResponse {
    message: string
}
const ErrorResponse: FC<IErrorResponse> = ({message}) => {
    return (
        <div className={classes.error}>
            {message}
        </div>
    )
}

export default ErrorResponse