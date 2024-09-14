/* eslint-disable react/prop-types */
import { useState } from 'react';
import '../styles/Form.css';

export function EducationDetails() {
  const [educationList, setEducationList] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false); 

  const handleAddEducation = (newEducation) => {
    setEducationList((prevList) => [...prevList, newEducation]);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
    
    <h2>Education</h2>

      {educationList.length >= 1 && educationList.map((edu, index) => (
        <p key={index}>{edu.school}</p>
      ))}

      <button className="btn" onClick={() => setShowAddForm(true)}>
        + Education
      </button>

      {showAddForm && (
        <AddNewEducationForm handleAddEducation={handleAddEducation} setShowAddForm={setShowAddForm} />
      )}
    </div>
  );
}

function AddNewEducationForm({ handleAddEducation, setShowAddForm }) {
  const [educationFormData, setEducationFormData] = useState({
    id: crypto.randomUUID(),
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddEducation(educationFormData);
    setShowAddForm(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="school">School</label>
        <input type="text" name="school" id="userSchool" value={educationFormData.school} onChange={handleChange} />

        <label htmlFor="degree">Degree</label>
        <input type="text" name="degree" id="userDegree" value={educationFormData.degree} onChange={handleChange} />

        <label htmlFor="startDate">Start date</label>
        <input type="text" name="startDate" id="startDate" value={educationFormData.startDate} onChange={handleChange} />

        <label htmlFor="endDate">End date</label>
        <input type="text" name="endDate" id="endDate" value={educationFormData.endDate} onChange={handleChange} />

        <div>
          <button type="button" onClick={() => setShowAddForm(false)}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  );
}
