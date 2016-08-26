import React from 'react';


class Players extends React.Component {
 removePlayer(d, e) {
     this.props.bindRemovePlayer(d);
 }   
 render() {
     const keepers =  this.props.list.Keeper.map(e => typeof e.name =='undefined' ? '' : <div><img src={e.logo} width="10%" height="10%" /> <a href="#" className="">{e.name}</a> <i className="fa fa-minus-circle removeIcon" onClick={this.removePlayer.bind(this, e)}></i></div>)
     const defenders =  this.props.list.Defenders.map(e => typeof e.name =='undefined' ? '' : <div><img src={e.logo} width="10%" height="10%" /> <a href="#" className="">{e.name}</a> <i className="fa fa-minus-circle removeIcon"></i></div>)
     const midfields =  this.props.list.Midfield.map(e => typeof e.name =='undefined' ? '' : <div><img src={e.logo} width="10%" height="10%" /> <a href="#" className="">{e.name}</a> <i className="fa fa-minus-circle removeIcon"></i></div>)
     const forwards =  this.props.list.Forwards.map(e => typeof e.name =='undefined' ? '' : <div><img src={e.logo} width="10%" height="10%" /> <a href="#" className="">{e.name}</a> <i className="fa fa-minus-circle removeIcon"></i></div>)
     return (
            <div>
             {this.props.list.Keeper.length > 1 ? <h3>Keepers</h3> : ''  }
             <div>{keepers}</div>
             {this.props.list.Defenders.length > 1 ? <h3>Defenders</h3> : ''  }
             <div>{defenders}</div>
             {this.props.list.Midfield.length > 1 ? <h3>midfields</h3> : ''  }
             <div>{midfields}</div>
             {this.props.list.Forwards.length > 1 ? <h3>Forwards</h3> : ''  }
             <div>{forwards}</div>
             </div>
     )
 
 }
}


export default Players; 