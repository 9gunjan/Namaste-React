// import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../../utils/UserContext";
class About extends React.Component{

    constructor(props){
        super(props);
        //console.log("Parent constructor")
    }
    componentDidMount(){
        
    }
    render(){
        
        return (<div>
            <h1>About us page</h1>
            <UserClass name={"First child"} location={"Noida"} />
            <div>
            
                <UserContext.Consumer>
                    {({loggedInUser})=> <h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
         
        </div>
        )

    }
}


export default About;