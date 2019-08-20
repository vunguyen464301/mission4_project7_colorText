import React from 'react';


class Colorselect extends React.Component{
  constructor(props){
    super(props);
    this.state={
      colors:['blue','pink','yellow']
    }
  }
  showcolor(color){
   if(this.props.color===color){
     return{
      background:color,
      marginLeft:'5px'
     }
   }return{
     marginLeft:'5px'
   }
  }
  setActiveColor=(color)=>{
    this.props.onReceiColor(color);
    // console.log(color)
  }
  render(){
    var getcolor=this.state.colors.map((color,index)=>{
      return(
        <button key={index} type="button" className="btn" style={this.showcolor(color)}
         onClick={()=>{this.setActiveColor(color)}}>{color}</button>
      );
    })
    return(
      <div className="card" style={{ width: '16rem' }}>
     <div style={{background: 'red'}}>
       <h5 style={{textAlign:'center',color:'white'}}>Select color</h5>
     </div>
      <div className="card-body">
     {getcolor}
      </div>
      </div>
    )
  }
   
}

export default Colorselect;

