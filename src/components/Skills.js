import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faReact, faNodeJs, faNpm, faJava, faCss3, faJs, faBootstrap, faNode, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Skills() {
    return (
      <div>
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">
              Programming Languages &amp; Tools
            </div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item ml-2 mr-2"><FontAwesomeIcon icon={faJava} size="2x" /></li>
              <li className="list-inline-item ml-2 mr-2"><FontAwesomeIcon icon={faHtml5} size="2x" /></li>
              <li className="list-inline-item ml-2 mr-2"><FontAwesomeIcon icon={faCss3} size="2x" /></li>
              <li className="list-inline-item ml-2 mr-2"><FontAwesomeIcon icon={faJs} size="2x" /></li>
              <li className="list-inline-item ml-2 mr-2"><FontAwesomeIcon icon={faBootstrap} size="2x" /></li>
              <li className="list-inline-item ml-2 mr-2"><FontAwesomeIcon icon={faReact} size="2x" /></li>
              <li className="list-inline-item ml-2 mr-2"><FontAwesomeIcon icon={faNode} size="2x" /></li>
              <li className="list-inline-item ml-2 mr-2"><FontAwesomeIcon icon={faNodeJs} size="2x" /></li>
              <li className="list-inline-item ml-2 mr-2"><FontAwesomeIcon icon={faNpm} size="2x" /></li>
              <li className="list-inline-item ml-2 mr-2"><FontAwesomeIcon icon={faGithub} size="2x" /></li>
            </ul> 
          </div>
        </section>
        <hr className="m-0" />
      </div>
    );
}
