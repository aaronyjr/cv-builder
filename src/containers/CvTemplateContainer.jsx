/* eslint-disable react/prop-types */
export function CvTemplateContainer({ workExperienceList, educationList }) {
  const aspectRatio = 1.414;
  const height = "90vh";
  const width = `calc(${height} / ${aspectRatio})`;

  return (
    <div style={{ height, width, backgroundColor: "red", marginLeft: "100px" }}>
      <div className="header" style={{width:'100%', backgroundColor:'yellow', height:'14%'}}>

      </div>
      <div className="educationSection">
        {educationList.length > 0 && educationList.map((education) => 
          <CreateEducationDetailComponent key={education.id} educationDetail={education}/>
        )}
      </div>
      <div className="workExperienceSection">
        {workExperienceList.length > 0 && workExperienceList.map((workExperience) =>
          <CreateWorkDetailComponent key={workExperience.id} workDetail={workExperience}/>
        )}
      </div>
    </div>
  );
}


function CreateWorkDetailComponent({workDetail}) {
  return (
    <p>{workDetail.companyName}</p>
  )
}

function CreateEducationDetailComponent({educationDetail}) {
  return (
    <p>{educationDetail.school}</p>
  )
}

// WORK
// const [currentWorkExperienceFormData, setCurrentWorkExperienceFormData] =
// useState({
//   id: crypto.randomUUID,
//   companyName: "",
//   positionTitle: "",
//   startDate: "",
//   endDate: "",
//   description: "",
// });


// EDUCATION
// const [currentEducationFormData, setCurrentEducationFormData] = useState({
//   id: crypto.randomUUID(),
//   school: "",
//   degree: "",
//   startDate: "",
//   endDate: "",
// });