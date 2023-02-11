import React from "react";

const PrimaryInput = ({ label, type = "texts", placeholder, id }) => {
  return (
    <div className="form-contents mt-5">
      <label htmlFor={id} className="form-label text-muted">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="form-control border-0 border-bottom rounded-0 border-1 ps-0 user-email"
      />
      <p className="email-error text-danger text-sm-14"></p>
    </div>
  );
};

export default PrimaryInput;
