import React, { Component } from 'react';

 class Client extends Component {
 
    constructor(props) {
        super(props);
        this.state = {};
        this.textRef = React.createRef();
        this.h2Ref = React.createRef();
    }
    getData = () =>{
        console.log(this.textRef.current.value);
        console.log(this.h2Ref.current.innerText);
    };
    render() {
    return <div className='container mt-3 p-5'>
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-header bg-primary text-white">
                        <h2 ref={this.textRef.h2Ref}>Client Component</h2>
                    </div>
                    <div className="card-body">
                        <input
                        ref={this.textRef} 
                        type="text" placeholder="Enter Msg" className="form-control" />
                        <button className="btn mt-3 btn-primary px-3" onClick={this.getData}>Send</button>
                    </div>
                    <div className="card-footer">
                        <h2>Server Data</h2>
                    </div>

                </div>

            </div>
        </div>
    </div>;
  }
}
export default Client;
