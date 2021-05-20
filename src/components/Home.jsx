import React from 'react';
import{BrowserRouter as Router,Route}from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import News from './News';
import Footer from './Footer';

class Home extends React.Component{
    render(){
        return(
            <Router>
            <div>
            <Header/>
            <Route exact path='/' component={Main}/>
            <Route exact path='/Blog1' component={Blog1}/>
            <Route exact path='/Blog2' component={Blog2}/>
            <Route exact path='/Blog3' component={Blog3}/>
            <News/>
            <Footer/>
            </div>
            </Router>
        )
    }
}

export default Home;