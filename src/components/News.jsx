import React from 'react';
import {Link } from 'react-router-dom'

class News extends React.Component{    
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            items:[]
        }
    }
    async componentDidMount(){
    try{
        setInterval(async()=>{
            const res=await fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=57d47e5e0cda4a71a33803870666419c')
            const newsa = await res.json();
            const articles = newsa.articles;
            this.setState({
                isLoaded:true,
                items:articles
            })
        },500)
    }catch(e){
        console.log(e);
    }
}

    render(){
        const{error, isLoaded, items} = this.state;
        if(error){
            return <div style={{
                marginTop:'1%'
            }}>Error:{error.message}</div>
        }
        else if(!isLoaded){
            return <div style={{
                marginTop:'1.2%'
                
            }}>
                <Link style={{textDecoration:'none',color:'black'}}exact to='/'><h1 style={{textAlign:'center'}}>Home</h1></Link>
                Load Load Load...</div>
        }
        else{
            return(
                <nav style={{
                    marginTop:'1%'
                }}>
                    <Link exact to='/'><h1 style={{textAlign:'center'}}>Home</h1></Link>
                    <h1 style={{textAlign:'center'}}>Headlines</h1>
                    <ul style={{listStyle:'none'}}>
                        {items.map((item,key)=>(
                            <li style={{fontSize:14.2}} key={key}>
                               Title:{item.title}<br/>
                               Description:{item.description}<br/>
                               <a href={item.url}>Click here to read full story..</a><br/>
                            </li>
                        ))}
                    </ul>
                </nav>
            )
        }
    }
}
export default News;