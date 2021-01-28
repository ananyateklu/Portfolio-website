import React, { Component } from "react"
import "./components.css"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';



export default class About extends Component {
  render() {
    return (
      <div id="about"  className="About">
        <h1 className="name"> ANANYA </h1>
        <h1 className="last">TEKLU</h1>
        <div>
          <h3>2735 RICE STREET, ROSEVILLE, MN 55113 · (517) 505-1226 · </h3>
          <h4 className="Email">ANANYA.TEKLU@GMAIL.COM</h4>
          <h5>
            I am experienced in leveraging agile frameworks to provide a robust
            synopsis for high level overviews. Iterative approaches to corporate
            strategy foster collaborative thinking to further the overall value
            proposition.
          </h5>
          <a href="https://github.com/ananyateklu"><div className="Icondiv"><GitHubIcon/></div></a>
          <div className="Icondiv"><LinkedInIcon/></div>
          <div className="Icondiv"><InstagramIcon/></div>
        </div>
       
      </div>
    );
  }
}
