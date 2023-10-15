// OurTeam.js

import React from 'react';
import Teamcard from './Team_card';
import './OurTeam.css';
import Himanshu from './media/Himanshu.png';
import Tanu from './media/Tanu.png';
import Kajal from './media/Kajal.png';
import Shivam from './media/Shivam.png';
import Swapnil from './media/Swapnil.png';
import Tanisha from './media/Tanisha.png';
import Subham from './media/Shubham.png';
import Gaurav from './media/Gaurav.png';

const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
  fontSize:'4vw',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};

function OurTeam() {
  const teamHeadData = [
    {
      id: 1,
      name: 'Kajal Singh',
      subtitle:'Team Lead',
      image: Kajal,
      gmaillink: 'Kajalsinghmbd2001@gmail.com',
      inlink: 'https://www.linkedin.com/in/kajal-singh-164242213',
    },
    {
      id: 2,
      name: 'Subham Kumar',
      subtitle:'Team Lead',
      image: Subham,
      gmaillink: '2002subhamkumar@gmail.com',
      inlink: 'https://www.linkedin.com/in/subham-kumar-054221215/',
    },
    {
      id: 3,
      name: 'Shivam Ratne',
      subtitle:'Associate Team Lead',
      image: Shivam,
      gmaillink: 'shivamratne999@gmail.com',
      inlink: 'http://www.linkedin.com/in/shivamratne',
    }
  ];
  const teamData = [
    {
      id: 1,
      name: 'Tanisha Panda',
      subtitle:'Associate Member',
      image: Tanisha,
      gmaillink: 'kaitanisha2601@gmail.com',
      inlink: 'https://www.linkedin.com/in/tanisha-panda-0a8131205',
    },
    {
      id: 2,
      name: 'Gaurav Chanchal',
      subtitle:'Associate Member',
      image: Gaurav,
      gmaillink: 'gauravchanchal2003@gmail.com',
      inlink: 'https://www.linkedin.com/in/gaurav-chanchal',
    },
    {
      id: 3,
      name: 'Tanu Sharma',
      subtitle:'Associate Member',
      image: Tanu,
      gmaillink: 'tanusharma0801@gmail.com',
      inlink: 'https://www.linkedin.com/in/tanu-sharma-1395b1224/',
    },
    {
      id: 4,
      name: 'Himanshu Singh',
      subtitle:'Associate Member',
      image: Himanshu,
      gmaillink: 'himaanshsinghh@gmail.com',
      inlink: 'https://www.linkedin.com/in/himanshu-singh-360b9321a',
    },
    {
      id: 5,
      name: 'Swapnil Shekhar',
      subtitle:'Associate Member',
      image: Swapnil,
      gmaillink: 'swapnil7924@gmail.com',
      inlink: 'https://www.linkedin.com/in/swapnil-shekhar7',
    },
  ];
  return (
    <section>
      <div className="our-team">
        <h1 style={style1}>Client and Strategy Team</h1>
        <div style={style2} className="team-head-cards">
        {teamHeadData.map((teamMember) => (
          <Teamcard
            key={teamMember.id}
            name={teamMember.name}
            subtitle={teamMember.subtitle}
            image={teamMember.image}
            gmaillink={teamMember.gmaillink}
            inlink={teamMember.inlink}
          />
        ))}
      </div>
      <div style={style2} className="team-cards">
        {teamData.map((teamMember) => (
          <Teamcard
            key={teamMember.id}
            name={teamMember.name}
            subtitle={teamMember.subtitle}
            image={teamMember.image}
            gmaillink={teamMember.gmaillink}
            inlink={teamMember.inlink}
          />
        ))}
      </div>
      </div>
    </section>
  );
}

export default OurTeam;
