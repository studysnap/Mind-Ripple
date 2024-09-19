import React from "react"
import Data from './EventData.json'
import { data } from "autoprefixer"

function PastEvents() {

    let n = Data.length - 2;

    let pastdata = {
        img : Data[n].image,
        title : Data[n].title,
        discription : Data[n].description,
        time : Data[n].time,
        location : Data[n].location
    }

    // let img = Data.map( record => {
    //     if(record.status == "past"){
    //         return record.image
    //     }
    // })
    
    // let title = Data.map( record => {
    //     if(record.status == "past"){
    //         return record.title
    //     }
    // })

    // let discription = Data.map( record => {
    //     if(record.status == "past"){
    //         return record.description
    //     }
    // })

    // let time = Data.map( record => {
    //     if(record.status == "past"){
    //         return record.time
    //     }
    // })

    // let location = Data.map( record => {
    //     if(record.status == "past"){
    //         return record.location
    //     }
    // })

    

    return (
        <>
        <div className="main bg-[rgba(240,248,255,0.097)] h-60 mt-5 ml-14 mr-14 rounded-[20px] border border-black outline outline-red outline-2 p-2 flex justify-center items-center flex-row">

            <div className="imageDiv h-full w-64 bg-white rounded-[19px]">
                {/* <img src={img} alt="new" /> */}
            </div>

            <div className="content h-full w-full flex justify-start items-start flex-col">

                <div className="titleDiv flex justify-center items-center w-full " >
                    <div className="title font-bold text-2xl text-[#9eec4b]">
                        {pastdata.title}
                    </div>
                </div>

                <div className="discription pl-3 mt-5">
                    {pastdata.discription}
                </div>

                <div className="time pl-3 mt-2">
                    Time : {pastdata.time}
                </div>

                <div className="location pl-3 mt-2">
                    Location : {pastdata.location}
                </div>

                <div className="btnBox h-full w-full flex justify-center items-center">
                    <div className="btn text-[#071f8b] text-[15px] font-medium bg-[#9eec4b] rounded-[15px] p-1">
                        <button type="button">
                            Click here to Register
                        </button>
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}

export default PastEvents