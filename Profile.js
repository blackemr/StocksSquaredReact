import React from 'react';
import ReactDOM from 'react-dom';
import './Profile.css';

function Profile() {
    return (
      <div>
        <div>
          <ul className='timelineNavbar'>
            <li>Home</li>
            <li>Discover</li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
        </div>


        <div className="mainRect">
            <div className="profileImageDiv">
              <img src="Images/TeamImages/temp.png" className="pfp"/>
            </div>
            <div>
              <h1 className="username"><strong>Test User</strong></h1>
              <h2 className="dateJoined">
                <em>Joined 1 January, 2020</em> 
                <button className="editButton">
                  Edit Profile
                </button>
              </h2>
              <br/>
              <h5 className="description">This is a description, this description will
                   tell other users about the owner of this 
                   account. Now this is extra text just to make it
                   length-y. aaaaaaaaaaaaaaa aaaaaaa aaaaaaaaa
                   aaaaaaaaaaaaaaa aaaaaaaaaaa aaaaaaaaaaaaaaa
                   aaaaaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaa
                   aaaaaaaaaaaaa aaaaaaaaaaaa aaaaaaaaa</h5>
            </div>
            
            <br />

            <div className="followage">
              <h5>Following: 123</h5>
            </div>
            <div className="followers">
              <h5>Followers: 321</h5>
            </div>

            <div className='postsType'>
              <ul className="postList">
                <li className='postlistItem'>Posts</li>
                <li className='postlistItem'>Strategies</li>
                <li className='postlistItem'>Groups</li>
              </ul>
            </div>
            
        </div>
      </div>
    );
  }


  export default Profile;

