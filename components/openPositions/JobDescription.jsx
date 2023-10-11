import {
  KeyFunctionlData,
  ProfessionalData,
  professionalSkillsData,
} from "@/data/jobDescription";
import Image from "next/image";
import right_icon_1 from "/public//img/right-icon-1.png";

const JobDescription = () => {
  return (
    <div className="bottom-area">
      <div className="single">
        <h3>Job Description</h3>
        <p>
          Are you an experienced and ambitious Digital Marketing Lead / Manager
          looking for a new challenge and an opportunity to advance your career?
          If you are able to manage multiple projects simultaneously with tight
          deadlines, we have the perfect job for you! We are looking for a
          dynamic Digital Marketing Lead / Manager to lead our distribution
          marketing dream team and support them with his/her leadership and
          expertise in developing and executing our digital marketing strategy.
        </p>
      </div>
      <div className="single">
        <h3>Key Functional Areas of Responsibility</h3>
        <ul>
          {KeyFunctionlData.map((itm) => (
            <li key={itm.id}>
              <span>
                <Image src={right_icon_1} alt="image" />
              </span>
              <span>{itm.desc}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="single">
        <h3>Professional Competencies</h3>
        <ul>
          {ProfessionalData.map((itm) => (
            <li key={itm.id}>
              <span>
                <Image src={right_icon_1} alt="image" />
              </span>
              <span>{itm.desc}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="single">
        <h3>Professional Skills & Qualiﬁcations</h3>
        <ul>
          {professionalSkillsData.map((itm) => (
            <li key={itm.id}>
              <span>
                <Image src={right_icon_1} alt="image" />
              </span>
              <span>{itm.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JobDescription;
