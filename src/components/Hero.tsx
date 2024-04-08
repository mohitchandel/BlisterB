
export const Hero = () => {
  return (
    <>
      <div className="hero min-h-lvh text-6xl text-black">
        <div className="hero-content text-center">
          <div>
            <h1 className=" font-bold">Hello there</h1>
            <p className=" font-bold"><span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Provident cupiditate</span> <br></br>voluptatem et in. Quaerat <br></br>
              <span className="bg-gradient-to-r from-red-600 via-blue-500 to-indigo-500 inline-block text-transparent bg-clip-text">features ut assumenda </span></p>
            <p className="text-lg mt-[30px]">Create long-running jobs with features like directly in your <br></br> codebase with features like API integrations, web.</p>
            <label htmlFor="my_modal_7" className="btn btn-primary  mt-2 font-bold pl-12 pr-12 bg-[#41ff54] btn text-black">Get Started
            </label>
            <button className="btn btn-primary  mt-2 font-bold ml-[30px] pl-12 pr-12 bg-[#41ff54]">Get Started</button>
          </div>
        </div>
      </div>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <label className=" my-2 input input-bordered flex items-center gap-2">
            File Input
            <input type="file" className="grow" placeholder="Daisy" />
          </label>
          <label className=" my-4 input input-bordered flex items-center gap-2">
            file input
            <input type="file" className="grow" placeholder="Daisy" />
          </label>
          <div className="mt-6">Title
          </div>
          <div className="mt-6">
            Description
          </div>
          <button className="btn btn-primary bg-white my-6">click me!</button>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
      </div>
    </>
  );
};


