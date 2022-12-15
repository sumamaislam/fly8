import React from "react";
import { CountryDropdown } from "react-country-region-selector";
function CountrySelect({ label, ...props }) {
  return (
    <div className="country-select-field">
      <label>{label}</label>
      <CountryDropdown {...props} />
    </div>
  );
}
export default CountrySelect;