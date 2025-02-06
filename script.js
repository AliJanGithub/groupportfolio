const teamMembers = [
    {
        name: "Ashal Ansari",
        role: "B21110006067",
        image: "images/ashal.jpeg",
        bio: "Passionate about creating beautiful designs that inspire."
      },
    {
      name: "Ali Jan Jameel",
      role: "B21110006012",
      image: "images/alijan.jpeg",
      bio: "Loves coding and building scalable applications"
    },
   
    {
      name: "M.Abdul Ahad Khan",
      role: "B21110006063",
      image: "images/ahad.jpeg",
      bio: "Expert in digital marketing and brand strategy."
    },
    {
      name: "Huzaifa Rehan",
      role: "B21110006045",
      image: "images/member4.jpg",
      bio: "Ensures projects are delivered on time and within budget."
    },
   
    {
      name: "Alishba Nazeer Khan",
      role: "B21110006014",
      image: "images/alishba.jpeg",
      bio: "Focuses on creating intuitive and user-friendly interfaces."
    },
    {
      name: "Sagar Abbasi",
      role: "B21110006111",
      image: "images/sagar.jpeg",
      bio: "Crafts compelling stories that engage audiences."
    },
    {
      name: "Khadija Khan",
      role: "B21110006051",
      image: "images/khadija.jpeg",
      bio: "Ensures the server-side runs smoothly and efficiently."
    },
    {
      name: "Adnan",
      role: "N/A",
      image: "images/member7.jpg",
      bio: "Turns data into actionable insights."
    },
   
    {
      name: "Mahnoor Shehraz",
      role: "N/A",
      image: "images/member9.jpg",
      bio: "Passionate about building responsive and interactive websites."
    },
   
  ];
  
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
const teamGrid = document.getElementById('team-grid');

teamMembers.forEach(member => {
  const memberCard = document.createElement('div');
  memberCard.classList.add('team-member');

  memberCard.innerHTML = `
    <img src="${member.image}" alt="${member.name}">
    <div class="team-member-info">
      <h3>${member.name}</h3>
      <p>${member.role}</p>
      <p>${member.bio}</p>
    </div>
  `;

  teamGrid.appendChild(memberCard);
});