/* eslint-disable react/prop-types */
import '../styles/ResumeContent.css'

export function CvTemplateContainer({
  personalDetails,
  workExperienceList,
  educationList,
}) {
  const pdfAspectRatio = 1.414;
  const height = "90vh";
  const width = `calc(${height} / ${pdfAspectRatio})`;

  return (
    <div className='cvTemplate' style={{ height, width, marginLeft: "100px", backgroundColor:'#f9f9f9'}}>
      <div
        className="header"
        style={{ width: "100%", backgroundColor: "blue", minHeight: "14%" }}
      >
        <h4 style={{marginBottom:'0px', marginTop:'14px'}}>{personalDetails.fullName}</h4>
        <ul>
          <li>{personalDetails.userEmail}</li>
          <li>{personalDetails.userPhoneNumber}</li>
          <li>{personalDetails.userAddress}</li>
        </ul>
      </div>
      <div className="educationSection">
        {educationList.length > 0 && <p>Education</p>}
        {educationList.length > 0 &&
          educationList.map((education) => (
            <CreateEducationDetailComponent
              key={education.id}
              educationDetail={education}
            />
          ))}
      </div>
      <div className="workExperienceSection">
        {workExperienceList.length > 0 && <p>Professional Experience</p>}

        {workExperienceList.length > 0 &&
          workExperienceList.map((workExperience) => (
            <CreateWorkDetailComponent
              key={workExperience.id}
              workDetail={workExperience}
            />
          ))}
      </div>
    </div>
  );
}

function CreateEducationDetailComponent({ educationDetail }) {
  const { school, degree, startDate, endDate } = educationDetail;

  return (
    <div className="resume-container">
      <div className="resume-section">
        <div className="resume-date">{`${startDate} - ${endDate}`}</div>
        <div className="resume-content">
          <h4>{school}</h4>
          <p>{degree}</p>
        </div>
      </div>
      <div className="resume-divider"></div>
    </div>
  );
}

function CreateWorkDetailComponent({ workDetail }) {
  const { companyName, positionTitle, startDate, endDate, description } = workDetail;

  return (
    <div className="resume-container">
      <div className="resume-section">
        <div className="resume-date">{`${startDate} - ${endDate}`}</div>
        <div className="resume-content">
          <ul>
            <li>{companyName}</li>
            <li>{positionTitle}</li>
            <li>{description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
