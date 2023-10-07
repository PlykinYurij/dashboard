import {createContext, useState} from 'react'
import AppRoutes from './routes/AppRoutes.tsx'
import {useQuery} from '@apollo/client'
import {GET_AUTH_USER} from './apollo/appRequests.ts'
import Loader from './components/Loader/Loader.tsx'
import ErrorResponse from './components/ErrorResponse/ErrorResponse.tsx'

export interface IAppContext {
    username: string,
    getUser: () => void
}

export const AppContext = createContext<IAppContext>({
    username: '',
    getUser: () => {}
})

function App() {
    const [isMounted, setIsMounted] = useState<boolean>(false)
    const {loading, error, data, refetch} = useQuery(GET_AUTH_USER, {
        fetchPolicy: 'cache-first',
        errorPolicy: 'ignore',
        onCompleted() {
            setIsMounted(true)
        }
    })

    if (loading) {
        return <Loader/>
    }

    if (error) {
        return <ErrorResponse message={error.message}/>
    }

    return (
        <>
            <AppContext.Provider value={{
                username: data?.me?.username || '',
                getUser: refetch
            }}>
                {isMounted && <AppRoutes/>}
            </AppContext.Provider>
        </>
    )
}

export default App
