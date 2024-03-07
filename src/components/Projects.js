import React from 'react';
// If your image is within the src folder, import it like this:
import projectImage from '../Photo/Screenshot 2024-03-04 125809.png'; // Adjust the path as necessary

export default function Projects() {
  return (
    <div>
      <section className="resume-section" id="projects">
        <div className="resume-section-content projects">
          <h2 className="mb-5">Projects</h2> {/* Adjusted margin for spacing */}
          <div className="subheading mb-3">Frontend projects</div> {/* Adjusted margin for spacing */}
          <div className="d-flex flex-wrap justify-content-center">
            <div className="card mx-8 mb-12" style={{ width: "36rem" }}> {/* Adjusted margins and width for better alignment and responsiveness */}
              <img className="card-img-top" src={projectImage} alt="Digital Locker Management" height={"120%"}/>
              <div className="card-body">
                <h5 className="card-title">Digital Locker Management</h5>
                <p className="card-text">In this project, we aim to develop a Locker Management System website. The core concept behind this project is to offer locker facilities to consumers in highly congested marketplaces. This service is designed to provide convenience by allowing customers to securely store their belongings in our lockers while they engage in activities where it's impractical to carry items with them. Our primary goal is to deliver customer service in a manner that makes the users feel a personal ownership and trust towards the lockers and services we provide. To achieve this, we are utilizing a diverse range of technologies including HTML, CSS, JavaScript, Bootstrap 5 for front-end development, and Spring Boot for the backend, integrating RESTful APIs and JWT for secure authentication and authorization processes.</p>
                <a href="https://github.com/Arman-Pandey/ApnaLockers.git" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Github</a>
                <a href="https://arman-pandey.github.io/ApnaLocker.github.io/" target="_blank" className="btn btn-secondary">Demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
