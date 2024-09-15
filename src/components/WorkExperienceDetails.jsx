/* eslint-disable react/prop-types */
import "../styles/Form.css";
import { useState } from "react";

export function WorkExperienceDetails() {
  const [workExperienceList, setWorkExperienceList] = useState([]);
  const [showWorkExperienceForm, setShowWorkExperienceForm] = useState(false);

  const handleWorkExperience = (currentWorkExperienceFormData) => {
    setWorkExperienceList((prevList) => [
      ...prevList,
      currentWorkExperienceFormData,
    ]);
  };

  const deleteWorkExperience = (companyToBeRemoved) => {
    const filteredCompanies = workExperienceList.filter(
      (company) => company.companyName !== companyToBeRemoved
    );
    setWorkExperienceList(filteredCompanies);
  };

  console.log(workExperienceList);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Experience</h2>

      {workExperienceList.length > 0 &&
        workExperienceList.map((workExperience, index) => (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p>{workExperience.companyName}</p>
            <button
              style={{
                backgroundColor: "red",
                color: "white",
                border: "none",
                padding: "0",
                height: "20px",
                width: "40px",
                borderRadius: "3px",
                fontSize: "10px",
                textAlign: "center",
                marginTop: "18px",
                marginLeft: "8px",
              }}
              onClick={() => deleteWorkExperience(workExperience.companyName)}
            >
              Del
            </button>
          </div>
        ))}

      <button className="btn" onClick={() => setShowWorkExperienceForm(true)}>
        + Experience
      </button>

      {showWorkExperienceForm && (
        <AddNewWorkExperienceForm
          handleAddWorkExperience={handleWorkExperience}
          setShowAddWorkExperienceForm={setShowWorkExperienceForm}
        />
      )}
    </div>
  );
}

function AddNewWorkExperienceForm({
  handleAddWorkExperience,
  setShowAddWorkExperienceForm,
}) {
  const [currentWorkExperienceFormData, setCurrentWorkExperienceFormData] =
    useState({
      id: crypto.randomUUID,
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      description: "",
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentWorkExperienceFormData({
      ...currentWorkExperienceFormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasNonEmptyField = Object.values(
      currentWorkExperienceFormData.companyName
    ).some((value) => value.trim() !== "");
    if (hasNonEmptyField) {
      handleAddWorkExperience(currentWorkExperienceFormData);
    }
    setShowAddWorkExperienceForm(!setShowAddWorkExperienceForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          name="companyName"
          id="userCompanyName"
          value={currentWorkExperienceFormData.companyName}
          onChange={handleChange}
        />

        <label htmlFor="positionTitle">Position Title</label>
        <input
          type="text"
          name="positionTitle"
          id="userPositionTitle"
          value={currentWorkExperienceFormData.positionTitle}
          onChange={handleChange}
        />

        <label htmlFor="startDate">Start date</label>
        <input
          type="text"
          name="startDate"
          id="startDate"
          value={currentWorkExperienceFormData.startDate}
          onChange={handleChange}
        />

        <label htmlFor="endDate">End date</label>
        <input
          type="text"
          name="endDate"
          id="endDate"
          value={currentWorkExperienceFormData.endDate}
          onChange={handleChange}
        />

        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="jobDescription"
          value={currentWorkExperienceFormData.description}
          onChange={handleChange}
        />

        <div>
          <button
            type="button"
            onClick={() => setShowAddWorkExperienceForm(false)}
          >
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
}
