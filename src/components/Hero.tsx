export const Hero = () => {
  return (
    <>
      <div className="hero min-h-lvh text-6xl text-black">
        <div className="hero-content text-center">
          <div className="justify-center">
            <p className="mx-auto w-2/3 text-center font-bold">
              Hello there introducing
              <span className="inline-block bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent">
                BlisterB
              </span>{" "}
              List your sneaker Ideas and{" "}
              <span className="inline-block bg-gradient-to-r from-red-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent py-1">
                get funded for it{" "}
              </span>
            </p>
            <p className="mt-[30px] text-lg">
              A Decentralized Platform for Sneaker Ideas and Funding
            </p>

            <label
              htmlFor="my_modal_7"
              className="btn mt-2 border-0 bg-[#41ff54] px-4 py-2 text-black hover:bg-black hover:text-white"
            >
              List Sneaker
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
