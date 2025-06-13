import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="account_components">
      <h3>My Profile</h3>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          disabled
          value={user?.name || ""} // Fallback to an empty string
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          disabled
          value={user?.email || ""} // Fallback to an empty string
        />
      </div>
      {user?.role === "Job Seeker" && (
        <div>
          <label>My Preferred Job Niches</label>
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <input
              type="text"
              disabled
              value={user?.niches?.firstNiche || ""} // Fallback to an empty string
            />
            <input
              type="text"
              disabled
              value={user?.niches?.secondNiche || ""} // Fallback to an empty string
            />
            <input
              type="text"
              disabled
              value={user?.niches?.thirdNiche || ""} // Fallback to an empty string
            />
          </div>
        </div>
      )}
      <div>
        <label>Phone Number</label>
        <input
          type="number"
          disabled
          value={user?.phone || ""} // Fallback to an empty string
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          disabled
          value={user?.address || ""} // Fallback to an empty string
        />
      </div>
      <div>
        <label>Role</label>
        <input
          type="text"
          disabled
          value={user?.role || ""} // Fallback to an empty string
        />
      </div>
      <div>
        <label>Joined On</label>
        <input
          type="text"
          disabled
          value={user?.createdAt || ""} // Fallback to an empty string
        />
      </div>
    </div>
  );
};

export default MyProfile;