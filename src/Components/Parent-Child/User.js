import React from "react";
import Address from "./Address";


 class User extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             name: "Sasmita",
             city: "Bangalore",
             email: "sasmita.swain@gmail.com",
             state1: "Karnataka",
         };
     }
     updateState = () =>{
         this.setState({
             name: "Sarita",
             email: "sarita.patro@gmail.com",
             city: "Hyderabad",
             state1: "Telengana",
         });
     };
     
  render() {
    return (
        <div className="container mt-5">
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h2>User Component</h2>
                    </div>
                    <div className="card-body">
                        <p>Name:{this.state.name}</p>
                        <p>Email:{this.state.email}</p>
                    </div>
                    <div className="card-footer">
                        <Address city={this.state.city} state ={this.state.state1} />
                        <button 
                        className="btn btn-outline-primary mt-3"
                        onClick={this.updateState}>
                            Update Data
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default User;