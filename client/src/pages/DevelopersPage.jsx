import { useState, useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import React from "react";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import NavBar from '../components/NavBar';
import NavCanvas from '../components/NavCanvas';
import Header from '../components/Header';

function DeveloperPage () {
    const { _, setPage } = usePageContext();
    useEffect(() => {
        setPage("Team");
        window.scrollTo(0, 0);
    }, []);

    const page = {
        header: "Meet the Team Behind Jaker™"
    }

    return (
        <>
        <NavBar />
        <Col xs={12} md={9} className='p-0 position-relative'>
            <Header header={page.header}/>
            <Row className='m-0'>
            <Col xs={12} className='position-relative p-0 my-2 z-1'>
                <section className='section-white'>
                    <div className='container px-0'>
                        <div className='row'>

                            <div className='col-md-12 text-center position-relative'>
                                <p className='section-subtitle py-2 fs-4 fw-semibold'>Here's who made it all happen:</p>
                            </div>
                            <div className='col-sm-6 col-md-4 p-3'>
                                <div className='team-item'>

                                    <img src='https://www.flickr.com/photos/200186417@N05/53568734243/in/dateposted-public/' className='dev-img' alt='handsome picture of "The Code Man" Jake Smith' />
                                    <h3>Jake Smith</h3>
                                    <div className='dev-info'>
                                        <p>Back End Extraordinaire</p>
                                        <p>Known simply as "Daddy Code" by dames and dolls alike, this mf spittin' in SQL, Mongo, and GraphQL</p>

                                        <ul className='dev-icons'>

                                            <li><a href='#'>
                                                <i className='THIS IS WHERE GITHBUB ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>
                                            <li><a href='#'>
                                                <i className='THIS IS WHERE LINKEDIN ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>
                                            <li><a href='#'>
                                                <i className='THIS IS WHERE PORTFOLIO ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>

                                        </ul>

                                    </div>


                                </div>
                            </div>

                            <div className='col-sm-6 col-md-4'>
                                <div className='team-item'>

                                    <img src='IMG of Eric' className='dev-img' alt='handsome picture of "The Code Man" Eric' />
                                    <h3>Eric Reyna</h3>
                                    <div className='dev-info'>
                                        <p>Full Stack Developer</p>
                                        <p>Eric's Bio</p>

                                        <ul className='dev-icons'>

                                            <li><a href='#'>
                                                <i className='THIS IS WHERE GITHBUB ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>
                                            <li><a href='#'>
                                                <i className='THIS IS WHERE LINKEDIN ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>
                                            <li><a href='#'>
                                                <i className='THIS IS WHERE PORTFOLIO ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>

                                        </ul>

                                    </div>


                                </div>
                            </div>

                            <div className='col-sm-6 col-md-4'>
                                <div className='team-item'>

                                    <img src='IMG of Jordan' className='dev-img' alt='handsome picture of "The Code Man" Jordan Burton' />
                                    <h3>Jordan Burton</h3>
                                    <div className='dev-info'>
                                        <p>Front End Specialist, Scrum Master</p>
                                        <p>Bio of Jordan</p>

                                        <ul className='dev-icons'>

                                            <li><a href='#'>
                                                <i className='THIS IS WHERE GITHBUB ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>
                                            <li><a href='#'>
                                                <i className='THIS IS WHERE LINKEDIN ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>
                                            <li><a href='#'>
                                                <i className='THIS IS WHERE PORTFOLIO ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>

                                        </ul>

                                    </div>


                                </div>
                            </div>

                            <div className='col-sm-6 col-md-4'>
                                <div className='team-item'>

                                    <img src='IMG of Michael Graham' className='dev-img' alt='handsome picture of "The Code Man" Michael Graham' />
                                    <h3>Michael Graham</h3>
                                    <div className='dev-info'>
                                        <p>Mr Worldwide</p>
                                        <p>Creator of Graphs</p>

                                        <ul className='dev-icons'>

                                            <li><a href='#'>
                                                <i className='THIS IS WHERE GITHBUB ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>
                                            <li><a href='#'>
                                                <i className='THIS IS WHERE LINKEDIN ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>
                                            <li><a href='#'>
                                                <i className='THIS IS WHERE PORTFOLIO ICON WILL GO FROM REACT ICONS'></i>
                                            </a></li>

                                        </ul>

                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </Col>
            </Row>
        </Col>
        <NavCanvas />
        </>
    )
};

export default DeveloperPage;