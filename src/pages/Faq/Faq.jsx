import React from 'react';
import './faq.css'
import { Accordion,AccordionSummary,AccordionDetails,Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Faq = () => {

    return (
        <div className='accordion'>
            <h3 className='faqtitle'>FAQ Page</h3>

          <Accordion className='accordionSub' defaultExpanded>
            <AccordionSummary className='text'>
              <Typography className='text'>Where are you guys located ?</Typography>
            </AccordionSummary>
            <AccordionDetails className='accordionDetails'>
              <Typography className='text'>
                Hello, We are located at 1 Washington Sq, San Jose, CA 95192
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br/>

          <Accordion className='accordionSub'>
            <AccordionSummary className='text'>
              <Typography className='text'>How should I check my subscription plan details ?</Typography>
            </AccordionSummary>
            <AccordionDetails className='accordionDetails'>
              <Typography className='text'>
                If you are a first time user, you can enroll in a yearly or monthly plan. If you are a 
                registered user, you can find them below your profile details.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br/>


          <Accordion className='accordionSub'>
            <AccordionSummary className='text'>
              <Typography className='text'>I cannot place an order</Typography>
            </AccordionSummary>
            <AccordionDetails className='accordionDetails'>
              <Typography className='text'>
                We are exteremely sorry that you had to face this issue, please try clearing the cache
                and cookies for the browser. If this issue persists please give us a call on 
                408-924-1000. 
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br/>


          <Accordion className='accordionSub'>
            <AccordionSummary className='text'>
              <Typography className='text'>Do you provide refunds for lost or undelivered orders ?</Typography>
            </AccordionSummary>
            <AccordionDetails className='accordionDetails'>
              <Typography className='text'>
                Oh yes, we absolutely provide full refunds for lost or undelivered ordeers. To expediate
                the process please reach out to us via our chatbot or give us a call on 
                408-924-1000.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br/>


          <Accordion className='accordionSub'>
            <AccordionSummary className='text'>
              <Typography className='text'>I wish to report an alert, whom should I reach out to ?</Typography>
            </AccordionSummary>
            <AccordionDetails className='accordionDetails'>
              <Typography className='text'>
               For any kind of emergency please call 911. 
               For all other kinds of alerts, please click on "Raise Alerts" and fill in all the details related to it.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br/>
          
          <Accordion className='accordionSub'>
            <AccordionSummary className='text'>
              <Typography className='text'>Do you provide live tracking ?</Typography>
            </AccordionSummary>
            <AccordionDetails className='accordionDetails'>
              <Typography className='text'>
                Unfortunately we do not provide live tracking, we do process orders withing 3-5 business days.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <br/>
          <Accordion className='accordionSub'>
            <AccordionSummary className='text'>
              <Typography className='text'>How to change my password?</Typography>
            </AccordionSummary>
            <AccordionDetails className='accordionDetails'>
              <Typography className='text'>
                You can easily change your password by heading over to the "Settings" section right below your profile.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <br/>
        </div>
      );
}

export default Faq;
