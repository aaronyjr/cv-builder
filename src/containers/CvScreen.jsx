import { EducationDetails } from "../components/EducationDetails";
import { WorkExperienceDetails } from "../components/WorkExperienceDetails";
import { PersonalDetails } from "../components/PersonalDetails";
import { CvTemplateContainer } from "./CvTemplateContainer";
import { useState } from "react";

export function CvScreen() {
  const [personalDetails, setPersonalDetails] = useState("");
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const [educationList, setEducationList] = useState([]);

  const newList = workExperienceList.filter(
    (experience) => experience.companyName !== "Some Company"
  );
  console.log(newList);

  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <div
        className="left"
        style={{ width: "100%", height: "90vh", backgroundColor: "purple" }}
      >
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
      <div className="right" style={{ width: "100%" }}>
        <CvTemplateContainer
          personalDetails={personalDetails}
          workExperienceList={workExperienceList}
          educationList={educationList}
        />
      </div>
    </div>
  );
}
