import React from 'react'
import {AccordionHeader,UncontrolledAccordion,AccordionItem, AccordionBody} from 'reactstrap'


function ConcertCard({concerts}) {
  return (

    <UncontrolledAccordion>
        {concerts.map((concert, i) => <AccordionItem key={`${concert.location}-${i}`}>
            <AccordionHeader targetId={`${concert.location}-${i}`}>{concert.location}</AccordionHeader>
            <AccordionBody  accordionId={`${concert.location}-${i}`}>
                
        <ul>
            {concert.dates.map(date => <li key={date}>{date}</li>)}
        </ul>
        </AccordionBody>
        </AccordionItem>)}
    </UncontrolledAccordion>
  )
}

export default ConcertCard