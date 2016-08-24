import React from 'react';

var Forwards = React.createClass({
   render : function () {
       
       if (this.props.list.length == 1) {
           return null
       } else {
        
          var lists =  this.props.list.map(function (e) {
              if (typeof e.name == 'undefined') { 
                return;   
              } else {
               return <div><img src={e.logo} width="10%" height="10%" /> <a href="#" className="">{e.name}</a> <i className="fa fa-minus-circle"></i></div>   
              }
               
           });
       }
        return (<div>
            { this.props.list.length > 1 ? <h3>Forwards</h3> : ''  }
                <div>{lists}   </div>
                </div>
            )
   } 
    
});



export default Forwards; 