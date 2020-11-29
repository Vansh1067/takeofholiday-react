import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <div className="filter__body">
        {/* <FormControl className="filter__bodySelect" variant="outlined">
          <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
          <Select label="Age">
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl> */}
        <h1>Filter</h1>
      </div>
    </div>
  );
}

export default Filter;
