import React from 'react';
import "./WorkFlow.css"
import banner from "../../assets/img/ux-indonesia-qC2n6RQU4Vw-unsplash 1.png"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';





const WorkFlow = () => {
    return (
        <>

            <div className="container workflow-title">
                <h2> Work Flow </h2>
                <div className="workflow-description">
                    <div className="workflow-accordion">
                        <Accordion className='accordion'>
                            <AccordionItem  className='accordion-item'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Defining Goal
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Project analysis, defining project requirements and objectives based on clients needs, cost and effort estimation, creating value and process planning.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='accordion-item'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Product Design
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='accordion-item'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Development
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='accordion-item'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Testing
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='accordion-item'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Product Release
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Exercitation in fugiat est ut ad ea cupidatat ut in
                                        cupidatat occaecat ut occaecat consequat est minim minim
                                        esse tempor laborum consequat esse adipisicing eu
                                        reprehenderit enim.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem className='accordion-item'>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Maintenance Support
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        In ad velit in ex nostrud dolore cupidatat consectetur
                                        ea in ut nostrud velit in irure cillum tempor laboris
                                        sed adipisicing eu esse duis nulla non.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                    <div className='workflow-banner'>
                        <div> <img src={banner} alt="" /> </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default WorkFlow;