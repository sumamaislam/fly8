import React from "react";
import { RegionDropdown } from "react-country-region-selector";

function StateSelect({ label, ...props }) {
  return (
    <div className="state-select-field">
      <label>{label}</label>
      <RegionDropdown {...props} />
    </div>
  );
}

export default StateSelect;
