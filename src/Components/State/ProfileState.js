import React from "react";

 class ProfileState extends React.Component {
  constructor() {
      super();
        this.state = {
          url: "https://images.pexels.com/photos/2235831/pexels-photo-2235831.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title: "Burger",
          description:"Delicious Food",
           };
      }
     updateState = () => {
         this.setState({
               url: "https://images.pexels.com/photos/551991/pexels-photo-551991.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", 
                title: "Special offer",
                description: "Wow!!! that's great",
             });
     };
    render() {
        return(
            <div className="container mt-5">
                <div className="row">
                 <div className="col-4"></div>
                 <div className="col-4">  
                    <div className="card">
                    <div className="card-header">
                        <image className="img-fluid" 
                         src={this.state.url} />
                    </div>
                    < div className="card-body">
                        <h3>{this.state.title}</h3>
                        <p>{this.state.description}</p> </div>
                        <div className="card-footer">
                        <button className="btn btn-outline-dark" 
                        onClick={this.updateState}
                        >
                        Update Information
                        </button>
                    </div>
                  </div>
                </div>
              <div className="col-4"></div>
            </div>
        </div>
        );
    }
}
export default ProfileState;