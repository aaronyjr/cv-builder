/* eslint-disable react/prop-types */
import "../styles/ResumeContent.css";

export function CvTemplateContainer({
  personalDetails,
  workExperienceList,
  educationList,
}) {
  const pdfAspectRatio = 1.414;
  const height = "90vh";
  const width = `calc(${height} / ${pdfAspectRatio})`;

  return (
    <div
      className="cvTemplate"
      style={{ height, width, marginLeft: "100px", backgroundColor: "#f9f9f9" }}
    >
      <div
        className="header"
        style={{ width: "100%", backgroundColor: "#008080", minHeight: "14%" }}
      >
        <h4 style={{ marginBottom: "0px", marginTop: "14px" }}>
          {personalDetails.fullName}
        </h4>
        <ul>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              height="22px"
              style={{
                transform: "translate(4px, 2px)",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <li style={{ marginLeft: "10px" }}>{personalDetails.userEmail}</li>{" "}
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              height="22px"
              style={{
                transform: "translate(4px, 2px)",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>
            <li style={{ marginLeft: "10px" }}>
              {personalDetails.userPhoneNumber}
            </li>
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              height="22px"
              style={{
                transform: "translate(4px, 2px)",
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2.25c-3.52 0-6.375 2.855-6.375 6.375 0 4.523 6.375 11.625 6.375 11.625S18.375 13.148 18.375 8.625C18.375 5.105 15.52 2.25 12 2.25z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10.875a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5z"
              />
            </svg>
            <li style={{ marginLeft: "10px" }}>
              {personalDetails.userAddress}
            </li>
          </div>
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
      {educationList.length > 0 && workExperienceList.length > 0 && (
        <div
          className="divider"
          style={{
            borderBottom: "1px solid #ccc",
            width: "80%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        ></div>
      )}
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
    </div>
  );
}

function CreateWorkDetailComponent({ workDetail }) {
  const { companyName, positionTitle, startDate, endDate, description } =
    workDetail;

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
