import React from 'react'
import '../css/CardView.css'

export default function Card(props){
    return (
        <div className="card">
            <h1 className="title">Title</h1>
            <div className="content">
                {
                    props.Columns.map(c => {
                        return (
                            <p>
                                <span className="labelText">{c.Label}:&nbsp;</span>
                                <span className="valueText">{props.Data[c.DataField]}</span>
                            </p>
                        )
                    })                                        
                }
            </div>
        </div>
    )
}