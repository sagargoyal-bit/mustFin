import React, {  useState } from "react";


function DropDown({ options, setdropDown }) {
    const [selectedValue, setSelectedValue] = useState("");
    function handleDropdown(e) {
      setSelectedValue(e.target.value);
      setdropDown(e.target.value);
    }
    return (
      options && (
        <select
          name="plan"
          id="plan"
          className="px-6 py-2 m-1 rounded-md bg-white text-black border"
          onChange={handleDropdown}
          value={selectedValue}
        >
          <option value="">Select</option>
          {options.map((element) => (
            <option
              className="p-2 m-1 rounded-md bg-white text-black hover:bg-gray-600"
              value={element}
              key={element}
             
            >
              {element}
            </option>
          ))}
        </select>
      )
    );
  }
  

export default DropDown