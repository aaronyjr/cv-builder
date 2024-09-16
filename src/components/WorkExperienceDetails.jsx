/* eslint-disable react/prop-types */
import "../styles/Form.css";
import { useState } from "react";

export function WorkExperienceDetails({
    workExperienceList,
    setWorkExperienceList,
  }) {
    const [showWorkExperienceForm, setShowWorkExperienceForm] = useState(false);
    const [workExperienceToBeEdited, setWorkExperienceToBeEdited] = useState(null);
  
    const handleAddWorkExperience = (currentWorkExperienceFormData) => {
      if (workExperienceToBeEdited) {
        const updatedList = workExperienceList.map((experience) =>
          experience.id === currentWorkExperienceFormData.id
            ? currentWorkExperienceFormData
            : experience
        );
        setWorkExperienceList(updatedList);
        setWorkExperienceToBeEdited(null);
      } else {

        setWorkExperienceList((prevList) => [
          ...prevList,
          currentWorkExperienceFormData,
        ]);
      }
      setShowWorkExperienceForm(false); 
    };
  
    const handleEditWorkExperience = (work) => {
      setWorkExperienceToBeEdited(work);
      setShowWorkExperienceForm(true);
    };
  
    const deleteWorkExperience = (companyIdToBeRemoved) => {
      const filteredCompanies = workExperienceList.filter(
        (company) => company.id !== companyIdToBeRemoved
      );
      setWorkExperienceList(filteredCompanies);
    };
  
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h2>Experience</h2>
  
        {workExperienceList.length > 0 &&
          workExperienceList.map((workExperience, index) => (
            <div
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                onClick={() => handleEditWorkExperience(workExperience)}
              >
                {workExperience.companyName}
              </button>
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
                onClick={() => deleteWorkExperience(workExperience.id)}
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
            handleAddWorkExperience={handleAddWorkExperience}
            setShowAddWorkExperienceForm={setShowWorkExperienceForm}
            workDetailsToEdit={workExperienceToBeEdited}
          />
        )}
      </div>
    );
  }

import { useEffect } from "react";

function AddNewWorkExperienceForm({
  handleAddWorkExperience,
  setShowAddWorkExperienceForm,
  workDetailsToEdit,
}) {
  const [currentWorkExperienceFormData, setCurrentWorkExperienceFormData] =
    useState({
      id: crypto.randomUUID(),
      companyName: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      description: "",
    });

  useEffect(() => {
    if (workDetailsToEdit) {
      setCurrentWorkExperienceFormData({
        id: workDetailsToEdit.id,
        companyName: workDetailsToEdit.companyName || "",
        positionTitle: workDetailsToEdit.positionTitle || "",
        startDate: workDetailsToEdit.startDate || "",
        endDate: workDetailsToEdit.endDate || "",
        description: workDetailsToEdit.description || "",
      });
    }
  }, [workDetailsToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentWorkExperienceFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddWorkExperience(currentWorkExperienceFormData);
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
