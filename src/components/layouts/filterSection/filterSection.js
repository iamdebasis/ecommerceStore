import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByChoice, getFilteredColours, getFilteredGender, getFilteredTypes, getFilters } from "../../../store/entities/items";
import filterStyles from "./filterSection.module.css";

function FilterSection() {
  const filters = useSelector(getFilters);
  const filteredColours = useSelector(getFilteredColours);
  const filteredTypes = useSelector(getFilteredTypes);
  const filteredGender = useSelector(getFilteredGender);

  const dispatch = useDispatch();
  const onOptionSelected = (filter, key) => {
    dispatch(filterByChoice({ filter, key }));
  };

  return (
    <div className={filterStyles.filterSection}>
      {Object.keys(filters).map((key, index1) => (
        <div key={index1}>
          <div className={filterStyles.filterHeading}>{key}</div>
          <div className={filterStyles.filters}>
            {filters[key].map((filter, index) => (
              <div className={filterStyles.eachfilter} key={filter}>
                <label style={{ marginBottom: "10px" }}>
                  <input
                    type="checkbox"
                    style={{ cursor: "pointer" }}
                    checked={key === "colors" ? filteredColours.includes(filter) : key === "type" ? filteredTypes.includes(filter) : filteredGender.includes(filter)}
                    onChange={() => {
                      onOptionSelected(filter, key);
                    }}
                  />
                </label>
                <div className={filterStyles.option}>{filter}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default FilterSection;
