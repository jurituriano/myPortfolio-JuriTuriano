import ResumeButton from "../components/cvButton";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-dvh gap-6">
      {/* Profile Image */}
      <div className="w-2/3 lg:w-[25%]">
        <img className=" rounded-lg" src="/JuriTuriano.jpg" alt="My self" />
      </div>
      {/* Name */}
      <div className="flex flex-col items-center">
        <h1 className="text-xl lg:text-4xl font-bold">
          Hi I am{" "}
          <span className="bg-linear-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Juri Turiano
          </span>
        </h1>
        <p className="text-base lg:text-2xl">Full stack developer</p>
        <ResumeButton />
      </div>
    </div>
  );
};

export default HomePage;
