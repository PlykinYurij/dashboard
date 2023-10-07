import {Route, Routes} from 'react-router-dom'
import Layout from '../components/Layout/Layout.tsx'
import Dashboard from '../pages/Dashboard/Dashboard.tsx'
import Login from '../pages/Login/Login.tsx'
import NotFound from '../pages/NotFound/NotFound.tsx'
import Auth from './auth.tsx'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route path='login' element={<Login/>}/>
                <Route element={<Auth />}>
                    <Route path='dashboard' element={<Dashboard/>}/>
                </Route>
                <Route path='*' element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default AppRoutes