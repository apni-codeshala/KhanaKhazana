import React from "react";

// This is class based component to practice

class Profile extends React.Component {

    // In life cycle of react constructor runs first  ---> than render ---> than to make API call componentDidMount is provided
    
    constructor(props) {
        super(props);

        // Create state
        this.state = {
            count: 0
        }

    }

    render() {
        const { count } = this.state;
        return (
            <>
                <h1>Count : {count}</h1>
                <button onClick={() => {
                    this.setState({count: 1});
                }}>SetCount</button>
            </>
        )
    }
}

export default Profile;