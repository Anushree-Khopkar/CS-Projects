import React, {Component} from 'react';
import{
	Link
} from 'react-router-dom';
class Navigation extends Component {
	constructor(props){
		super(props);
		this.state= {
			error: null,
			isLoaded: false,
			items:[]
			};
	}
	async componentDidMount(){
		try{
			setInterval(async () => {
				console.log("reloading");
				// Use API Key submitted in Blackboard after news&apiKey=
				const res = await fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=');
				const newsapi= await res.json();
				const articles= newsapi.articles;
				this.setState({
					isLoaded: true,
					items: articles
				})
			}, 500);
		} catch(e){
			console.log(e);
		}
	}

	render(){
		const { error, isLoaded, items } = this.state;
        if (error) {
          return <nav><div>Error: {error.message}</div></nav>;
        } else if (!isLoaded) {
          return<nav> <div> <b> <i> <h2>Load Load Load...</h2> </i> </b> </div></nav>;
        } else {
          return (
            <nav>
             <div>
             <Link exact to="/"><h2>Home</h2></Link>
             </div>
             <div>
             <h1><center>Headlines</center></h1>
             </div>
            <ul>
              {items.map((item, key) => (

                <li key={key}>
                  <p>Title: {item.title}</p> <p>Description: {item.description}</p> <p><a href={item.url}>Click to read full story...  </a></p>
                </li>
              ))}
            </ul>
            </nav>
          );
      	}
	}
}
export default Navigation;	