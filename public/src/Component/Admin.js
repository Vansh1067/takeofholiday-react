import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AdminCard from './AdminComponent/AdminCard';
import { Grid } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddIcon from '@material-ui/icons/Add';
import BarChartIcon from '@material-ui/icons/BarChart';
import InfoIcon from '@material-ui/icons/Info';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

function Admin() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar  position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
           Logo
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{color:"#27c5e89e"}}
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
           <ListItem button >
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText >Dashboard</ListItemText>
            </ListItem>
           <ListItem button >
              <ListItemIcon><SupervisorAccountIcon /></ListItemIcon>
              <ListItemText >People </ListItemText>
            </ListItem>
           <ListItem button >
              <ListItemIcon><AddIcon /></ListItemIcon>
              <ListItemText >Add Tour</ListItemText>
            </ListItem>
           <ListItem button >
              <ListItemIcon><BarChartIcon /></ListItemIcon>
              <ListItemText >Analysis</ListItemText>
            </ListItem>
        </List>
        <Divider />
        <List>
          
            <ListItem button >
              <ListItemIcon><InfoIcon /></ListItemIcon>
              <ListItemText >About</ListItemText>
            </ListItem>
         
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container spacing={2} justify="space-between">
            
            <Grid item xs={8} >
            <AdminCard 
              image="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
              imagetitle={ "Taj Mahal"}
              title={"Taj Mahal"}
              content={"The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself."}
            />
            </Grid>

            <Grid item xs={4}>
            <AdminCard 
            image="https://images.unsplash.com/photo-1542467372-47ff6783af3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            imagetitle={ "Taj Mahal"}
            title={"Taj Mahal"}
            content={"The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. "}
            />
            </Grid>

        </Grid>

        <Divider style={{margin:"20px"}}/>

        <Grid container spacing={2} justify="space-between">
            
            <Grid item xs={6} >
            <AdminCard 
              image="https://images.unsplash.com/photo-1558871625-3c478b58c613?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=667&q=80"
              imagetitle={ "Nuwara Eliya, Sri Lanka"}
              title={"Nuwara Eliya, Sri Lanka"}
              content={"The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself."}
            />
            </Grid>

            <Grid item xs={6}>
            <AdminCard 
            image="https://images.unsplash.com/photo-1542467372-47ff6783af3d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            imagetitle={ "Taj Mahal"}
            title={"Taj Mahal"}
            content={"The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra.  It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal; it also houses the tomb of Shah Jahan himself. "}
            />
            </Grid>

        </Grid>


      </main>
    </div>
  );
}
export default Admin
