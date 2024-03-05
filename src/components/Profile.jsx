import React from "react";

// This is className based component to practice

class Profile extends React.Component {

    // In life cycle of react constructor runs first  ---> than render ---> than to make API call componentDidMount is provided

    constructor(props) {
        super(props);

        // Create state
        this.state = {
            userInfo: {
                name: "Binod Kumar",
                location: "India",
                imgUrl: "#",
                bio: "Nothing great"
            }
        }
    }

    // componentDidMount will call after first render
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/apni-codeshala");
        const json = await data.json();
        this.setState({
            userInfo: json
        })
    }


    

    // componentDidMount(){
    //     this.timer = setInterval(() => {
    //         console.log("Testing");
    //     }, 1000);
    // }




    // componentDidUpdate will run after every update it was like a dependency array in useEffect
    // componentDidUpdate(prevProps, prevState){

    //     if we want to run something on every update
    //     if(this.state.userInfo !== prevState.userInfo){
    //         console.log("Component did update");
    //     }

    // }




    // Before leaving the page componentWillUnmount will run
    // componentWillUnmount(){
    //     console.log("Component will unmount");
    //     clearInterval(this.timer);
    // }

    render() {
        const { count } = this.state;
        return (
            <div className="flex items-center h-screen w-full justify-center svh" style={{backgroundColor: '#3d3d3d'}}>

                <div className="max-w-xs">
                    <div className="bg-white shadow-xl rounded-lg py-3">
                        <div className="photo-wrapper p-2">
                            <img className="w-32 h-32 rounded-full mx-auto" src={this.state.userInfo.avatar_url} alt={this.state.userInfo.name} />
                        </div>
                        <div className="p-2">
                            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{this.state.userInfo.name}</h3>
                            <div className="text-center text-gray-400 text-xs font-semibold">
                                <p>Software Engineer</p>
                            </div>
                            <table className="text-xs my-3">
                                <tbody><tr>
                                    <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                    <td className="px-2 py-2">{this.state.userInfo.location}</td>
                                </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Bio</td>
                                        <td className="px-2 py-2">{this.state.userInfo.bio}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                        <td className="px-2 py-2">abhishekpatel171019@gmail.com</td>
                                    </tr>
                                </tbody></table>

                            <div className="text-center my-3">
                                <a target="_blank" className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="https://github.com/apni-codeshala">View Profile</a>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile;