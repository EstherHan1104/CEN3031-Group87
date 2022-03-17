import React, { Component } from 'react'
import '../../css/About.css';
import LoginNavbar from '../subcomponents/LoginNavbar';

export default class About extends Component {
  render() {
    return (
      <div className="main-about">
        <LoginNavbar/>
        <div className="bg-dark">
          <div className="about">
            <h1 style={{textAlign: 'center', color: 'white'}}>About</h1>
            <br/>
            <p style={{fontSize: '25px', color: 'white'}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a felis suscipit, varius augue 
            id, auctor justo. Nam cursus ullamcorper pretium. Donec interdum tempor est aliquam facilisis. 
            Sed pretium auctor nunc, vel tristique dolor viverra id. Aliquam sodales mattis tortor sed porta. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam quis turpis eu nibh 
            scelerisque scelerisque et id magna. Ut in turpis tellus. In eget dapibus felis, eget consequat 
            velit. Suspendisse et pretium nulla. Aliquam tempus tempus mi molestie rhoncus. Integer blandit 
            lectus nibh, sed finibus odio rutrum pharetra. Phasellus urna risus, euismod in mollis in, 
            vehicula ut libero. Quisque in aliquam diam.
            </p>
            <br/>
            <p style={{fontSize: '25px', color: 'white'}}>
              Nam dapibus mauris tristique volutpat vehicula. Sed finibus, lorem a varius 
            pellentesque, mauris dolor blandit lacus, a dictum justo neque non ante. Donec lacinia gravida 
            urna, a consectetur lorem porta sed. Phasellus nunc dui, tincidunt vel ullamcorper sed, 
            tincidunt at ante. Nullam pellentesque justo massa, id pulvinar dolor sodales eget. 
            In nulla tellus, mollis et iaculis ut, hendrerit non sem. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Maecenas dui massa, cursus in lorem et, cursus pulvinar augue. 
            Pellentesque suscipit eleifend ligula, ut facilisis sapien molestie in. In ante odio, 
            eleifend eu porttitor ac, semper vitae lectus.
            </p>        
          </div>
        </div>
      </div>
    )
  }
}
