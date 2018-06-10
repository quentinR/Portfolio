import React from 'react'
import ExperienceSection from '../components/ExperienceSection'
import About from '../components/Sidebar/About'
import Links from '../components/Sidebar/Links'

import './style.scss'

const IndexPage = () => (
    <div className="index">
      <div className="main">
        <h5>
          Hi, I'm <span className="bold">Quentin Ribierre</span>
        </h5>

        <h3 className="bold">
          iOS engineer building innovative and well-received apps 
          for brands like StubHub and Saks Fifth Avenue.
        </h3>

        <ExperienceSection />
      </div>

      <div className="aside">
        <div className="top">
          <About />
        </div>
        <div className="bottom">
          <Links />
        </div>
      </div>
    </div>
)

export default IndexPage
