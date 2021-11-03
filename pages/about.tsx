import { AiFillGithub, AiFillLinkedin, AiFillYoutube, AiFillCheckCircle, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      <p className="my-3 text-2xl">
            I’m an extroverted boy who usually talks a lot and 
            I’ve been learning and developing myself ever since I joined college to explore new domains in tech.
            I’m a computer science and engineering undergradudate student from Kerala, India,who always loves to design and code.
            
            </p>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-3xl font-bold text-green">Education</h5>
          <div className="">
            <h5 className="my-2 text-2xl font-bold">
              CSE
            </h5>

            <p className="font-semibold text-xl text-center">TKM College Of Engineering (2018-2022)*</p>
          </div>
          <h5 className="my-3 text-3xl font-bold text-green">Experience</h5>
          <div className="">
            <h5 className="my-2 text-2xl font-bold">Research Intern</h5>
            <p className="font-semibold text-xl text-center">Core.AI Scientific Technologies PVT LTD</p>
          </div>
        </div>
        <div>
          <h5 className="my-5 text-2xl font-bold text-green">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-1">
        

        <div>
          <h5 className="my-5 text-2xl font-bold text-green">Connect me through</h5>
          <div className="flex justify-around w-9/12 mx-auto my-5 text-blue md:w-full ">
        {/* <a href="#">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a> */}
        <a href="#" >
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="#" >
          <AiFillTwitterCircle className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/VI-Suji">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
        <a href="https://www.instagram.com/v.i_suji/">
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
          {/* <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Resume;
