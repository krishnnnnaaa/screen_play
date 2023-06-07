"use client";

export default function Login(props) {


  // for authenticating user
    const authenticate = (e)=>{
        e.preventDefault();
        let data = null;
        data =  {"name": e.target[0].value, "email": e.target[1].value }  // userdata object to storage in localstorage
            localStorage.setItem('user', JSON.stringify(data))
            props.setAuth(false)  // to remove to login component after logging
            props.setUserLogged(true)  // to set that the user has been logged in
            props.setUserName(data.name)  // to set the useername
    }
  return (
      <div className="px-4 absolute bg-white z-[99999] rounded-lg right-[30px] w-[85%] md:w-[45%] lg:w-[40%] xl:w-[30%] mx-auto pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-white border-0">
          <div className="rounded-t mb-0 px-6 pt-6 pb-2">
            <div className="text-center">
              <h6 className="text-black text-4xl font-semibold">Sign up</h6>
            </div>
          </div>
          <div className="flex-auto px-4 lg:px-10 pb-10 pt-0">
            <form onSubmit={authenticate}>
             <div className="relative w-full mb-3">
                < label
                  className="block uppercase text-xs text-black font-bold mt-4 mb-2"
                  htmlFor="grid-name">
                  Name
                </label>
                <input
                id="grid-name"
                  type="name"
                  required
                  className="border-0 px-3 py-3 bg-[#595959] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Name"/>
              </div>
             <div className="relative w-full mb-3">
                < label
                  className="block uppercase text-black text-xs font-bold mt-4 mb-2"
                  htmlFor="grid-email">
                  Email
                </label>
                <input
                id="grid-email"
                  type="email"
                  required
                  className="border-0 px-3 py-3 bg-[#595959] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"/>
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-black text-xs font-bold mt-4 mb-2"
                  htmlFor="grid-password">
                  Password
                </label>
                <input
                id="grid-password"
                required
                  type="password"
                  className="border-0 px-3 py-3 bg-[#595959] rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"/>
              </div>
              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin" type="checkbox" required
                    className="form-checkbox border-0 rounded ml-1 w-5 h-5 ease-linear transition-all duration-150"/>
                  <span className="ml-2 text-black text-sm font-semibold">
                    Remember me
                  </span>
                </label>
              </div>
              <div className="text-center mt-6">
                <button
                  className="bg-black text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="submit">
                  {" "}
                  Sign In{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}
