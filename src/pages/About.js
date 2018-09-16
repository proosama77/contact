import React ,{Component} from 'react'
 import {Link}  from 'react-router-dom'

class About extends Component {
    render(){

        return (
           <div>
               <h3>About Page</h3>
               go <Link to="/">Home</Link>
           </div>
        )
    }
}

export default About