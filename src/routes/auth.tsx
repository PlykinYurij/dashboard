import {FC} from 'react'
import {useAppContext} from '../hooks/useAppContext.ts'
import {Navigate, Outlet} from 'react-router-dom'

const Auth: FC = () => {
    const {username} = useAppContext()
    return username ? <Outlet /> : <Navigate to='/login'/>
}

export default Auth