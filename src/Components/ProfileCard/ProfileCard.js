import React from "react";
import axios from "axios";
class ProfileCard extends React.Component {
    constructor() {
        super();
        this.state = {
            userInfo:[],
        };
    }
    getUserDataFromServer = async () => {
        this.responsefromServer = await axios.get(
            "https://randomuser.me/api/?results=20"
        );
        console.log(this.responsefromServer);
        if (this.responsefromServer.status === 200) {
            this.setState({
                userInfo: this.responsefromServer.data.results,
            });
        } else {
        }
    };
    render(){
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <h2>User Profiles</h2>
                        <p className="text-primary mt-2">
                        ReactJS offers graceful solutions to some of front-end programming’s most persistent issues,
                        allowing you to build dynamic and interactive web apps with ease. 
                        It’s fast, scalable, flexible, powerful, and has a robust developer community that’s rapidly growing. 
                        There’s never been a better time to learn React.
                        </p>
                    </div>
                </div>
            <div className="row">
                <div className="col-4">
                    <button
                    className="btn btn-outline-primary"
                    onClick={this.getUserDataFromServer}
                    >
                    GetUser Profile
                    </button>
                </div>
            </div>
            <div className="row mt-5">
                {this.state.userInfo.length > 0 ?(
                    this.state.userInfo.map((ele, index) => {
                        return (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <img 
                                            src={ele.picture.medium}
                                            width="100%"  
                                            height="100%"
                                            />
                                        </div>
                                        <div className="card-body">
                                            <h4>
                                                {ele.name.first} {ele.name.last}
                                            </h4>
                                            <p>
                                                ReactJS is a JavaScript Library
                                            </p>
                                            <button className="btn btn-primary">
                                                Profile Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                        );
                    })
                ) : (
                    <div className="text-danger text-center mt-5">
                        {" "}
                    <h3>Data is not available</h3>{" "}
                     </div>
                )}
            </div>
        </div>
     );
    }
  }
export default ProfileCard;