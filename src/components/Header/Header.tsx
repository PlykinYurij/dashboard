import {FC, useEffect, useState} from 'react'
import classes from './Header.module.scss'
import Button from '../../UI/CustomButton/Button.tsx'
import {Location, NavigateFunction, useLocation, useNavigate} from 'react-router-dom'
import {useAppContext} from '../../hooks/useAppContext.ts'
import {AUTH_TOKEN} from '../../const/constants.ts'
import {checkStringOnValue} from '../../functions/checkStringOnValue.ts'

const Header: FC = () => {
    const [isAuthorization, setIsAuthorization] = useState<boolean>(false)
    const [isDashboard, setIsDashboard] = useState<boolean>(false)
    const navigate: NavigateFunction = useNavigate()
    const location: Location = useLocation()
    const {username, getUser} = useAppContext()
    const goLogin = () => {
        navigate('/login')
    }
    const logout = () => {
        localStorage.removeItem(AUTH_TOKEN)
        navigate('/login')
        getUser()
    }

    const goDashboard = () => {
        navigate('/dashboard')
    }

    useEffect(() => {
        setIsAuthorization(checkStringOnValue(location.pathname, '/login'))
        setIsDashboard(checkStringOnValue(location.pathname, '/dashboard'))
    }, [location.pathname])

    return (
        <div className={classes.containerHeader}>
            {username && <div>{username}</div>}
            {username && !isDashboard && <div className={classes.containerButton}>
                <Button onClick={goDashboard}>
                    Dashboard
                </Button>
            </div>}
            {!isAuthorization && <div className={classes.containerButton}>
                <Button onClick={username ? logout : goLogin}>
                    {username ? 'Выход' : 'Войти'}
                </Button>
            </div>}
        </div>
    )
}

export default Header