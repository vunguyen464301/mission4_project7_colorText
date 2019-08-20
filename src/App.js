import React from 'react';
import './App.css';
import Colorselect from './components/Colorselect';
import Content from './components/Content';
import Sizeselect from './components/Sizeselect';
import Reset from './components/Reset';
import Header from './components/Header';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      color:'blue',
      fontSize:10
    }
  }
  setColor=(params)=>{
    console.log(params)
    this.setState({
      color:params
    })
  }
   render(){
  return (
  <div className="container">
   <Header/>
   <ul>
     <li>
     <Colorselect
     onReceiColor={this.setColor}
     color={this.state.color}
     />
     </li>
     <li>
     <Sizeselect/>
    <Reset/>
     </li>
     
   </ul>
   <div className="demo">
     
   <Content
    color={this.state.color}
   />
   </div>
 
  
  </div>
  );
   }
}

export default App;
