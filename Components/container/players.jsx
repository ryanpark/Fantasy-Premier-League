import React from 'react';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import Overlay from 'react-bootstrap/lib/Overlay';


const pop = function(content) {
    return (
        <Popover id="popover-positioned-right" title={content.name}>
            <ul className="list-group list-unstyled">
                <li>Market Value : {content.marketValue}</li>
                <li>Position : {content.position}</li>
                <li>Nationality : {content.nationality}</li>
                <li>Contract : {content.contractUntil}</li>
                <li>Number : {content.jerseyNumber}</li>
            </ul>
        </Popover> 
   )
}
        
class Players extends React.Component {
 removePlayer(d, e) {
     this.props.bindRemovePlayer(d);
 }   
 render() {
        const keepers =  this.props.list.Keeper.map((e, i)  => typeof e.name =='undefined' ? '' : <div className={i}><img src={e.logo}  />
      
            <OverlayTrigger trigger="focus" placement="top" overlay={pop(e)}>
                <a href="#" className="">{e.name}</a>
            </OverlayTrigger>
       <i className="fa fa-times-circle removeIcon" onClick={this.removePlayer.bind(this, e)}></i></div>)
        const defenders =  this.props.list.Defenders.map((e, i) => typeof e.name =='undefined' ? '' : <div className={i}><img src={e.logo}  /> 
        
            <OverlayTrigger trigger="focus" placement="top" overlay={pop(e)}>
                <a href="#" className="">{e.name}</a>
            </OverlayTrigger>
        <i className="fa fa-times-circle removeIcon" onClick={this.removePlayer.bind(this, e)}></i></div>)
        const midfields =  this.props.list.Midfield.map((e, i) => typeof e.name =='undefined' ? '' : <div className={i}><img src={e.logo}  /> 
         <OverlayTrigger trigger="focus" placement="top" overlay={pop(e)}>
                <a href="#" className="">{e.name}</a>
            </OverlayTrigger>
        <i className="fa fa-times-circle removeIcon" onClick={this.removePlayer.bind(this, e)}></i></div>)
        const forwards =  this.props.list.Forwards.map((e, i) => typeof e.name =='undefined' ? '' : <div className={i}><img src={e.logo}  />
        <OverlayTrigger trigger="focus" placement="top" overlay={pop(e)}>
                <a href="#" className="">{e.name}</a>
        </OverlayTrigger>
        <i className="fa fa-times-circle removeIcon" onClick={this.removePlayer.bind(this, e)}></i></div>)     
  
    
     return (
             <div>
                <div className="Keepers">{keepers}</div>
                <div className="Defenders">{defenders}</div>
                <div className="Midfields">{midfields}</div>
                <div className="Forwards">{forwards}</div>
             </div>
     )
 
 }


}


export default Players; 