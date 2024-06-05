import "./NavBar.css";
import React from "react";

export default function NavBar(){
    

    return(<div className=" nav_container bg-black bg-opacity-85 text-white text-sm flex justify-between items-center gap-10 h-fit p-4 pr-9 pl-9 w-screen fixed top-1/1 z-10">
        <div className=" logo_nav_container w-fit flex gap-10">
            <img src="./pluto_logo.png" alt=""  className="h-8" />
            <div className=" nav_navigation_container flex items-center gap-6">
                <div className="nav_navigation">HOME</div>
                <div className="nav_navigation">FEATURES</div>
                <div className="nav_navigation">WHITEPAPER</div>
                <div className="nav_navigation">BLOGS</div>
                <div className="nav_navigation">FAQ</div>
            </div>
        </div>

        <div className="Nav_buynow_button_container">
        <button className="bg-white text-black rounded-3xl pr-2 pl-2 p-1 box-border">BUY NOW <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
        </div>
    </div>)
}