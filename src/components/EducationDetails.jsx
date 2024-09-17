/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Form.css";

export function EducationDetails({ educationList, setEducationList }) {
  const [showAddEducationForm, setShowAddEducationForm] = useState(false);
  const [educationToEdit, setEducationToEdit] = useState(null);

  const handleAddEducation = (newEducation) => {
    if (educationToEdit) {
      const updatedEducationList = educationList.map((education) =>
        education.id === educationToEdit.id ? newEducation : education
      );
      setEducationList(updatedEducationList);
      setEducationToEdit(null); 
    } else {
      setEducationList((prevList) => [...prevList, newEducation]);
    }
  };

  const deleteEducation = (educationToBeDeleted) => {
    const filteredList = educationList.filter(
      (education) => education.id !== educationToBeDeleted
    );
    setEducationList(filteredList);
  };

  const handleEditClick = (education) => {
    setEducationToEdit(education);
    setShowAddEducationForm(true);
  };

  return (
    <div className="education-details-container">
      <h2>Education</h2>

      {educationList.length >= 1 &&
        educationList.map((edu) => (
          <div key={edu.id} className="education-list-item">
            <button onClick={() => handleEditClick(edu)}>{edu.school}</button>
            <button onClick={() => deleteEducation(edu.id)} style={{ backgroundColor: "red" }}>
              Del
            </button>
          </div>
        ))}

      <button className="add-education-button" onClick={() => setShowAddEducationForm(true)}>
        + Education
      </button>

      {showAddEducationForm && (
        <AddNewEducationForm
          handleAddEducation={handleAddEducation}
          setShowAddForm={setShowAddEducationForm}
          educationToEdit={educationToEdit}
        />
      )}
    </div>
  );
}

function AddNewEducationForm({ handleAddEducation, setShowAddForm, educationToEdit }) {
  const [currentEducationFormData, setCurrentEducationFormData] = useState({
    id: educationToEdit ? educationToEdit.id : crypto.randomUUID(),
    school: educationToEdit ? educationToEdit.school : "",
    degree: educationToEdit ? educationToEdit.degree : "",
    startDate: educationToEdit ? educationToEdit.startDate : "",
    endDate: educationToEdit ? educationToEdit.endDate : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducationFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasNonEmptyField = Object.values(
      currentEducationFormData.school
    ).some((value) => value.trim() !== "");
    if (hasNonEmptyField) {
      handleAddEducation(currentEducationFormData);
    }
    setShowAddForm(false);
  };

  return (
    <form onSubmit={handleSubmit} className="add-education-form">
      <label htmlFor="school">School</label>
      <input
        type="text"
        name="school"
        id="userSchool"
        value={currentEducationFormData.school}
        onChange={handleChange}
      />

      <label htmlFor="degree">Degree</label>
      <input
        type="text"
        name="degree"
        id="userDegree"
        value={currentEducationFormData.degree}
        onChange={handleChange}
      />

      <label htmlFor="startDate">Start date</label>
      <input
        type="text"
        name="startDate"
        id="startDate"
        value={currentEducationFormData.startDate}
        onChange={handleChange}
      />

      <label htmlFor="endDate">End date</label>
      <input
        type="text"
        name="endDate"
        id="endDate"
        value={currentEducationFormData.endDate}
        onChange={handleChange}
      />

      <div className="form-buttons">
        <button type="button" onClick={() => setShowAddForm(false)}>
          Cancel
        </button>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}

