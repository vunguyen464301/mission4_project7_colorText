import React from 'react';

class Sizeselect extends React.Component {
    render(){
        return(
            <div className="card" style={{ width: '15rem' }}>
            <div style={{background: 'red'}}>
              <h5 style={{textAlign:'center',color:'white'}}>Select size</h5>
            </div>
             <div className="card-body">
             <button type="button" className="btn btn-primary">Down</button>
             <button type="button" className="btn btn-primary ml-1">Up</button>
             </div>
             </div>
        )
    }
}

export default Sizeselect;