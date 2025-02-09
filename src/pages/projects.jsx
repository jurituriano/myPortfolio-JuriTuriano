import { GithubIcon, LiveIcon } from "../components/icons/functionIcons";

const Projects = () => {
  const projectData = [
    {
      projectName: "ShoeBox",
      description:
        "An e-commerce website for footwear such as casual, formal, and athletic shoes.",
      livePath: "shoebox.infinityfreeapp.com", // Replace with actual link
      sourceCodepath: "https://github.com/yourusername/shoebox", // Replace with actual link
      tools: [
        { toolsName: "HTML" },
        { toolsName: "CSS" },
        { toolsName: "Bootstap" },
        { toolsName: "Javascript" },
        { toolsName: "Jquery" },
        { toolsName: "PHP" },
        { toolsName: "MySQL" },
        { toolsName: "Sandbox Paypal" },
      ],
    },
    {
      projectName: "Impression",
      description:
        "A static website about showcasing coffee drinks and rice meals.",
      livePath: "vast-smoke.surge.sh", // Replace with actual link
      sourceCodepath: "https://github.com/yourusername/shoebox", // Replace with actual link
      tools: [
        { toolsName: "HTML" },
        { toolsName: " CSS" },
        { toolsName: "Javascript" },
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-xl font-bold">Projects</h1>
      <div className="flex flex-col gap-5 items-center my-5 ">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="p-5 border border-gray-300 rounded-md max-w-[100%] lg:w-[60%]"
          >
            <div className="flex justify-between mb-2">
              <h1 className="font-bold text-lg">{project.projectName}</h1>
              <div className="flex gap-[3px]">
                <a src={project.sourceCodepath} target="_blank">
                  <GithubIcon />
                </a>
                <a src={project.livePath} target="_blank">
                  <LiveIcon />
                </a>
              </div>
            </div>
            <p className="text-portfolio-secondary text-sm">
              {project.description}
            </p>
            {/* Tools */}
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="bg-gray-200 px-2 py-1 rounded text-xs"
                >
                  {tool.toolsName}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
