const HomePage = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row md:flex-row lg:gap-15 md:gap-15 justify-center items-center h-dvh lg:h-[90dvh] md:h-[90dvh]  ">
      {/* Profile Image */}
      <div className="w-[50%] lg:w-[30%] md:w-[30%]">
        <img className=" rounded-lg" src="/JuriTuriano.jpg" alt="My self" />
      </div>
      {/* Name */}
      <div className="flex flex-col items-center lg:items-start md:items-start gap-5">
        <div>
          <h1 className="text-xl lg:text-5xl md:text-3xl text-center lg:text-left md:text-left font-bold">
            Hi I am{" "}
            <p className="bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Juri Turiano
            </p>
          </h1>
          <p className="text-base lg:text-3xl md:text-xl text-center lg:text-left md:text-left text-gray-600 mt-1">
            (BSIT) Frontend Developer
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
