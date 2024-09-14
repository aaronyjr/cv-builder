import '../styles/Form.css';

export function PersonalDetails() {
    return (
        <>
            <h2>Personal Details</h2>
            <form action="">
                <label htmlFor="userFullName">Full name </label>
                <input type="text" name="fullName" id="userFullName" />

                <label htmlFor="userEmail">Email </label>
                <input type="email" name="userEmail" id="userEmail" />

                <label htmlFor="userPhoneNumber">Phone number </label>
                <input type="tel" name="Phone Number" id="userPhoneNumber" />

                <label htmlFor="userAddress">Address </label>
                <input type="text" name="userAddress" id="userAddress" />

            </form>
        </>
    )
}