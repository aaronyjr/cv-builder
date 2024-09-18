/* eslint-disable react/prop-types */
import "../styles/Form.css";
import { useState, useEffect } from "react";

export function WorkExperienceDetails({
  workExperienceList,
  setWorkExperienceList,
}) {
  const [showWorkExperienceForm, setShowWorkExperienceForm] = useState(false);
  const [workExperienceToBeEdited, setWorkExperienceToBeEdited] =
    useState(null);

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
    <div className="work-experience-container">
      <div style={{display:'flex', justifyContent:'center'}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          height='22px'
          style={{ transform: 'translate(-10px, 20px)' }} /* Correct placement of transform */

        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
          />
        </svg>

        <h2>Experience</h2>
      </div>

      {workExperienceList.length > 0 &&
        workExperienceList.map((workExperience, index) => (
          <div key={index} className="work-experience-list-item">
            <button onClick={() => handleEditWorkExperience(workExperience)}>
              {workExperience.companyName}
            </button>
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => deleteWorkExperience(workExperience.id)}
            >
              Del
            </button>
          </div>
        ))}

      <button
        className="add-work-experience-button"
        onClick={() => setShowWorkExperienceForm(true)}
      >
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
    <form onSubmit={handleSubmit} className="add-work-experience-form">
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

      <div className="form-buttons">
        <button
          type="button"
          onClick={() => setShowAddWorkExperienceForm(false)}
        >
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
