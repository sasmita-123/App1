import React from "react"; //importing react Library
import Header from "./../Header/Header";

class Main extends React.Component{
render() {
    return (
        <div>
            <img src="https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" width="500px" height="500px" />
            <br />
            <Header />
            <br />
            <button>Change Image</button>
        </div>
        );
    }
}
export default Main;