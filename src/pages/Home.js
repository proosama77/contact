import React ,{Component} from 'react'
import {Link} from 'react-router-dom'

class Home extends Component {
    render(){

        return (
           <div>
               <h3>Home Page</h3>
             go <Link to="/about">About</Link> 
           </div>
        )
    }
}

export default Home