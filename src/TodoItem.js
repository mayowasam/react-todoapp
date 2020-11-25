import React, { Component } from 'react';




export class TodoItem extends Component {


    

    render() {
        const completedStyle= {
            backgroundColor:"red",
            fontStyle:"italic"
        }



        return(
            <div className="contentbox" >

            <input type="checkbox" 
            checked={this.props.item.completed} 
            onChange={(event)=>this.props.HandleChange(this.props.item.id)}/>

            <p style={(this.props.item.completed=== true)?completedStyle:null}>{this.props.item.text}</p>
            <hr/>
            </div>
            )
        }
}

export default TodoItem