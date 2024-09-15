import { EducationDetails } from "../components/EducationDetails";
import { WorkExperienceDetails } from "../components/WorkExperienceDetails";
import { PersonalDetails } from "../components/PersonalDetails";
import { CvTemplateContainer } from "./CvTemplateContainer";

export function CvScreen() {
  return (
    <div style={{display:"flex", width:'100%', justifyContent:'center'}}>
      <div className="left" style={{width:'100%', height:'90vh', backgroundColor:'purple'}}>
        <PersonalDetails />
        <EducationDetails />
        <WorkExperienceDetails />
      </div>
      <div className="right" style={{width:'100%'}}>
        <CvTemplateContainer />
      </div>
    </div>
  );
}
