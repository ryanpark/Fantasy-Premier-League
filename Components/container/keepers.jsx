import React from 'react';

var Keepers = React.createClass({
   render : function () {
       
       if (typeof this.props.list === 'undefined') {
           return null
       } else {
          var lists =  this.props.list.map(function (e) {
               return <div>{e.name}</div>
           });
       }
        return (<div>
         { this.props.list.length > 0 ? <h3>Keepers</h3> : ''  }
        <div>{lists}</div></div>)
   } 
    
});



export default Keepers; 