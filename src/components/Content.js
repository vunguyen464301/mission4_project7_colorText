import React from 'react';

class Content extends React.Component{
    constructor(props){
        super(props);
    }
    showColor(){
        return{
            background: this.props.color,
            width: '500px'
        }
    }
    render(){
        return(
            <div className="card" style={this.showColor()}>
            <div className="card-body">
                <p className="card-text" onClick={()=>{console.log(this.props.color)}}><b>Test demo</b></p>
            </div>
        </div>
        )
    }
}
export default Content;