// import { RiSendPlane2Fill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

function SideUpNav() {
    return (
        <nav className="bg-sky-500 dark:bg-gray-900 px-4 py-0.5 min-h-16 w-full
             flex justify-between items-center gap-3">
                <div>
                <button className="btn btn-ghost rounded-3xl">

                    <GiHamburgerMenu className="text-lg" />
                </button>

            </div>
           <div className="sm:w-full ">
                <input type="text" placeholder=" Search " className=" input input-bordered min-w-full rounded-3xl" />
            </div>
        </nav>
    )
}

export default SideUpNav
