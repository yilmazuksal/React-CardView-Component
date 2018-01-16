import React from 'react'

export default class Column extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return {Label:this.props.Label,DataField:this.props.DataField}
    }
}