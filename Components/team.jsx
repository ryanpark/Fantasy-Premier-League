import React from 'react';
import Players from "./players";

var Team = React.createClass({
   getInitialState: function() {
    	return {selectedUrl:[]};
   },
    componentDidMount  : function () {
         if (typeof this.props.data._links === 'undefined') {
              console.log(this.props.data._links.players.href)
               return null;
         } else {
             console.log(this.props.data._links.players.href)
               this.setState({
               selectedUrl : this.props.data._links.players.href
           })    
         }
          
    },
   render : function () {
       var urls;
       if (typeof this.props.data._links === 'undefined') {
         
           return null;
       } else {
          
         return (
           <div>
                <h3>{this.props.data.name}</h3>
                <span>{this.props.data._links.players.href}</span>
                <Players url= {this.state.selectedUrl} />
           </div>
          );     
       }
      
   } 
});


export default Team;