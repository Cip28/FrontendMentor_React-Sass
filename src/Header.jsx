import React from 'react'
import './styles/Header.css'

export default function Header(props) {
    
    const { onChange,state } = props;
  
    const Text1Dark="hsl(228, 34%, 66%)";
    const Text1Light="hsl(228, 12%, 44%)";

    return (
        <header>
            <div className='left-part'>
                <h1 style={{color: state ? 'black' : 'white'}}>Social Media Dashboard</h1>
                <h4 style={{color: state ? Text1Light : Text1Dark}}> Total Followers: 23,004</h4>
            </div>

            <div className='right-part'>
                <h4 style={{color: state ? Text1Light : "white"}}>Dark Mode:</h4>
                <label className="switch">
                <input
                    type="checkbox"
                        onChange={onChange}
                        // style={{backgroundColor: state ? Text1Light : "black"}}
                />
                    <span className="slider round"  ></span>
            </label>
            </div>
        </header>
    )
}
