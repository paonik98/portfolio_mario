function Board() {
  return (
    <div className="">
      <div className="h-screen grid place-items-center">
        <div className="w-screen grid place-items-center">
          <div className="flex flex-row">
            <div
              className="mx-4 flex w-52 h-52 rounded-full  
                        border-4 border-black overflow-hidden
                        shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80"
                className="scale-150 translate-y-8 translate-x-2"
                alt="skrt"
              ></img>
            </div>
            <div>
              <p className="font-mono text-9xl">Mario Paone</p>
              <p className="font-mono text-7xl">Software developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
