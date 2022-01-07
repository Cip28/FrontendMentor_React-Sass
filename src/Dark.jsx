import React from 'react'

export default function Dark(props) {
    
    // let clickedClass="clicked"
    // const body = document.body
    // const lightTheme="light"
    // const darkTheme="dark"
    // let theme

    // if (localStorage) {
    //     theme=localStorage.getItem("theme")
    // }
    // if (theme === lightTheme || theme === darkTheme) {
    //     body.classList.add(theme)

    // } else {
    //     body.classList.add(lightTheme)        
    // }

    // const switchTheme = (e) => {
    //     if (theme === darkTheme) {
    //         body.classList.replace(darkTheme, lightTheme)
    //         e.target.classList.remove(clickedClass)
    //         localStorage.setItem("theme", "light")
    //         theme=lightTheme
    //     }else{
    //         body.classList.replace( lightTheme,darkTheme)
    //         e.target.classList.add(clickedClass)
    //         localStorage.setItem("theme", "light")
    //         // theme=lightTheme
    //     }
    //     console.log("clicked")
    // }
    const toggleLight = "hsl(230, 22%, 74%)";
    const toggleDark="linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)";

    console.log(props.state)
    
    return (
        <div>
            <label className="switch">
                <input
                    type="checkbox"
                    onChange={props.onChange}
                />
                    <span className="slider round" style={{backgroundColor:props.state ? toggleDark : toggleLight }}
></span>
            </label>
        </div>
    )
}
