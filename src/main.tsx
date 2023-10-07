import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/index.scss'
import {BrowserRouter} from 'react-router-dom'
import {ApolloProvider} from '@apollo/client'
import client from './apollo/client.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        </BrowserRouter>
    </React.StrictMode>
)
