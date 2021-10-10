import React, { useState } from "react";
import Button from "../../atoms/Button";
import Search from "../../atoms/Search";
import MobileNav from "../MobileNav";
import { ReactComponent as Menu } from "../../../assets/menu.svg"
import "./style.css";

const Header = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <div className="_header-wrapper">
    <div className="_header">
      <div className="_header-flex">
        <div className="_logo" role="banner">
          <a href="/">
            <span className="_send">send</span>
            FREIGHT
          </a>
        </div>
        <div className="_header-search">
          <Search />
        </div>
      </div>
      <div className="_header-actions">
        <Button type="outline">Request Quote</Button>
        <Button type="solid">Book Shipment</Button>
      </div>
      <button onClick={() => setToggle(toggle => !toggle)} className="_header-menu">
          <Menu/>
      </button>
    </div>
    <div className={`_header-mobile ${toggle ? 'show' : null}`}>
        <MobileNav />
    </div>
    </div>
  );
};

export default Header;
