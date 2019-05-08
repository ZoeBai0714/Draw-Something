import React from 'react'
import '../Home.css'
import {Link} from 'react-router-dom'
 


export default class Home extends React.Component {
    render() {
      return(
        <body>
          <div class="first-pic">
            <div class="ptext">
              <span class="border">
                <Link to = '/draw'>Draw!</Link>
              </span>
            </div>
          </div>

          <section class="section section-light">
            <h2>About</h2>
            <p className = "section-text">
              This project is brought to you by Jack Rotta, Zoe Bai, and Robert Vidal. The goal in our Mod 4 project at Flatiron was to create a sketching 
              app(Draw!) that is as real-time as possible where users could collaborate with their friends/coworkers in an easy way. We really pushed ourselves 
              to finish this project in a little over a week, hope you enjoy it!
            </p>
          </section>

          <div class="pimg2">
            <div class="ptext">
              <span class="border">
                Collaboration
              </span>
            </div>
          </div>

          <section class="section section-dark">
            
            <p className = "section-text">
                Work together with friends and coworkers to draw out your ideas for your next big pitch or website! <br /> We offer a variety of styles and brush widths
                to hopefully accomplish any of your needs!
            </p>
          </section>

          <div class="pimg3">
            <div class="ptext">
              <span class="border">
              Doodle
              </span>
            </div>
          </div>

          <section class="section section-dark">
            <p className = "section-text">
                And if you would like to, use Draw! to doodle out your thoughts, feelings, or just randomly sketch your hours away! <br />
                Or even use this as a drawing charades game!
            </p>
          </section>

          <div class="first-pic">
            <div class="ptext">
            </div>
          </div>
        </body>



      )
    }
}