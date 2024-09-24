// import React from 'react'
import { RiSendPlane2Fill } from "react-icons/ri";


function InputForm() {
    return (
        <footer className="bg-sky-500 dark:bg-gray-800 px-4 py-0.5 min-h-14 
    flex justify-center items-center gap-4">
            <div className="sm:w-7/12 ">
                <input type="text" placeholder="Type here!" className=" input input-bordered min-w-full " />
            </div>
            <div>
                <button className="btn btn-active btn-ghost">

                    <RiSendPlane2Fill className="text-lg" />
                </button>

            </div>


        </footer>
    )
}

export default InputForm


