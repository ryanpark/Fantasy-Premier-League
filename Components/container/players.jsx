import React from 'react';


class Players extends React.Component {
 render() {
     const keepers =  this.props.list.Keeper.map(e => typeof e.name =='undefined' ? '' : <div><img src={e.logo} width="10%" height="10%" /> <a href="#" className="">{e.name}</a> <i className="fa fa-minus-circle"></i></div>)
     const defenders =  this.props.list.Defenders.map(e => typeof e.name =='undefined' ? '' : <div><img src={e.logo} width="10%" height="10%" /> <a href="#" className="">{e.name}</a> <i className="fa fa-minus-circle"></i></div>)
     const midfields =  this.props.list.Midfield.map(e => typeof e.name =='undefined' ? '' : <div><img src={e.logo} width="10%" height="10%" /> <a href="#" className="">{e.name}</a> <i className="fa fa-minus-circle"></i></div>)
     const forwards =  this.props.list.Forwards.map(e => typeof e.name =='undefined' ? '' : <div><img src={e.logo} width="10%" height="10%" /> <a href="#" className="">{e.name}</a> <i className="fa fa-minus-circle"></i></div>)
     return (
            <div>
             {this.props.list.length > 1 ? <h3>Keepers</h3> : ''  }
             <div>{keepers}</div>
             <div>{defenders}</div>
             <div>{midfields}</div>
             <div>{forwards}</div>
             </div>
     )
 
 }
}


export default Players; 