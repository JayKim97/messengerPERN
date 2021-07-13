import { makeStyles } from "@material-ui/core/styles";
import bgImage from'../../assets/images/bg-img.png'


export default makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  applybg:{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover'
  },
  gradients:{
    background: 'linear-gradient(to top, #3A8DFF ,#86B9FF)',
    opacity: "0.85",
    height: '100%',
    justifyItems: 'center',
    display: 'grid',
    color:'white'
  },
  centerText:{
    padding: "5%",
    marginTop: "50%",
    fontSize:"2.5vw"
  },
  logo:{
    paddingBottom:"10%",
    height: "7vw",
    width:"7vw"
  },
  w_80:{
    width:"85%",
    marginBottom:"10%"
  },
  w_100:{
    width: "100%"
  },
  right:{
    justifyContent:"right",
    alignItems: "center",
    padding:"6% 0% 10% 0%"
  },
  headingText:{
    paddingLeft:"7.5%",
    fontSize: "4vh",
    fontWeight: 800,
    margin:"9% auto"
  },
  buttonSwitch:{
    boxShadow: "1px 1px 0px #9CADC8",
    color: "#3A8DFF",
    margin:"0% 0% 0% 5%",
    width:"30%",
    fontSize:"2vh",
    height:"8vh"
  },
  buttonSubmit:{
    background: "#3A8DFF",
    color: "#ffffff",
    width: "30%",
    margin:"5% 5% 0% 5%",
    fontSize:"2vh",
    height:"8vh"
  },
  greyText: {color: "#9CADC8"},
  resize:{
    fontSize:50
  },

}));
