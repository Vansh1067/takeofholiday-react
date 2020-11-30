import { Button, FormControl, Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import "./Filter.css";

function Filter() {
  return (
    <div className="filter">
      <div className="filter__body">
      <Grid container justify="space-evenly" alignItems="center" spacing={2}>
        <Grid item xs={3}>
          <FormControl className="filter__selectForm" variant="">
            <InputLabel  htmlFor="outlined-age-native-simple">Countries</InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3} >
          <FormControl className="filter__selectForm" variant="">
            <InputLabel  htmlFor="outlined-age-native-simple">Cities</InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3} >
          <FormControl className="filter__selectForm" variant="">
            <InputLabel  htmlFor="outlined-age-native-simple">Tours</InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={3} >
        <Button color="primary" >Search</Button>
        </Grid>

       </Grid>
        
      </div>
    </div>
  );
}

export default Filter;
