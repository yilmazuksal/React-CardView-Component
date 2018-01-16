import React from 'react'
import '../css/CardView.css'
import Card from './card.jsx'

export default class CardView extends React.Component{
    constructor(props){
        super(props)
        this.state = {people:[],columns:[]}
        this.initializeColumns = this.initializeColumns.bind(this)        
    }    

    componentDidMount(){
        
        fetch(this.props.FetchUrl)
        .then(function(response){return response.json()})
        .then(json => {                                    
            this.initializeColumns(this.props.children)
            this.setState({people:json.people})
        })
    }

    initializeColumns(columns){
        let cols = []
        Array.prototype.forEach.call(columns.props.children,function(element) {
            cols.push(element.props)
        }, this);
        this.setState({columns:cols})
    }

    render(){        
        return (
            <div className="cardview">
                {                    
                    this.state.people.map( (p,i) => <Card key={i} Columns={this.state.columns} Data={p} />)
                }
            </div>
        )
    }

}





