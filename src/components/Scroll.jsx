import React, { useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { Link } from "react-router-dom";

const Scroll = () => {
    const [isActive, setIsActive] = useState();
    function showArrow() {
      if (window.scrollY >= 300) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }
    window.addEventListener("scroll", showArrow);
  return (
    <div className={isActive ? "app__sttop active" : "app__sttop"}>
      <Link to="/">
        <BsArrowUp />
      </Link>
    </div>
  )
}

export default Scroll
