/* eslint-disable react/prop-types */
export function CvTemplateContainer({ workExperienceList, educationList }) {
  const pdfAspectRatio = 1.414;
  const height = "90vh";
  const width = `calc(${height} / ${pdfAspectRatio})`;

  return (
    <div style={{ height, width, backgroundColor: "red", marginLeft: "100px" }}>
      <div className="header" style={{width:'100%', backgroundColor:'yellow', height:'14%'}}>

      </div>
      <div className="educationSection">
        {educationList.length > 0 && educationList.map(education => 
          <CreateEducationDetailComponent key={education.id} educationDetail={education}/>
        )}
      </div>
      <div className="workExperienceSection">
        {workExperienceList.length > 0 && workExperienceList.map(workExperience =>
          <CreateWorkDetailComponent key={workExperience.id} workDetail={workExperience}/>
        )}
      </div>
    </div>
  );
}

// TODO: DESIGN BOTH COMPONENTS

function CreateEducationDetailComponent({educationDetail}) {
  const school = educationDetail.school;
  const degree = educationDetail.degree;
  const startDate = educationDetail.startDate
  const endDate = educationDetail.endDate

  return (
    <>
    <p>{school}</p>
    <p>{degree}</p>
    <p>{startDate}</p>
    <p>{endDate}</p>
    </>
  )
}

function CreateWorkDetailComponent({workDetail}) {
  const companyName = workDetail.companyName;
  const positionTitle = workDetail.positionTitle;
  const startDate = workDetail.startDate;
  const endDate = workDetail.endDate;
  const description = workDetail.description

  return (
    <>
    <p>{companyName}</p>
    <p>{positionTitle}</p>
    <p>{startDate}</p>
    <p>{endDate}</p>
    <p>{description}</p>
    </>
  )
}
