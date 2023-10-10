import React from 'react';
import Teamcard from './Team_card'; // Import the Card component
import './OurTeam.css'; // Import your CSS file
const style1 = {
  fontFamily: 'Rokkitt, sans-serif',
};

const style2 = {
  fontFamily: 'IBM Plex Sans, sans-serif',
};
function OurTeam() {
  const teamData = [
    {
      id: 1,
      name: 'Kajal Singh',
      description: 'Description for Team Member 1',
      image: 'image1.jpg', // Replace with the path to the image
      link:'https://www.linkedin.com/in/kajal-singh-164242213'
    },
    {
      id: 2,
      name: 'Subham Kumar',
      description: 'Description for Team Member 2',
      image: 'image2.jpg', // Replace with the path to the image
      link:'https://www.linkedin.com/in/subham-kumar-054221215/'
    },
    {
      id: 3,
      name: 'Shivam Ratne',
      description: 'Description for Team Member 3',
      image: 'image3.jpg', // Replace with the path to the image
      link:'http://www.linkedin.com/in/shivamratne'
    },
    {
      id: 4,
      name: 'Tanisha Panda',
      description: 'Description for Team Member 4',
      image: 'image4.jpg', // Replace with the path to the image
      link:'https://www.linkedin.com/in/tanisha-panda-0a8131205'
    },
    {
      id: 5,
      name: 'Gaurav Chanchal',
      description: 'Description for Team Member 5',
      image: 'image5.jpg', // Replace with the path to the image
      link:'https://www.linkedin.com/in/gaurav-chanchal'
    },
    {
      id: 6,
      name: 'Tanu Sharma',
      description: 'Description for Team Member 5',
      image: 'image5.jpg', // Replace with the path to the image
      link:'https://www.linkedin.com/in/tanu-sharma-1395b1224/'
    },
    {
      id: 7,
      name: 'Himanshu Singh',
      description: 'Description for Team Member 5',
      image: 'image5.jpg', // Replace with the path to the image
      link:'https://www.linkedin.com/in/himanshu-singh-360b9321a'
    },
    {
      id: 8,
      name: 'Swapnil Shekhar',
      description: 'Description for Team Member 5',
      image: 'image5.jpg', // Replace with the path to the image
      link:'https://www.linkedin.com/in/swapnil-shekhar7'
    },
  ];

  return (
    <section>
    <div className="our-team">
      <h1 style={style1}>Our Team</h1>
      <div style={style2} className="team-cards">
        {teamData.map((teamMember) => (
          <Teamcard
            key={teamMember.id}
            name={teamMember.name}
            description={teamMember.description}
            image={teamMember.image}
            link={teamMember.link}
          />
        ))}
      </div>
    </div>
    </section>
  );
}

export default OurTeam;
