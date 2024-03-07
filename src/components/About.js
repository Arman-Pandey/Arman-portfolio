import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram, faHackerrank } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <section className="resume-section" id="about">
            <div className="resume-section-content">
                <h1 className="mb-0">
                    Arman <span className="text-primary">Pandey</span>
                </h1>
                <div className="subheading mb-5">Software Developer - Pune</div>
                <p className="lead mb-5">
                Hello, I'm Arman Pandey, a vibrant professional from Satna, embarking on an exciting journey from the world of Civil Engineering to the dynamic landscape of Software Development. After completing my Master's in Construction Techniques and Management and a Bachelor of Engineering from RGPV University, Bhopal, my curiosity and passion for technology led me to pivot towards the IT industry. I've recently completed a Post-Graduation Diploma in Advanced Computing from CDAC, where I honed my skills in programming languages such as C, C++, Java, and HTML.
                </p>
                <div className="social-icons">
                    <a className="social-icon" href="https://www.linkedin.com/in/arman-pandey-537b22207/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a className="social-icon" href="https://github.com/Arman-Pandey/">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a className="social-icon" href="https://twitter.com/13Arman1999">
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a className="social-icon" href="https://www.hackerrank.com/profile/shivamarman1999">
                        <FontAwesomeIcon icon={ faHackerrank} />
                    </a>
                    <a className="social-icon" href="https://www.instagram.com/arman_pandey_iggg?igsh=NThtaTBmM2F6cmM2">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </div>
        </section>
    );
}
