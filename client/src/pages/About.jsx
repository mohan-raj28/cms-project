import React from "react";

const About = () => (
  <div className="about-page" style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
    <h1>About Our Project</h1>
    <p>
      Welcome to our CMS Project! This application is designed to provide a modern, user-friendly content management system for teams and individuals. Our goal is to make content creation, editing, and publishing as seamless as possible.
    </p>
    <h2>Our Team</h2>
    <ul>
      <li><strong>Jane Doe</strong> – Project Manager</li>
      <li><strong>John Smith</strong> – Lead Developer</li>
      <li><strong>Emily Johnson</strong> – UI/UX Designer</li>
      <li><strong>Michael Brown</strong> – QA Engineer</li>
    </ul>
    <h2>Project Features</h2>
    <ul>
      <li>Easy-to-use content editor</li>
      <li>Real-time collaboration</li>
      <li>Customizable themes</li>
      <li>Secure user authentication</li>
      <li>Responsive design</li>
    </ul>
    <p>
      We are passionate about building tools that empower users to manage their content efficiently. Thank you for visiting our About page!
    </p>
  </div>
);

export default About;
