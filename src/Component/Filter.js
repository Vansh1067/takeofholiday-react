import React from "react";
import "./Filter.css";
import Select from '@material-ui/core/Select';
import { FormControl, InputLabel } from "@material-ui/core";
function Filter() {
  return (
    <div className="filter">
      <div class="filter__select">
     <FormControl className="filter__selectForm" variant="outlined">
     <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select>
          <option variant="outlined" value="0">Country</option>
          <option variant="outlined" value="1">Audi</option>
          <option variant="outlined" value="2">BMW</option>
          <option variant="outlined" value="3">Hai</option>
        </Select>
        </FormControl>
      </div>
      <br />

      <div class="filter__select">
     <FormControl className="filter__selectForm" variant="outlined"> 
     <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel> 
        <Select>
          <option value="0">Cities</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Hai</option>
        </Select>
     </FormControl>
      </div>
      <br />

      <div class="filter__select">
      <FormControl className="filter__selectForm" variant="outlined"> 
      <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel> 
        <Select>
          <option value="0">Tour Dates</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Hai</option>
        </Select>
        </FormControl>
      </div>
      <br />

      
      <div class="filter__select">
      <FormControl className="filter__selectForm" variant="outlined">
      <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>  
        <Select>
          <option value="0">Room</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Hai</option>
        </Select>
        </FormControl>
      </div>
      <br />

      <div class="filter__select">
      <FormControl className="filter__selectForm" variant="outlined">  
      <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel>
        <Select>
          <option value="0">Adults</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Hai</option>
        </Select>
        </FormControl>
      </div>
      <br />

      <div class="filter__select">
      <FormControl className="filter__selectForm" variant="outlined"> 
      <InputLabel htmlFor="outlined-age-native-simple">Age</InputLabel> 
        <Select>
          <option value="0">Children</option>
          <option value="1">Audi</option>
          <option value="2">BMW</option>
          <option value="3">Hai</option>
        </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Filter;
