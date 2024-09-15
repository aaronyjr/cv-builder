/* eslint-disable react/prop-types */
import { useState } from "react";
import "../styles/Form.css";

export function EducationDetails() {
  const [educationList, setEducationList] = useState([]);
  const [showAddEducationForm, setShowAddEducationForm] = useState(false);

  const handleAddEducation = (newEducation) => {
    setEducationList((prevList) => [...prevList, newEducation]);
  };

  const deleteEducation = (educationToBeDeleted) => {
    const filteredList = educationList.filter(
      (education) => education.school !== educationToBeDeleted
    );
    setEducationList(filteredList);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Education</h2>

      {educationList.length >= 1 &&
        educationList.map((edu, index) => (
          <div
            key={index}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <p>{edu.school}</p>
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
              onClick={() => deleteEducation(edu.school)}
            >
              Del
            </button>
          </div>
        ))}

      <button className="btn" onClick={() => setShowAddEducationForm(true)}>
        + Education
      </button>

      {showAddEducationForm && (
        <AddNewEducationForm
          handleAddEducation={handleAddEducation}
          setShowAddForm={setShowAddEducationForm}
        />
      )}
    </div>
  );
}

function AddNewEducationForm({ handleAddEducation, setShowAddForm }) {
  const [currentEducationFormData, setCurrentEducationFormData] = useState({
    id: crypto.randomUUID(),
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
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
    const hasNonEmptyField = Object.values(currentEducationFormData).some(
      (value) => value.trim() !== ""
    );
    if (hasNonEmptyField) {
      handleAddEducation(currentEducationFormData);
    }
    setShowAddForm(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
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

        <div>
          <button type="button" onClick={() => setShowAddForm(false)}>
            Cancel
          </button>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
}
