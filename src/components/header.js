import React from "react";
import pic from "../assets/new.png";

export default function Header() {
  return (
    <div  className="header">
      <img src={pic} className='header--img' />
      <h1 className="header--title">Laura Smith</h1>
      <h4 className="header--prof">Frontend Developer</h4>
      <h6 className="header--website">LauraSmith.website</h6>
    <div>
        <button className="header--email">
        <i class="fa fa-envelope fa-sml"></i>
          Email</button>
        <button className="header--linkedin">
        <i class="fa fa-linkedin fa-sml"></i>
          LinkedIn</button>
    </div>
    </div>
  );
}

