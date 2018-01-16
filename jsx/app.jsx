
import React from 'react'
import ReactDOM from 'react-dom'
import CardView from './cardview.jsx'
import Columns from './columns.jsx'
import Column from './column.jsx'

ReactDOM.render(
    <CardView FetchUrl='http://localhost:8080/people'>  
        <Columns>
            <Column Label="Name" DataField="name" />
            <Column Label="Job" DataField="job" />
        </Columns>     
    </CardView>
    ,
    document.getElementById('app')
)