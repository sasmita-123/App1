import React from 'react'
class Main from "../Main/Main";
class Header extends React.Component {
    
    render() {
        return (
            <div>
            <h2>Welcome to React</h2>
            <p>This is my First Programme of React Class.
                Components are basics of React Application
                React is used to create User Interface.
                Learning curve of React is very small.          
            <br />
            </p>
            <button className="btn btn-primary">Explore More!!!</button><br />
            </div>
        );
    }

}
export default Header;