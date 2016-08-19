import React from 'react';

var Midfields = React.createClass({
   render : function () {
       
       if (this.props.list.length == 1) {
           return null
       } else {
           var logoUrl = this.props.url;
          var lists =  this.props.list.map(function (e) {
              if (typeof e.name == 'undefined') { 
                return;   
              } else {
               return <div><img src={logoUrl} width="10%" height="10%" /> <a href="#" className="">{e.name}</a> <i className="fa fa-minus-circle"></i></div>   
              }
               
           });
       }
         return (<div>
            { this.props.list.length > 1 ? <h3>Midfields</h3> : ''  }
                <div>{lists}   </div>
                </div>
            )
   } 
    
});



export default Midfields