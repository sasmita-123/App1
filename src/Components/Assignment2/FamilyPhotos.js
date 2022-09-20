import React from 'react';

class FamilyPhotos extends React.Component {
constructor(){
  super()
    this.state = {
        url: "https://images.pexels.com/photos/2742812/pexels-photo-2742812.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        title: "Album",
        description: "Collection of Photos",
    };
  }
  updateData = () => {
      this.setState({
    url: "https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    title: "Friends",
    description: "A Friend in need is a friend in deed",
    });
};

  updateState = ()  =>  {
      this.setState({
          url: "https://images.pexels.com/photos/2253879/pexels-photo-2253879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title: "Family",
          description: "I love my Family",
        });
  };

  render() {
    return (
    <div className="container mt-5">
      <div className='row'>
      <h1>Welcome to my Gallery</h1>
       <div className='col-4'></div>
        <div className='col-4'>
          <div className='card'>
            <div className='card-header'>
              <img className='img-fluid' src={this.state.url} />
            </div>
          <div className="card-body">
          <h3>{this.state.title}</h3>
          <p>{this.state.description}</p>
        </div>
        <div className="card-footer">
        <button className= "btn btn-outline-dark" onClick={this.updateState}>FAMILY</button> &nbsp;
        <button className= "btn btn-outline-dark" onClick={this.updateData}>FRIEND</button>
        </div>
        </div>
        </div>
      </div>
    </div>);
  }
}
export default FamilyPhotos;
