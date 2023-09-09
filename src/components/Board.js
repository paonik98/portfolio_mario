function Board() {
  return (
    <div className="">
      <div className="h-screen grid place-items-center">
        <div className="w-screen grid place-items-center">
          <div className="flex flex-col md:flex-row ">
            <div
              className="justify-items-center
                        mx-4 flex 
                        w-44 md:w-36 lg:w-44 xl:w-52 
                        h-44 md:h-36 lg:h-44 xl:h-52 
                        rounded-full  
                        border-5 border-black overflow-hidden
                        shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
                className="scale-150 translate-y-10 translate-x-4 hover:scale-200 transition duration-1000"
                alt="skrt"
              ></img>
            </div>
            <div>
              <p className="font-mono justify-items-center
                            text-5xl md:text-7xl lg:text-8xl xl:text-9xl">
                              Mario Paone
              </p>
              <p className="font-mono justify-items-center
                            text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
                Software developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
