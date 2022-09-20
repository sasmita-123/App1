import React, { Component } from 'react';
import Axios from "axios";


class AxiosUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: [],
        };
    }
    getData = () => {
        Axios.get("https://jsonplaceholder.typicode.com/users").then(
         (response) => {
             console.log(response.data);
             this.setState({
                 userInfo: response.data,
             });
            },
            (errorMsg) => {
                console.log(errorMsg);
                alert("Error while fetching the data")
            }
        );
         };   
        

    render() {
    return( <div className = "container mt-5">
        <div className='row'>
            <div className='col'>
                <p>        
        Introduction to React
        React is an efficient, flexible, and open-source JavaScript framework library that allows developers to the creation of simple, fast, and scalable web applications. Jordan Walke, a software engineer who was working for Facebook created React. It was first deployed on the news feed of Facebook in 2011 and on Instagram in 2012. Developers from the Javascript background can easily develop web applications with the help of React.
        React Hooks will allow you to use the state and other features of React in which requires a class to be written by you. In simple words, we can say that, React Hooks are the functions that will connect React state with the lifecycle features from the function components. React Hooks is among the features that are implemented latest in the version React 16.8.
        Scope of React: The selection of the right technology for application or web development is becoming more challenging. React has been considered to be the fastest-growing Javascript framework among all. The tools of Javascript are firming their roots slowly and steadily in the marketplace and the React certification demand is exponentially increasing. React is a clear win for front-end developers as it has a quick learning curve, clean abstraction, and reusable components. Currently, there is no end in sight for React as it keeps evolving.
        Crack your next tech interview with confidence
        The important features of React are:
        </p>
        </div>
        </div>
        <div className='row'>
          <div className='col'>
        <button className='btn btn-primary' onClick={this.getData}>
            Get data from server 
        </button>
        </div>
        </div>
        {this.state.userInfo.length > 0 ?(
        <div className='row mt-5'>
        <div className='col'>
            <table className='table'>
                <thead>
                    <tr>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.userInfo.map(function (element, index) {
                        return (
                            <tr>
                                <td>{element.id}</td>
                                <td>{element.name}</td>
                                <td>{element.email}</td>
                                <td>{element.address.city}</td>
                                <td>{element.phone}</td>
                                <td>{element.company.name}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                    </table>
                    </div>
                    </div>
                    ) : (
                    <div className="text-danger row mt-5">
                        {" "}
                        <h2>Data is not available</h2>{""}
                        </div>
                        )}
                        </div>
    );
                        
    }       
                }
                
export default AxiosUser;