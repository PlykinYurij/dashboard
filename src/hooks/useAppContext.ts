import {useContext} from 'react'
import {AppContext, IAppContext} from '../App.tsx'

export function useAppContext(): IAppContext {
    const {username, getUser} = useContext(AppContext)
    return {username, getUser}
}