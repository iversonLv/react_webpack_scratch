import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'

// eslint-disable-next-line import/no-unresolved
// require('file-loader?name=[name].[ext]!./index.html')

const root = createRoot(document.getElementById('root'))

root.render(<App />)
