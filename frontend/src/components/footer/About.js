import React from 'react';
import { Container, Grid, Button} from 'semantic-ui-react';
import './About.css'

const About =() =>{
    return(
<Container fluid className="footer-main-container">
<Grid divided='vertically' className='about-container'>
    <Grid.Row columns={4}>
      <Grid.Column>
            <h4 id='title'>About CodeClan</h4>		
				<div>
                    <p>
                        <span>
                            CodeClan is Scotland’s first and only SQA accredited digital skills academy on a mission to help bridge the digital skills gap in Scotland’s growing tech industry.
                        </span>
                    </p>
                </div>

				<div>
                    <address>
                        37 Castle Terrace,<br />
                        Edinburgh EH1 2EL
                    </address>
                    <address>
                        77 Renfrew Street,<br />
                        Glasgow G2 3BZ
                    </address>
                    <address>
                        Wasps Inverness Creative Academy,<br />
                        <span>
                            Midmills Bldg, Stephen’s Street,<br />
                        </span>
                        <span>
                            Inverness IV2 3JP
                        </span>
                    </address>
                    <address> 
                    </address>
                    <address>
                        Phone: <a href="tel:0131 290 2600">0131 290 2600</a><br />
                        Email: <a href="mailto:info@codeclan.com">info@codeclan.com</a>
                    </address>
                </div>
            </Grid.Column>
                

            <Grid.Column>
                <nav>
                    <ul>
                        <li>
                            <a href="https://codeclan.com/courses/" >Courses</a>
                        </li>
                        <li >
                            <a href="https://codeclan.com/the-codeclan-experience/"> The CodeClan Experience</a>
                        </li>
                        <li>
                            <a href="https://codeclan.com/for-employers/" >For Employers</a>
                        </li>
                        <li >
                            <a href="https://codeclan.com/about-us/" >About Us</a>
                        </li>
                        <li>
                            <a href="https://codeclan.com/events/" >Events</a>
                        </li>
                        <li>
                            <a href="https://codeclan.com/blog/" >Blog</a>
                        </li>
                        <li>
                            <a href="https://codeclan.com/data-protection/" >Privacy Notice</a>
                        </li>
                        <li>
                            <a href="https://codeclan.com/accessibility/" >Accessibility</a>
                        </li>
                        <li>
                            <a href="https://codeclan.com/site-map/" >Sitemap</a>
                        </li>
                    </ul>
                </nav>
                                    
                </Grid.Column>

                <Grid.Column>
                    <a href='http://facebook.com/codeclanscotland/'>
                        <Button color='facebook' icon='facebook' />
                    </a>
                    <a href='https://twitter.com/CodeClanScot'>
                        <Button color='twitter' icon='twitter' />
                    </a>
                    <a href='https://www.instagram.com/codeclan/'>
                        <Button color='instagram' icon='instagram' />
                    </a>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    )


}
export default About;