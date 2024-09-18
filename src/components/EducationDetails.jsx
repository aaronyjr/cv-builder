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
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
        <h2>Education</h2>
      </div>

      {educationList.length >= 1 &&
        educationList.map((edu) => (
          <div key={edu.id} className="education-list-item">
            <button onClick={() => handleEditClick(edu)}>{edu.school}</button>
            <button
              onClick={() => deleteEducation(edu.id)}
              style={{ backgroundColor: "red", transform:'translate(10px, 2px)'}}
            >
              Del
            </button>
          </div>
        ))}

      <button
        className="add-education-button"
        onClick={() => setShowAddEducationForm(true)}
      >
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

function AddNewEducationForm({
  handleAddEducation,
  setShowAddForm,
  educationToEdit,
}) {
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
