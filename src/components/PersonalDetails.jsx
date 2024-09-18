/* eslint-disable react/prop-types */
import "../styles/Form.css";
import "../styles/PersonalDetailsStyle.css";

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          height="22px"
          style={{
            transform: "translate(-10px, 20px)",
          }} /* Apply the same transform */
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <h2>Personal Details</h2>
      </div>
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
