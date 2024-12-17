'use client'
import React, {useState} from "react";

function AboutSection() {

    const [data, setData] = useState('skills');
    const [activeTab, setActiveTab] = useState<string>("skills");
    const TAB_DATA = [
        {
          title: "Skills",
          id: "skills",
          content: (
            <ul className="list-disc pl-2">
              <li>React js</li>
              <li>Next js</li>
              <li>Vue js</li>
              <li>Node js</li>
              <li>Express js</li>
              <li>Mongodb</li>
            </ul>
          ),
        },
        {
          title: "Education",
          id: "education",
          content: (
            <ul className="list-disc pl-2">
              <li>Bachelors in Information Technology (University of the Punjab)</li>
              <li>Masters in Information Technology (University of Education)</li>
            </ul>
          ),
        },
        {
          title: "Certifications",
          id: "certificate",
          content: (
            <ul className="list-disc pl-2">
              <li>Full Stack Developer (NFTP)</li>
            </ul>
          ),
        },
      ];

      const buttons = [
        {
            id:  'skills',
            label: 'Skills',
          },
          {
              id: 'education',
              label: 'Education',
            },
            {
              id: 'certificate',
              label: 'Certificates',
            }
      ]
      
      const handleTabs = (id: string): void => {
        setData(id);
        setActiveTab(id);
        console.log(`${id} is clicked`)
      };
      
  return (
    <section className="h-screen" id="about">
      <h1 className="heading">About Me</h1>
      <p className="px-24 lg:text-lg text-gray-600 text-center">
        I am a full stack web developer with a passion for creating interactive
        and responsive web applications. I have experience working with
        JavaScript, React, Redux, Node.js, Express, Next js, Vue js, HTML,
        CSS, and Git. I am a quick learner and I am always looking to expand my
        knowledge and skill set. I am a team player and I am excited to work
        with others to create amazing applications.
      </p>

    <div className="flex justify-center items-center mt-10">
    {buttons.map((button) => (
            <button
            key={button.id}
            onClick= {() => handleTabs(button.id)}
            className={`px-4 mr-2 py-2 rounded-3xl font-semibold transition-colors duration-300 ${
                activeTab === button.id
                  ? "text-gray-100 bg-clip bg-gradient-to-r from-pink-400 to-purple-600"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600"
              }`}            >
                {button.label}
            </button>
        ))
    }
    </div>

    <div className="flex justify-center align-middle mt-5 lg:text-lg text-gray-600 ">
        {TAB_DATA.find((t) => t.id === data)?.content}
    </div>
      
    </section>
  );
}

export default AboutSection;
