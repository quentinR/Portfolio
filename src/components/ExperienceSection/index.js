import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import baublebarLogo from '../../assets/images/experience/baublebar.png'
import hibbettLogo from '../../assets/images/experience/hibbettsports.png'
import mybleeLogo from '../../assets/images/experience/myblee.png'
import saksLogo from '../../assets/images/experience/saksfifthavenue.png'
import stubhubLogo from '../../assets/images/experience/stubhub.png'
import yoshiLogo from '../../assets/images/experience/yoshi.png'

class ExperienceSection extends React.Component {
  render() {
    return (
      <Section title="Experience">
        <div className="row">
          <ExperienceUnit
            logo={stubhubLogo}
            colour='#FFFFFF'
            title='StubHub'
            link='https://mashable.com/2018/01/18/stubhub-augmented-reality-app-super-bowl/#NVD0pMe8ISqu'
            subtitle='Built ARKit Experience for Super Bowl LII to give ticket-buyers a way to visualize their
            seats and the area surrounding the stadium.'
          />
          <ExperienceUnit
            logo={saksLogo}
            colour='#FFFFFF'
            title='Saks Fifth Avenue'
            link='https://itunes.apple.com/us/app/saks-fifth-avenue/id491507258?mt=8'
            subtitle='Rebuilt app from the ground up using Swift and developed iMessage application.'
          />
          <ExperienceUnit
            logo={yoshiLogo}
            colour='#FFFFFF'
            title='Yoshi'
            link='https://github.com/prolificinteractive/Yoshi'
            subtitle='Developed and maintained an Open Source debugging tool for iOS apps.'
          />
          <ExperienceUnit
            logo={baublebarLogo}
            colour='#FFFFFF'
            title='BaubleBar'
            link='http://www.tylershick.com/baublebar'
            subtitle='Built core functionality as well as 3D Touch and Apple Pay features for 
            eCommerce application with innovative visual product browsing. '
          />
          <ExperienceUnit
            logo={hibbettLogo}
            colour='#FFFFFF'
            title='Hibbett Sports'
            link='https://itunes.apple.com/us/app/hibbett-sports/id1325232713?mt=8'
            subtitle='Working on iOS app and Typescript backend with for app with eCommerce and 
            high-demand sneaker raffles.'
          />
          <ExperienceUnit
            logo={mybleeLogo}
            colour='#FFFFFF'
            title='myBlee Math'
            link='https://itunes.apple.com/us/app/myblee-math/id485439231?mt=8'
            subtitle='Built over 20 levels (sets of lessons and exercises),
            localized in 4 languages, for iPad application designed to teach math to kids.'
          />
        </div>
      </Section>
    )
  }
}

export default ExperienceSection
