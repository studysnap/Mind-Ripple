import React from "react"

function TextMR() {

    const Hash = {
        // opacity:"0",
        willChange:"opacity",
        transform:"scale(0)"
    }

    const Mind = {
        // opacity:"0",
        willChange:"opacity",
        transform:"translateY(20px)"
    }

    return (
        <>
            <div className="mt-[3rem] md:mt-0 relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-screen w-screen">
                <img className=" top-[22%] left-[23.5%] absolute z-40 w-[11vw] " src="./src/assets/textAnimation/hash.png" style={Hash}/>
                <div className="top-[20%] left-[25%] absolute z-30 ">
                <div className=" __classNameName_925659 uppercase text-shadow-hero-gray-mobile md:text-shadow-hero-gray text-[13vw] ml-[6vw]" style={Mind}>Mind</div>
                <div className="__classNameName_925659 uppercase text-shadow-hero-gray-mobile md:text-shadow-hero-gray text-[13vw]/8" style={Mind}>Ripple</div>
                </div>
                <img className=" top-[22%] left-[66.5%] absolute z-30 w-[10vw] " src="./src/assets/textAnimation/plane.png" style={Mind}/>
                <img className="top-[10%] left-[42%] absolute z-30 w-[6vw]" src="./src/assets/textAnimation/atTheRate.png" style={Hash}/>
                <img className=" top-[57%] left-0 absolute z-30 w-[20vw] " src="./src/assets/textAnimation/flyingPlane.png" style={Hash}/>
                <img className=" top-[15%] sm:top-[10%] left-[10%] absolute z-30 w-[6vw] " src="./src/assets/textAnimation/doubleS.png" style={Hash}/>
                <img className=" top-[43%] left-[80%] absolute z-30 w-[15vw] " src="./src/assets/textAnimation/arrow.svg" style={Hash}/>
                <img className=" top-[5%] left-[60%] absolute z-30 w-[4vw] " src="./src/assets/textAnimation/Pi.png" style={Hash}/>
                <img className=" top-[15%] sm:top-[10%] left-[90%] absolute z-30 w-[4vw] " src="./src/assets/textAnimation/X.png" style={Hash}/>
                <img className=" top-[80%] left-[30%] absolute z-30 w-[12vw] " src="./src/assets/textAnimation/Book.png" style={Hash}/>
                <img className=" top-[74%] left-[55%] absolute z-30 w-[6vw] " src="./src/assets/textAnimation/Plus.png" style={Hash}/>
                <img className=" top-[77%] left-[70%] absolute z-30 w-[4vw] " src="./src/assets/textAnimation/Registered.png" style={Hash}/>
            </div>
        </>
    )
}

export default TextMR