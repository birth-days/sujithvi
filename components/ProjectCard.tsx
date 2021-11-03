import { FunctionComponent, useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { IProject } from "../types";

import Image from "next/image";

const ProjectCard: FunctionComponent<{
  project: IProject;
}> = ({
  project: {
    name,
    oneliner,
    reqtime,
    image_path,
    category,
    deployed_url,
    description,
    desc,
    github_url,
    key_techs,
  },
}) => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="lg:grid-cols-1">
      {/* <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
        layout="responsive"
        height="150"
        width="300"
      /> */}
      {/* <img
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetail(true)}
      /> */}
      <p className="my-2 text-3xl text-center text-green font-bold ">{name}</p>
      <div onClick={() => setShowDetail(true)}>
            {/* <h2 className="mb-3 text-xl font-medium md:text-2xl">{name}</h2> */}
            <h5 className="text-l font-medium text-left font-bold pl-3">{reqtime}</h5>
            <h4 className="text-2xl font-medium text-left pl-5">{oneliner}</h4>
            <div className="flex flex-wrap mt-1 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-white-200 dark:bg-dark-200 rounde-sm bg-gray"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

      {showDetail && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 md:grid-cols-1 gap-x-12 dark:text-white dark:bg-dark-100">
          <div>
            {/* <img src={image_path} alt={name} /> */}

            {/* <Image
              src={image_path}
              alt={name}
              layout="responsive"
              height="150"
              width="300"
            />
            <div className="flex justify-center my-4 space-x-3">
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub /> <span>Github</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject /> <span>Project</span>
              </a>
            </div> */}
          </div>

          <div>
            <h2 className="mb-3 text-3xl font-medium text-center">{name}</h2>
            <h5 className="text-xl font-medium text-left font-bold text-green">{reqtime}</h5>
            <br />
            {/* <h3 className="mb-3 font-medium text-2xl font-domine">{description}</h3> */}

            <div>
            {Object.keys(desc).map((k) => (
              <div>
                <h3 className="mb-3 font-medium text-3xl font-domine">{k}</h3>
                <h3 className="mb-5 font-medium text-2xl font-domine">&emsp;{desc[k]}</h3>
              </div>
            ))}
            </div>

            <div className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setShowDetail(false)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
