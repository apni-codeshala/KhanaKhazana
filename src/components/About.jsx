import { Component } from "react";
import { Outlet } from "react-router-dom";

class About extends Component {

    // To set props first always constructor runs first this is a fixed syntax for uusing the first we have to set the props
    // constructor(props) {
    //     super(props);
    //     console.log("Constructor")
    // }

    // componentDidMount() {
    //     console.log("Component did mount")
    // }

    render() {
        return (
            <>          
                <h1>About Us Page</h1>
                <p>Hello from about us page</p>
                <Outlet />
            </>
        );
    }

}

export default About;