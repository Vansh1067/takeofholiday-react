import { Checkbox, FormControl,  InputLabel, MenuItem, Select, Slider, Typography } from "@material-ui/core";
import React from "react";
import "./Tours.css";

import CardDetails from "./Component/CardDetails";
import { CheckBox } from "@material-ui/icons";
function Tours() {
  return (
    <div className="tours">
      <div className="tours__left">
        <h3>Filter By </h3>
        <div class="tours__select">
          <FormControl className="tours__selectForm" variant="">
            <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <br />

        <div class="filter__select">
          <FormControl className="tours__selectForm" variant="">
            <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <br />

        <div class="tours__select">
          <FormControl className="tours__selectForm" variant="">
            <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <br />

        <div class="tours__select">
          <FormControl className="tours__selectForm" variant="">
            <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <br />

        <div class="tours__select">
          <FormControl className="tours__selectForm" variant="">
            <InputLabel htmlFor="outlined-age-native-simple"></InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <br />

        <div class="tours__select">
          <FormControl className="tours__selectForm" variant="">
            <InputLabel htmlFor="outlined-age-native-simple"> </InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* slider */}
        <div className="tours__slider" >
        <Typography id="range-slider" gutterBottom>
          <p>Price range</p>
        </Typography>
        <Slider />
        </div>

        {/*checkbox  */}
        <div className="tours__property">
            <p >Property Type</p>
            <div className="tours__propertyCheckbox">
            <div className="tours__propertyCheckboxList" >
            <Checkbox color="primary" />
            <p>Country</p>
            </div>

            <div className="tours__propertyCheckboxList" >
            <Checkbox color="primary" />
            <p>Three</p>
            </div>

            <div className="tours__propertyCheckboxList" >
            <Checkbox color="primary" />
            <p>Price</p>
            </div>

            <div className="tours__propertyCheckboxList" >
            <Checkbox color="primary" />
            <p>Country</p>
            </div>

            </div>

        </div>

      </div>



      <div className="tours__right">
        {/* <h3>Result: 12 Tours</h3> */}
       <div className="tours__rightFirst" >
        <div>
          <CardDetails />
        </div>

        <div>
          <CardDetails />
        </div>

        <div>
          <CardDetails />
        </div>
        </div>

        <div className="tours_rightSecound">

        <div>
          <CardDetails />
        </div>

        <div>
          <CardDetails />
        </div>

        <div>
          <CardDetails />
        </div>

        </div>

      </div>
    </div>
  );
}

export default Tours;
