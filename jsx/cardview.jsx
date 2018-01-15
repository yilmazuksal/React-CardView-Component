const React = require('react')
import '../css/CardView.css'

export class CardView extends React.Component{
    constructor(props){
        super(props)
        this.state = {people:[]}
    }
    
    componentDidMount(){
        fetch('http://localhost:8080/people')
        .then(function(response){return response.json()})
        .then(function(json){            
            this.setState({people:json.people})
        })
    }

    render(){        
        return (
            <div className="cardview">
                {
                    this.state.people.map(p => <Card Title={p.name} Content={p.job} />)
                }
            </div>
        )
    }

}

export function Card(props){
    return (
        <div className="card">
            <h1 className="title">{props.Title}</h1>
            <div className="content">
                {props.Content}
            </div>
        </div>
    )
}



