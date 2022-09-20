import React from 'react';
import Profile from './Profile';

 class ProfileHome extends React.Component {
  render() {
    return (
    <div className='container'>
        <div className='row'>
            <div className='clo-4'>
            <Profile 
            imgurl="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            name="Shelly"
            description="I am a System Engineer"
            />
            </div>
            <div className='col-4'>
            <Profile 
            imgurl="https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            name="Nancy"
            description="I am a Frontend Engineer"/> 
            </div>
            <div className='col-4'>
            <Profile 
            imgurl="https://images.pexels.com/photos/4458420/pexels-photo-4458420.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            name="Charlie"
            description="I am a Fullstack Developer"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ProfileHome;