import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'

render(<App url="/api/comments" pollInterval={2000}/>, document.getElementById("app"));
