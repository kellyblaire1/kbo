import React from "react";
import { FaReact, FaAngular, FaPhp, FaHtml5, FaCss3, FaSmokingBan, FaCheckCircle } from "react-icons/fa";

const Tech = () => {
  const techList = [
    {
      title: "ReactJS",
      icon: <FaReact className="text-5xl" />,
    },
    {
      title: "Angular",
      icon: <FaAngular className="text-5xl" />,
    },
    {
      title: "PHP",
      icon: <FaPhp className="text-5xl" />,
    },
    {
      title: "HTML5",
      icon: <FaHtml5 className="text-5xl" />,
    },
    {
      title: "CSS3",
      icon: <FaCss3 className="text-5xl" />,
    },
    {
      title: "MySQL",
      icon: <FaCheckCircle className="text-5xl" />,
    },
    {
      title: "Ionic",
      icon: <FaCheckCircle className="text-5xl" />,
    },
  ];

  const items = techList.map((item) => (
    <div className="m-5 grid justify-items-center">
      {" "}
      {item.icon} {item.title}
    </div>
  ));

  return (
    <div name="tech-stack" className="py-28">
      <div className="text-center">
        <h1 className="text-5xl text-primary font-bold mb-16">Tech Stacks</h1>
        <div className="text-center flex justify-center">{items}</div>
      </div>
    </div>
  );
};

export default Tech;
