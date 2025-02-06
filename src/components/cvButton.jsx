const ResumeButton = () => {
  const handleNavigate = () => {
    window.open(
      "https://drive.google.com/file/d/1h5eu3gKaBDewWFyUXe6P28myPYlicmcK/view?usp=drive_link",
      "_blank"
    ); // Replace with your file link
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleNavigate}
        className="bg-portfolio-highlight px-10 py-2 rounded"
      >
        CV
      </button>
    </div>
  );
};

export default ResumeButton;
