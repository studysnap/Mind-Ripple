import React from "react"

function Navbar() {

    return (
        <>
            <div className="h-11 w-screen flex justify-between items-center box-border pt-2 pb-2 pl-4 pr-4 sticky left-0 top-0 z-50 bg-[linear-gradient(to_right,black,#071f8b)]">
                <div className="cursor-default flex h-11">
                    <div className="flex items-center">
                        <img src="/src/assets/MRLogo.png" alt="MRLogo" loading="lazy"  decoding="async" data-nimg={1} style={{ color: "transparent" }} className="h-5 w-5"/>
                    </div>
                    <div className="text-lg font-[bold] h-full flex items-center pl-1.5">Mind Ripple</div>
                </div>

                <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu h-6 w-6 cursor-pointer">
                        <line x1="4" x2="20" y1="12" y2="12"></line>
                        <line x1="4" x2="20" y1="6" y2="6"></line>
                        <line x1="4" x2="20" y1="18" y2="18"></line>
                    </svg>
                </div>
            </div>
        </>
    )
}

export default Navbar