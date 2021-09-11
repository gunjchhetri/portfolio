import React from 'react'
import '../styles/projects.scss';
import { useHistory } from "react-router-dom";
export default function Projects(props) {
    let history = useHistory();
    let gotoContact=()=>{
      history.push('/contact');
    }

    return (
        <div>
            <div class='project-header main-section-header'>
                LATEST PROJECTS
       </div>
            <div class='project'>


                <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='row  project-container'>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-4 project-timeline'>
                        <div class='project-company'>
                            Barclays Technology Center India
                        </div>
                        <div class='project-date'>
                            Dec-2016 - Till Date
                        </div>

                    </div>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-8 '>
                        <div class='header'>
                            <div> SPECS</div>


                        </div>

                        <div class='project-description content-text'>
                            SPECS provides a platform for Barclays' clients and traders, where they can easily view, verify and request
                            changes to their order handling settings with the Barclays’s Equities Business and helps
                            to create clearer accountability in the management of client’s orders. With SPECS, clients can view,
                            attest to or request changes to their specific profile directly in the online portal, with only a few clicks.
                            The portal will consolidate notifications, announcements of product updates, and alerts on any changes to their
                            settings. Clients can also request a printable report of their profile settings.

                        </div>
                    </div>

                </div>

                <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='row project-container'>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-4 project-timeline'>
                        <div class='project-company'>
                            Tata Consultancy Services
                        </div>
                        <div class='project-date'>
                            June, 2015 - Dec, 2016
                        </div>

                    </div>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-8 '>
                        <div class='header'>
                            <div> CADXXX</div>


                        </div>

                        <div class='project-description content-text'>
                            This application is mainly design for plant engineers where they can provide their input for
                            any operation like rolling, extrusion, casting etc and these inputs are then validated by a python
                            library and provide them the output on the basis of their input. This application helps them to reduce the
                            risk that may arise in the plant because of wrong
                            inputs.Therefore engineers can validate their input before implementing them in real scenario.

                        </div>
                    </div>

                </div>

                <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='row project-container'>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-4 project-timeline'>
                        <div class='project-company'>
                            Tata Consultancy Services
                        </div>
                        <div class='project-date'>
                            Jan, 2015 - June, 2015
                        </div>

                    </div>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-8 '>
                        <div class='header'>
                            <div> PEHSR </div>


                        </div>

                        <div class='project-description content-text'>
                            The PEHSR is a tool that facilitates a proactive approach to ensuring all safety, industrial hygiene,
                            and environmental risks are identified, evaluated, and controlled prior to beginning work or transferring
                            technology to ATC’s customers. The PEHSR must be considered against all projects and may be required to
                            varying degrees depending on the nature of each project; this is decided through a few questions asked
                            in the initial PEHSR record which is created upon entering the application.

                        </div>
                    </div>

                </div>

                <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='row project-container'>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-4 project-timeline'>
                        <div class='project-company'>
                            Tata Consultancy Services
                        </div>
                        <div class='project-date'>
                            Feb, 2014 - Jan, 2015
                        </div>

                    </div>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-8 '>
                        <div class='header'>
                            <div> eContract </div>


                        </div>

                        <div class='project-description content-text'>
                            eContract helps users to raise the request for the new project in the department. Whenever a new
                            request is raised user needs to provide all the security related information and the funding details of
                            the project. The request then goes through the series of approval process for the final approval.

                        </div>
                    </div>

                </div>

                <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='row project-container'>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-4 project-timeline'>
                        <div class='project-company'>
                            Tata Consultancy Services
                        </div>
                        <div class='project-date'>
                            June, 2013 - Feb, 2014
                        </div>

                    </div>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-8 '>
                        <div class='header'>
                            <div> iReport </div>
                        </div>

                        <div class='project-description content-text'>
                            The manual process of creating report and following tedious approval process from various
                            departments was replaced with this new online system. This system also brings the different format
                            of reports like (docx, doc,pptx , pdf ,text, etc) to common platform where users are provided with
                            some standard templates for report creation.

                        </div>
                    </div>

                </div>
                <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='row project-container'>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-4 project-timeline'>
                        <div class='project-company'>
                            Tata Consultancy Services
                        </div>
                        <div class='project-date'>
                            June, 2012 - Jan, 2014
                        </div>

                    </div>
                    <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='col-md-8 '>
                        <div class='header'>
                            <div> AARTS </div>
                        </div>

                        <div class='project-description content-text'>
                            The Alcoa Corrective & Preventive Action Tracking System provides easy access
                            to an intuitive system for management of corrective and preventive action requests.
                            It is a multilingual email enabled system, to send reminders at each step of the workflow,
                            so responsible persons do not forget the actions
                            they need to take to prevent a problem from recurring or occurring.

                        </div>
                    </div>

                </div>

                <div  data-aos="fade-up"  data-aos-duration="1000" data-aos-once="true" class='row'>
                    <div class='col-md-6 talk-text'>
                        To see more or discuss possible work let's talk >>

                    </div>
                    <div class='col-md-6'>
                        <div onClick={gotoContact} class='talk-icon'>
                            Lets Talk
                     </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
