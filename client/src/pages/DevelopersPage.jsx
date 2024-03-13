import { useState, useEffect } from 'react';
import { usePageContext } from '../utils/PageContext';
import React from "react";
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

import NavBar from '../components/NavBar';
import NavCanvas from '../components/NavCanvas';
import Header from '../components/Header';
import {
    FaLinkedinIn,
} from 'react-icons/fa';
import { DiGithubBadge } from "react-icons/di";

function DeveloperPage() {
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
                <Header header={page.header} />
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

                                            <a data-flickr-embed="true" href="https://www.flickr.com/photos/200186417@N05/53583726377/in/dateposted-public/" title="img_7844_720"><img src="https://live.staticflickr.com/65535/53583726377_c944e6a7b7_c.jpg" width="314" height="500" alt="img_7844_720" /></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                                            <h3>Jake Smith</h3>
                                            <div className='dev-info'>
                                                <p>Backend, API Developer</p>

                                                <ul className='dev-icons'>

                                                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                                                        <a href="https://github.com/jakeshmith">
                                                            <DiGithubBadge className='cursor-pointer' size={20} />
                                                        </a>
                                                        <a href="https://www.linkedin.com/in/jakesmith2024">
                                                            <FaLinkedinIn className='cursor-pointer' size={20} />
                                                        </a>
                                                    </div>

                                                </ul>

                                            </div>


                                        </div>
                                    </div>

                                    <div className='col-sm-6 col-md-4'>
                                        <div className='team-item'>

                                            <a data-flickr-embed="true" href="https://www.flickr.com/photos/200186417@N05/53584915089/in/dateposted-public/" title="image_720"><img src="https://live.staticflickr.com/65535/53584915089_01f888f937.jpg" width="314" height="500" alt="image_720" /></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                                            <h3>Eric Reyna</h3>
                                            <div className='dev-info'>
                                                <p>Backend, React Developer</p>


                                                <ul className='dev-icons'>

                                                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                                                        <a href="https://github.com/Ereyna21">
                                                            <DiGithubBadge className='cursor-pointer' size={20} />
                                                        </a>
                                                        <a href="https://www.linkedin.com/in/eric-reyna-3a7269147/">
                                                            <FaLinkedinIn className='cursor-pointer' size={20} />
                                                        </a>
                                                    </div>
                                                </ul>

                                            </div>


                                        </div>
                                    </div>

                                    <div className='col-sm-6 col-md-4'>
                                        <div className='team-item'>

                                            <a data-flickr-embed="true" href="https://www.flickr.com/photos/200186417@N05/53584591701/in/dateposted-public/" title="profile1_720"><img src="https://live.staticflickr.com/65535/53584591701_f1f95fc542_c.jpg" width="314" height="500" alt="profile1_720" /></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                                            <h3>Jordan Burton</h3>
                                            <div className='dev-info'>
                                                <p>React, Scrum Master</p>


                                                <ul className='dev-icons'>

                                                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                                                        <a href="https://github.com/jordaneburton">
                                                            <DiGithubBadge className='cursor-pointer' size={20} />
                                                        </a>
                                                        <a href="https://www.linkedin.com/in/burton-jordan/">
                                                            <FaLinkedinIn className='cursor-pointer' size={20} />
                                                        </a>
                                                    </div>

                                                </ul>

                                            </div>


                                        </div>
                                    </div>

                                    <div className='col-sm-6 col-md-4'>
                                        <div className='team-item'>

                                            <a data-flickr-embed="true" href="https://www.flickr.com/photos/200186417@N05/53583727097/in/dateposted-public/" title="ead522ab-7ca1-4744-a934-efa081efc0d8_1_105_c_720"><img src="https://live.staticflickr.com/65535/53583727097_eb69e39165_z.jpg" width="314" height="500" alt="ead522ab-7ca1-4744-a934-efa081efc0d8_1_105_c_720" /></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
                                            <h3>Michael Graham</h3>
                                            <div className='dev-info'>
                                                <p>Frontend, ChartJS</p>

                                                <ul className='dev-icons'>

                                                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                                                        <a href="https://github.com/mwg396">
                                                            <DiGithubBadge className='cursor-pointer' size={20} />
                                                        </a>
                                                        <a href="https://www.linkedin.com/in/michael-william-graham-92466a2a4/">
                                                            <FaLinkedinIn className='cursor-pointer' size={20} />
                                                        </a>
                                                    </div>

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