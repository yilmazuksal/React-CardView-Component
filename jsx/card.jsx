import React from 'react'
import '../css/CardView.css'

export default function Card(props){
    return (
        <div className="card">
            <h1 className="title">Title</h1>
            <div className="content">
                {
                    props.Columns.map(c => {
                        return <p>{c.Label} {props.Data[c.DataField]}</p>
                    })                                        
                }
            </div>
        </div>
    )
}