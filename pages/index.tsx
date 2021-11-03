import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";
import Image from "next/image";


const About: NextPage = () => {
  // console.log(services);

  return (
    
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      {/* <Image
        src="https://sumitdey.netlify.app/static/media/max.9d3a6d3e.jpg"
        alt="avatar"
        className=" mx-auto border rounded-full"
        height="150px"
        width="128px"
        layout="intrinsic"
        quality="100"
      /> */}
      <h2 className="my-3 text-5xl font-large font-domine">
        Inspire the Universe with my lyrics!
      </h2>

      <h4 className="text-3xl font-large font-bold">
      Hey,
      </h4>

      <h5 className="my-3 text-2xl font-large">
      &emsp; I'm an Undergraduate CS Engineer and a hardware enthusiast. I'm currently a part of R&D at Core.AI. I love to read mostly novels, drawing potraits and listen to songs too much addicted to *Melodies*</h5>
      <div
        className="flex-grow p-4 mt-5 bg-green dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-3xl font-semibold tracking-wide">
          Updates
        </h4>

        <div className="grid gap-6 my-3 card-zoom md:grid-cols-2 ">
          {services.map((service) => (
            <a href="/blogs">
            <div
              className="col-span-2 p-2 bg-gray-200 text-2xl rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
