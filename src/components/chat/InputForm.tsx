import { RiSendPlane2Fill } from "react-icons/ri";


function InputForm() {
    return (
        <footer className="bg-sky-500 dark:bg-gray-950 px-4  h-14 
    flex justify-center items-center gap-4 ">
            <div className="sm:w-7/12 ">
                <input type="text" placeholder="Type here!" className=" input input-bordered min-w-full rounded-3xl" />
            </div>
            <div>
                <button className="btn btn-active btn-ghost rounded-3xl">

                    <RiSendPlane2Fill className="text-lg" />
                </button>

            </div>


        </footer>
    )
}

export default InputForm


