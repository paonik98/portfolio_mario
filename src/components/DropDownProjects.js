function DropDownProjects() {
    return (
    <div className="flex flex-col mx-8"> 
        <div className="border-4 border-black rounded-lg my-4 
                        w-48 h-16
                        bg-[#b2f7ef] hover:bg-[#7bdff2]
                        rounded-3xl hover:rounded-xl 
                        transition-all duration-300 ease-liner ">
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
            </ul>
        </div>
    </div>
    );
  }
  
  export default DropDownProjects;