/* eslint-disable react/prop-types */
import "../styles/Form.css";
import "../styles/PersonalDetailsStyle.css"

export function PersonalDetails({ inputValue, setInputValue }) {
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setInputValue((prevInput) => ({
        ...prevInput,
        [name]: value,
      }));
    };
  
    return (
      <div className="personal-details-container">
        <h2>Personal Details</h2>
        <form>
          <label htmlFor="userFullName">Full name </label>
          <input
            type="text"
            name="fullName"
            id="userFullName"
            value={inputValue.fullName || ""}
            onChange={handleInputChange}
          />
  
          <label htmlFor="userEmail">Email </label>
          <input
            type="email"
            name="userEmail"
            id="userEmail"
            value={inputValue.userEmail || ""}
            onChange={handleInputChange}
          />
  
          <label htmlFor="userPhoneNumber">Phone number </label>
          <input
            type="tel"
            name="userPhoneNumber"
            id="userPhoneNumber"
            value={inputValue.userPhoneNumber || ""}
            onChange={handleInputChange}
          />
  
          <label htmlFor="userAddress">Address </label>
          <input
            type="text"
            name="userAddress"
            id="userAddress"
            value={inputValue.userAddress || ""}
            onChange={handleInputChange}
          />
        </form>
      </div>
    );
  }
  