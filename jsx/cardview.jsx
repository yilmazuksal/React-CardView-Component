const React = require('react')
import '../css/CardView.css'

export class CardView extends React.Component{
    constructor(props){
        super(props)
        
    }
    
    render(){
        return (
            <div class="cardview">
                {this.props.children}
            </div>
        )
    }

}

export function Card(props){
    return (
        <div class="card">
            <h1 class="title">{props.Title}</h1>
            <div class="content">
                {props.Content}
            </div>
        </div>
    )
}



