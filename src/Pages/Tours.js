import { Checkbox, Divider, FormControl,  FormControlLabel,  Grid,  InputLabel, MenuItem, Select, Slider, Typography } from "@material-ui/core";
import React from "react";
import "./Tours.css";
import CardDetails from "./Component/CardDetails";

function Tours() {

  return (
    <div className="tours">
      <Grid container direction="column" style={{padding: 7, maxWidth:200,  }}  spacing={1}  >
      <Typography variant="h6" component="h6" style={{margin:4,fontWeight:600}} gutterBottom>
          Filter By
        </Typography>
        <Divider style={{margin: 6}} />

        <Grid item  > 
          <FormControl className="tours__selectForm" variant="">
            <InputLabel htmlFor="outlined-age-native-simple">Countries</InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          </Grid>

        <Grid item >
          <FormControl className="tours__selectForm" variant="">
            <InputLabel htmlFor="outlined-age-native-simple">Cities</InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        

        <Grid item >
          <FormControl className="tours__selectForm" variant="">
            <InputLabel htmlFor="outlined-age-native-simple">Tours date</InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        

        <Grid item >
          <FormControl className="tours__selectForm" variant="">
            <InputLabel htmlFor="outlined-age-native-simple">Room</InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item >
          <FormControl className="tours__selectForm" variant="">
            <InputLabel  htmlFor="outlined-age-native-simple">Adults</InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item >
          <FormControl className="tours__selectForm" variant="">
            <InputLabel htmlFor="outlined-age-native-simple"> Children</InputLabel>
            <Select labelId="demo-simple-select-helper-label">
              <MenuItem value={""}></MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Divider style={{margin: 6}} />

        {/* slider */}
        <Typography variant="h6" component="h6" style={{margin:4,fontWeight:600}} gutterBottom>
          Price range
        </Typography>
        <Divider style={{margin: 6}} />
        <Grid item  >
        <Slider style={{margin: 7 ,}}  />
        </Grid>
        <Divider style={{margin: 6}} />


        {/*checkbox  */}
        <Typography variant="h6" component="h6" style={{margin:4,fontWeight:600}} gutterBottom>
          Property Type
        </Typography>
        <Divider style={{margin: 6}} />
        <Grid item > 
        <FormControlLabel style={{  }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Hotels"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Beach"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{    }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Vilas"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Resorts"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Vaction Homes"
      />
        </Grid>

        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Guesthouses"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Ocean view"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Hostels"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Private beach area"
      />
        </Grid>


        <Divider style={{margin: 6}} />

        {/* Star rating */}
        <Typography variant="h6" component="h6" style={{margin:4,fontWeight:600}} gutterBottom>
          Star rating
        </Typography>

        <Divider style={{margin: 6}} />

        <Grid item > 
        <FormControlLabel style={{  }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="2 stars"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="3 stars"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{    }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="4 stars"
      />
        </Grid>

        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="unrated"
      />
      </Grid>
      <Divider style={{margin: 6}} />

      {/* Fun Things to do */}
      <Typography variant="h6" component="h6" style={{margin:4,fontWeight:600}} gutterBottom>
          Fun Things 
        </Typography>
        <Divider style={{margin: 6}} />
        <Grid item > 
        <FormControlLabel style={{  }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Bicycle rental"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Hiking"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{    }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Nightclub"
      />
        </Grid>

        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Karaoke"
      />
      </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Fitness center"
      />
      </Grid>
      <Divider style={{margin: 6}} />
       
       {/* Facilities */}
       <Typography variant="h6" component="h6" style={{margin:4,fontWeight:600}} gutterBottom>
          Facilities
        </Typography>
        <Divider style={{margin: 6}} />
        <Grid item > 
        <FormControlLabel style={{  }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Parking"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Restaurant"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{    }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Pet friendly"
      />
        </Grid>

        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Room service"
      />
      </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Bar"
      />
      </Grid>

      <Divider style={{margin: 6}} />

       {/* Room Facilities */}
       <Typography variant="h6" component="h6" style={{margin:4,fontWeight:600}} gutterBottom>
       Room Facilities
        </Typography>
        <Divider style={{margin: 6}} />

        <Grid item > 
        <FormControlLabel style={{  }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Kitchen/Kitchenette"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Private bathroom"
      />
        </Grid>
        <Grid item > 
        <FormControlLabel style={{    }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Air conditioning"
      />
        </Grid>

        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Spa tub"
      />
      </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Bathtub"
      />
      </Grid>
      
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Terrace"
      />
      </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Balcony"
      />
      </Grid>
        <Grid item > 
        <FormControlLabel style={{   }}
        control={
          <Checkbox
            // checked={state.checkedB}
            // onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Coffee machine"
      />
      </Grid>
    </Grid>



      <div className="tours__right">
        {/* <h3>Result: 12 Tours</h3> */}
       <div className="tours__rightList" >
         <Grid container >
        <Grid item >
          <CardDetails />
        </Grid>

        <Grid item >
          <CardDetails />
        </Grid>

        <Grid item>
          <CardDetails />
        </Grid>

        <Grid item>
          <CardDetails />
        </Grid>
       
        
        <Grid item >
          <CardDetails />
        </Grid>

        <Grid item>
          <CardDetails />
        </Grid>

        <Grid  item>
          <CardDetails />
        </Grid>

        <Grid item >
          <CardDetails />
        </Grid>

        <Grid item >
          <CardDetails />
        </Grid>

        <Grid item>
          <CardDetails />
        </Grid>

        <Grid item>
          <CardDetails />
        </Grid>
       
        
        <Grid item >
          <CardDetails />
        </Grid>

        <Grid item>
          <CardDetails />
        </Grid>

        <Grid  item>
          <CardDetails />
        </Grid>
        <Grid item >
          <CardDetails />
        </Grid>

        <Grid item >
          <CardDetails />
        </Grid>

        <Grid item>
          <CardDetails />
        </Grid>

        <Grid item>
          <CardDetails />
        </Grid>
       
        
        <Grid item >
          <CardDetails />
        </Grid>

        <Grid item>
          <CardDetails />
        </Grid>

        <Grid  item>
          <CardDetails />
        </Grid>

        </Grid >
        </div>
       

      </div>
    </div>
  );
}

export default Tours;
