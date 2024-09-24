import SideUpNav from './chatSelectionComp/SideUpNav'
import AllChats from './chatSelectionComp/AllChats'


function SelectChat() {
  return (
    <div className="bg-gray-400 dark:bg-gray-900 text-black dark:text-white h-screen flex flex-col">
      <SideUpNav/>
      <AllChats/>
    </div>
  )
}

export default SelectChat
