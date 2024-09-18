import { EducationDetails } from "../components/EducationDetails";
import { WorkExperienceDetails } from "../components/WorkExperienceDetails";
import { PersonalDetails } from "../components/PersonalDetails";
import { CvTemplateContainer } from "./CvTemplateContainer";
import { useState } from "react";
import "../styles/CvScreenStyle.css";

export function CvScreen() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "LeBron James",
    userEmail: "lebron@lakers.com",
    userPhoneNumber: "+65 81234567",
    userAddress: "Los Angeles, USA",
  });

  const [educationList, setEducationList] = useState([
    {
      school: "St. Vincent-St. Mary High School",
      degree: "High School Diploma",
      startDate: "2003",
      endDate: "2003",
    },
  ]);

  const [workExperienceList, setWorkExperienceList] = useState([
    {
      id:crypto.randomUUID(),
      companyName: "Los Angeles Lakers",
      positionTitle: "Professional Basketball Player",
      startDate: "2018",
      endDate: "Present",
      description:
        "Leading team as a forward in the NBA, winning the NBA Championship finals in 2020, achieving the finals MVP award.",
    },
    {
      id:crypto.randomUUID(),
      companyName: "Cleveland Cavaliers",
      positionTitle: "Professional Basketball Player",
      startDate: "2014",
      endDate: "2018",
      description:
        "Returned to the Cavaliers, leading them to their first NBA championship in 2016.",
    },
  ]);

  const newList = workExperienceList.filter(
    (experience) => experience.companyName !== "Some Company"
  );
  console.log(newList);

  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <div className="left" style={{ width: "100%", height: "90vh" }}>
        <PersonalDetails
          inputValue={personalDetails}
          setInputValue={setPersonalDetails}
        />
        <EducationDetails
          educationList={educationList}
          setEducationList={setEducationList}
        />
        <WorkExperienceDetails
          workExperienceList={workExperienceList}
          setWorkExperienceList={setWorkExperienceList}
        />
      </div>
      <div className="right" style={{ width: "100%", height: "5000px" }}>
        <CvTemplateContainer
          personalDetails={personalDetails}
          workExperienceList={workExperienceList}
          educationList={educationList}
        />
      </div>
    </div>
  );
}
