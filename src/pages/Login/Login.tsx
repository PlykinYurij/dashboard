import React, {FC, useCallback, useEffect, useState} from 'react'
import Input from '../../UI/CustomInput/Input.tsx'
import classes from './Login.module.scss'
import Button from '../../UI/CustomButton/Button.tsx'
import {useMutation} from '@apollo/client'
import {AUTHORIZATION_USER} from '../../apollo/appRequests.ts'
import {AUTH_TOKEN} from '../../const/constants.ts'
import {useNavigate} from 'react-router-dom'
import {useAppContext} from '../../hooks/useAppContext.ts'
import Loader from '../../components/Loader/Loader.tsx'
import ErrorResponse from '../../components/ErrorResponse/ErrorResponse.tsx'
import DescriptionLogin from './components/descriptionLogin.tsx'

interface IAuthorizationData {
    username: string,
    password: string
}

const Login: FC = () => {
    const [authorizationData, setAuthorizationData] = useState<IAuthorizationData>({
        username: '',
        password: ''
    })
    const navigate = useNavigate()
    const {getUser} = useAppContext()
    const {username} = useAppContext()

    const navigateDashboard = useCallback(() => {
        navigate('/dashboard')
    }, [navigate])

    useEffect(() => {
        if (username) navigateDashboard()
    }, [username, navigateDashboard])
    const onChangeAuthorizationData = (event: React.ChangeEvent<HTMLInputElement>, property: string) => {
        if (Object.prototype.hasOwnProperty.call(authorizationData, property)) {
            setAuthorizationData((prevState) => {
                return {
                    ...prevState,
                    [`${property}`]: event.target.value
                }
            })
        }
    }
    const [login, {loading, error}] = useMutation(AUTHORIZATION_USER, {
        variables: {
            password: authorizationData.password,
            username: authorizationData.username
        },
        onCompleted: ({login}) => {
            localStorage.setItem(AUTH_TOKEN, login.token)
            navigateDashboard()
            getUser()
        }
    })

    return (
        <div className={classes.wrapperForm}>
            <div className={classes.containerForm}>
                <DescriptionLogin/>
                {loading && <Loader/>}
                {error && <ErrorResponse message={error.message}/>}
                <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}>
                    <div className={classes.containerInput}>
                        <Input
                            value={authorizationData.username}
                            onChange={(event) => onChangeAuthorizationData(event, 'username')}
                        />
                    </div>
                    <div className={classes.containerInput}>
                        <Input
                            value={authorizationData.password}
                            type='password'
                            onChange={(event) => onChangeAuthorizationData(event, 'password')}
                        />
                    </div>
                    <div>
                        <Button onClick={login}>
                            Войти
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login