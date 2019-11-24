import React, {Component} from 'react';
class Header extends Component {
	render(){
		return(
          <center>
          <header>
          <center>
           <b> <i> <h1> Travelling </h1> </i> </b>
           <img src={process.env.PUBLIC_URL + '/1.jpg'} />
           </center>
           </header>
           </center>
			);
	}
}
export default Header;