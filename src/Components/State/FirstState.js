import React from "react";

class FirstState extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "Welcome to React JavaScript World",
            description: "React is a JavaScript Library"
        };
    }
    render() {
        return (
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.description}</p>
            </div>
        );
    }
}
export default FirstState;