import React from 'react';
import Teamcard from './Team_card'; // Import the Card component
import './OurTeam.css'; // Import your CSS file
function OurTeam() {
  const teamData = [
    {
      id: 1,
      name: 'Team Member 1',
      description: 'Description for Team Member 1',
      image: 'image1.jpg', // Replace with the path to the image
    },
    {
      id: 2,
      name: 'Team Member 2',
      description: 'Description for Team Member 2',
      image: 'image2.jpg', // Replace with the path to the image
    },
    {
      id: 3,
      name: 'Team Member 3',
      description: 'Description for Team Member 3',
      image: 'image3.jpg', // Replace with the path to the image
    },
    {
      id: 4,
      name: 'Team Member 4',
      description: 'Description for Team Member 4',
      image: 'image4.jpg', // Replace with the path to the image
    },
    {
      id: 5,
      name: 'Team Member 5',
      description: 'Description for Team Member 5',
      image: 'image5.jpg', // Replace with the path to the image
    },
  ];

  return (
    <section>
    <div className="our-team">
      <h1>Our Team</h1>
      <div className="team-cards">
        {teamData.map((teamMember) => (
          <Teamcard
            key={teamMember.id}
            name={teamMember.name}
            description={teamMember.description}
            image={teamMember.image}
          />
        ))}
      </div>
    </div>
    </section>
  );
}

export default OurTeam;
