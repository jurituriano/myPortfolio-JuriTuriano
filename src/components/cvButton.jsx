const ResumeButton = () => {
  const handleNavigate = () => {
    window.open("#", "_blank"); // Replace with your file link
  };

  return (
    <div className="mt-4">
      <button
        onClick={handleNavigate}
        className="bg-portfolio-highlight px-10 py-2 rounded-sm hover:cursor-pointer hover:bg-portfolio-accent"
      >
        CV
      </button>
    </div>
  );
};

export default ResumeButton;
