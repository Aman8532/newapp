import React from "react";

export default function Alert({ alert }) {
  if (alert === null) {
    return null;
  }

  return (
    <div className="container mt-3">
      <div
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{alert.msg}</strong>

        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
        ></button>
      </div>
    </div>
  );
}
