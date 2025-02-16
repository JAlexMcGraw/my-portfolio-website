import Image from "next/image";
import profileImage from "@/public/Dubrovnik-2022.png";
import { socialLinks } from "./config";

export default function Page() {
  const workIveDone = [
    "Architect GenAI data analyst agent for finance and merchandise managers within CVS Retail to analyze data with natural language",
    "Built said agent in Python using Burr, DeepEval, Streamlit, OpenAI, Azure and Snowflake",
    "Developed a Jira ticket to DAX code GenAI conversion system",
    `Implement a multi-camera computer vision solution using open source models and AWK Rekognition to track individuals' emotion, 
    eye gaze, and subsequent walking route when looking at an information board`,
    "Wrote, tested, and productionalized customer churn models in Azure"
  ]

  const sideProjects = [
    "Built a basic cover letter generator using Python, FastAPI, and OpenAI on the backend and TypeScript and React on the frontend",
    "Contributed to LlamaIndex to make connections to Azure Blob Storage via credentials and enhanced PDF Reader functionality to give users more control over doc structure"
  ]

  const interests = [
    "Building AI native features and products",
    "Backend engineering with Python",
    "Continuing to learn and build frontends with React/NextJS and TypeScript",
    "Helping solve problems that make a positive difference for others and/or bring enjoyment to others"
  ]

  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src={profileImage}
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        About Me
      </h1>
      <div className="prose prose-neutral dark:prose-invert">
        <h2>
          Hey I'm <div className="text-blue-600 inline">Alex.</div> Welcome to my personal site where you can find my professional experiences and
          interests, along with personal experiences and other random tid bits.
        </h2>
        <p>
        I am currently a Senior Decision Scientist at CVS Health and was previously a Data & Technology Consultant at Slalom Consulting. 
        Job titles can sometimes be misleading about what I've actually done and, more importantly, what truly interests me.
        </p>
        <p>
         <b>Here is a glimpse at what I've done professionally.</b>
        </p>
        <ul className="gap-4 p-4">
            {workIveDone.map((item, index) => (
            <li key={index} className="w-full bg-gray-200 p-2 rounded-md text-center">
              {item}
            </li>
          ))}
          </ul>
        <p>
          <b>Here are a few things that I've done on the side.</b>
        </p>
        <ul className="gap-4 p-4">
            {sideProjects.map((item, index) => (
              <li key={index} className="w-full bg-gray-200 p-2 rounded-md text-center">
                {item}
              </li>
            ))}
          </ul>
        <p>
          <b>Here is what I am interested in doing for work and where I truly want to grow</b>
        </p>
        <ul className="gap-4 p-4">
            {interests.map((item, index) => (
              <li key={index} className="w-full bg-gray-200 p-2 rounded-md text-center">
                {item}
              </li>
            ))}
          </ul>
      </div>
    </section>
  );
}
