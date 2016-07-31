import React from 'react';

var Defenders = React.createClass({
   render : function () {
       if (this.props.list.length == 1) {
           return null
       } else {
          let logoUrl = this.props.url;
          var lists =  this.props.list.map(e => typeof e.name =='undefined' ? '' : <div><img src={logoUrl} width="10%" height="10%" /> <a href="#" className="">{e.name}</a> <i className="fa fa-minus-circle"></i></div>)
       }
        return (
            <div>
            {this.props.list.length > 1 ? <h3>Defenders</h3> : ''  }
                <div>{lists}   </div>
                </div>
            )
   } 
    
});



export default Defenders; 