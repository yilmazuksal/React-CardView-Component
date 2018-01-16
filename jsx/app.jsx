
const React = require('react')
const ReactDOM = require('react-dom')
import {CardView,Card} from './cardview.jsx'

ReactDOM.render(
    <CardView FetchUrl='http://localhost:8080/people'>       
    </CardView>
    ,
    document.getElementById('app')
)