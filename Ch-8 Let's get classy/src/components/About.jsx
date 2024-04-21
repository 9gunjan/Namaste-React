// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component{

    constructor(props){
        super(props);
        console.log("Parent constructor")
    }
    componentDidMount(){
        
    }
    render(){
        
        return (<div>
            <h1>About us page</h1>
            <UserClass name={"First child"} location={"Noida"} />
            
        </div>
        )

    }
}


export default About;