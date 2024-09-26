import React from 'react';
import './Resume.css';

function Resume() {
    return (
        <div>
            <div className="container-resume">
                <h2 className='heading-text'><span className="text-danger">My</span> Resume</h2>
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <div className="mt-2">
                                <h4>Freelance</h4>
                                <span className="line"></span>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">June 2024 - Present</h6>
                                <h3>VisionaryArt Technologies Pvt Ltd, Virtual</h3>
                                <p className="subtitle">
                                    - Designed and developed responsive web applications using ReactJS.
                                    <br />
                                    - Collaborated with cross-functional teams to introduce and refine new features.
                                    <br />
                                    - Maintained high standards for performance, security, and scalability.
                                    <br />
                                    - Conducted thorough testing and debugging to enhance user experience and application stability.
                                    <br />
                                    - Created a fully functional e-commerce platform utilizing the MERN stack, facilitating seamless product &nbsp;&nbsp;&nbsp;transactions.
                                </p>
                                <div className="btn-group">
                                    <button className="btn btn-primary" onClick={() => window.open('https://www.visionaryarttech.com/', '_blank')}>View Project</button>
                                    {/* <button className="btn btn-secondary" onClick={() => window.open('https://github.com/notfound07/VAT', '_blank')}>View Code</button> */}
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="card-header">
                            <div className="mt-2">
                                <h4>Projects</h4>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <h6 className="title text-danger">Dec 2023 - Apr 2024</h6>
                            <h3>ReserveIt</h3>
                            <p className="subtitle">- Developed an online platform for restaurant reservations, enabling users to efficiently search foravailable &nbsp;&nbsp;&nbsp;tables, view restaurant details, and seamlessly make reservations online.
                                <br />
                                - Implemented user authentication and profilecmanagement for enhanced user experience.
                                <br />
                                - Engineered real-time table availability and booking confirmation feature for prompt and efficient &nbsp;&nbsp;&nbsp;reservation process.
                                <br />
                                - Integrated the system with restaurant management systems for seamless booking updates.
                                <br />
                                - Utilized HTML, CSS, JavaScript, and React.js for frontend development, and Node.js, Express.js, and &nbsp;&nbsp;&nbsp;MongoDB for backend operations.
                                <br />
                                - Ensured responsive design for optimal user experience across mobile and desktop devices.
                                <br />
                                - Managed version control using Git for efficient collaboration and tracking of project progress.</p>
                            <div className="btn-group">
                                {/* <button className="btn btn-primary" onClick={() => window.open('https://github.com/notfound07/ReserveIt', '_blank')}>View Project</button> */}
                                <button className="btn btn-secondary" onClick={() => window.open('https://github.com/notfound07/ReserveIt', '_blank')}>View Code</button>
                            </div>
                            <hr />
                            <h6 className="title text-danger">Nov 2021 - Mar 2022</h6>
                            <h3>Trigger</h3>
                            <p className="subtitle">- Developed an Android application using Python with the Kivy and KivyMD frameworks.
                                <br />
                                - Implemented functionalities for retrieving phone number information via USSD codes, determining the &nbsp;&nbsp;&nbsp;phone's location, and downloading songs from YouTube links.
                                <br />
                                - Utilized SQLite for database management and Buildozer for packaging the app into an APK.
                                <br />
                                - Key Features: Phone number information retrieval through USSD codes. Location services to provide &nbsp;&nbsp;&nbsp;geographical data. Integration with YouTube for downloading songs from provided links.</p>
                            <div className="btn-group">
                                {/* <button className="btn btn-primary" onClick={() => window.open('https://github.com/notfound07/Trigger'', '_blank')}>View Project</button> */}
                                <button className="btn btn-secondary" onClick={() => window.open('https://github.com/notfound07/Trigger', '_blank')}>View Code</button>
                            </div>
                            <hr />
                            <h6 className="title text-danger">Aug 2024 - Sept 2024</h6>
                            <h3>Developer Portfolio</h3>
                            <p className="subtitle">
                                - Built a dynamic personal portfolio website using ReactJS.
                                <br />
                                - Ensured cross-device compatibility with a fully responsive design.
                                <br />
                                - Integrated interactive elements to enhance the user interface.
                                <br />
                                - Managed version control and deployment using GitHub.
                                <br />
                                - Professionally presented projects, technical skills, and achievements.
                            </p>
                            <div className="btn-group">
                                <button className="btn btn-primary" onClick={() => window.open('https://notfound07.github.io/DevPortfolio/', '_blank')}>View Project</button>
                                <button className="btn btn-secondary" onClick={() => window.open('https://github.com/notfound07/DevPortfolio', '_blank')}>View Code</button>
                            </div>
                            <hr />
                            <h6 className="title text-danger">Aug 2024 in 1 Day</h6>
                            <h3>Simple Portfolio</h3>
                            <p className="subtitle">
                                - Developed a personal portfolio website using ReactJS.
                                <br />
                                - Implemented responsive design to ensure compatibility across various devices.
                                <br />
                                - Integrated interactive components to enhance user experience.
                                <br />
                                - Utilized GitHub for version control and deployment.
                                <br />
                                - Showcased projects, skills, and achievements in a professional manner.
                            </p>
                            <div className="btn-group">
                                <button className="btn btn-primary" onClick={() => window.open('https://notfound07.github.io/portfolio/', '_blank')}>View Project</button>
                                <button className="btn btn-secondary" onClick={() => window.open('https://github.com/notfound07/portfolio', '_blank')}>View Code</button>
                            </div>
                        </div>
                    </div>
                    <div className="card-column">
                        <div className="card">
                            <div className="card-header">
                                <div className="mt-2">
                                    <h4>Education</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6 className="title text-danger">2022 - Present</h6>
                                <p>Master's Degree in Computer Application</p>
                                <p className="subtitle">Enrolled in the Master's in Computer Application (MCA) program at Indira Gandhi National Open University (IGNOU). This program provides comprehensive training in computer science and software development, blending practical experience with theoretical knowledge. Focused on current technologies, it equips graduates with the skills required to multiple roles in today's digital landscape.
                                </p>
                                <hr />
                                <h6 className="title text-danger">2019 - 2022</h6>
                                <p>Bachelor's Degree in Computer Application</p>
                                <p className="subtitle">Completed the Bachelor's in Computer Application (BCA) program at Commit Career Academy, affiliated with Guru Gobind Singh Indraprastha University. This program provided a solid foundation in computer science and software development, focusing on practical skills and theoretical knowledge necessary for the IT industry.</p>
                                <hr />
                                <h6 className="title text-danger">2017 - 2018</h6>
                                <p>High School Degree</p>
                                <p className="subtitle">Completed 12th grade with a focus on Commerce and Mathematics at a Government School. This curriculum provided a strong foundation in business studies, accounting, and advanced mathematical concepts, preparing me for further education in the field of computer applications.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Skills</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6>HTML &amp; CSS</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>JavaScript</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '40%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>React Js</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Node Js</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Mongo DB</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '35%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Express</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '30%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Python</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '60%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Linux</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '50%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <div className="pull-left">
                                    <h4 className="mt-2">Languages</h4>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="card-body">
                                <h6>English</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '60%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <h6>Hindi</h6>
                                <div className="progress">
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hire-me">
                <div className="container-hire">
                    <h2 className="text-center">I'm available for freelance work and jobs</h2>
                    <button className="btn-hire" onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=amanbhatt199916@gmail.com&su=Freelance%20or%20Job%20Hiring%20Inquiry', '_blank')} >Hire me</button>
                </div>
            </div>
        </div>
    );
}

export default Resume;
