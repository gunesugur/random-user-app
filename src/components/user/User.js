import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./User.css";
import assetTop from "../../assets/asset-top.svg";
import assetBottom from "../../assets/asset-bottom.svg";
const User = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    pullUser();
  }, [])


  const pullUser = () => {
    axios.get("https://randomuser.me/api/")
      .then((response) => {
        setUser(response.data.results);
        console.log(response.data.results);
      }
      );
  }

  return (
    <div className="container">
      <img className="asset-top" src={assetTop} />
      {user?.map((item, key) => (
        <div className="user-list" key={key}>
          <div className="img-name">
            <img className="thumbnail" src={item.picture.large} alt="user-thumbnail" />
            <p>{item.name.title} {item.name.first} {item.name.last}</p>
          </div>
          <div className="mail">
            <p><span>E-mail:</span> {item.email}</p>
          </div>
          <div className="phone">
            <p><span>Phone: </span>{item.phone}</p>
          </div>
          <div className="city">
            <p><span>City/Country:</span> {item.location.city}/{item.location.country}</p>
          </div>
          <div className='age'>
            <p><span>Age:</span> {item.dob.age}</p>
          </div>
          <div className='register-date'>
            <p><span>Register Date:</span> {item.registered.date.substr(0, 10)}</p>
          </div>
          <div className='change-btn'>
            <button className="btn" onClick={pullUser}>Random User</button>
          </div>
        </div>
      ))}
      <img className="asset-bottom" src={assetBottom} />
    </div>
  )
}
export default User;