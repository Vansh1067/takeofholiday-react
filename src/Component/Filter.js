import React from "react";
import "./Filter.css";
import Select from '@material-ui/core/Select';
import { FormControl,  MenuItem } from "@material-ui/core";
function Filter() {
  return (
    <div className="filter">
      <div class="filter__select">
     <FormControl className="filter__selectForm" variant="outlined">
     {/* <InputLabel htmlFor="outlined-age-native-simple"></InputLabel> */}
        <Select >
       
          <MenuItem variant="outlined" value="0">Country</MenuItem>
          <MenuItem variant="outlined" value="1">Audi</MenuItem>
          <MenuItem variant="outlined" value="2">BMW</MenuItem>
          <MenuItem variant="outlined" value="3">Hai</MenuItem>
        </Select>
        </FormControl>
      </div>
      <br />

      <div class="filter__select">
     <FormControl className="filter__selectForm" variant="outlined"> 
     {/* <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>  */}
        <Select>
       
          <MenuItem value="0">Cities</MenuItem>
          <MenuItem value="1">Audi</MenuItem>
          <MenuItem value="2">BMW</MenuItem>
          <MenuItem value="3">Hai</MenuItem>
        </Select>
     </FormControl>
      </div>
      <br />

      <div class="filter__select">
      <FormControl className="filter__selectForm" variant="outlined"> 
      {/* <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>  */}
        <Select>
       
          <MenuItem value="0">Tour Dates</MenuItem>
          <MenuItem value="1">Audi</MenuItem>
          <MenuItem value="2">BMW</MenuItem>
          <MenuItem value="3">Hai</MenuItem>
        </Select>
        </FormControl>
      </div>
      <br />

      
      <div class="filter__select">
      <FormControl className="filter__selectForm" variant="outlined">
      {/* <InputLabel htmlFor="outlined-age-native-simple" ></InputLabel>   */}
        <Select>
        
          <MenuItem value="0">Room</MenuItem>
          <MenuItem value="1">Audi</MenuItem>
          <MenuItem value="2">BMW</MenuItem>
          <MenuItem value="3">Hai</MenuItem>
        </Select>
        </FormControl>
      </div>
      <br />

      <div class="filter__select">
      <FormControl className="filter__selectForm" variant="outlined">  
      {/* <InputLabel htmlFor="outlined-age-native-simple"></InputLabel> */}
        <Select>
        
          <MenuItem value="0">Adults</MenuItem>
          <MenuItem value="1">Audi</MenuItem>
          <MenuItem value="2">BMW</MenuItem>
          <MenuItem value="3">Hai</MenuItem>
        </Select>
        </FormControl>
      </div>
      <br />

     
    </div>
  );
}

export default Filter;
