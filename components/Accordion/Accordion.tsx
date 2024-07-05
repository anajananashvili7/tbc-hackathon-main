"use client"

import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export function AccordionComponent() {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  return (
    <section className='accordion'>
      <Accordion
        expanded={expanded}
        onChange={handleExpansion}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>
            როგორ ვიპოვო ტუტორი კონკრეტულ საგანში?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            პლატფორმაზე არსებობს საძიებო ფუნქცია, სადაც შეგიძლიათ შეიყვანოთ სასურველი საგანი და მიიღოთ რეპეტიტორების სია.
            თქვენ ასევე შეგიძლიათ გამოიყენოთ სხვადასხვა ფილტრები .
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion slotProps={{ transition: { timeout: 400 } }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>
            როგორ შევარჩიო ტუტორი?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            შეგიძლიათ იხილოთ რეპეტიტორების პროფილები, სადაც მოცემულია ინფორმაცია მათი განათლების, გამოცდილების და სტუდენტების შეფასებების შესახებ.
            ასევე, შეგიძლიათ დაუკავშირდეთ რეპეტიტორებს პირდაპირ პლატფორმის მეშვეობით და დასვათ დამატებითი კითხვები.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion slotProps={{ transition: { timeout: 400 } }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>
            როგორ დავგეგმო გაკვეთილი?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            გაკვეთილის დაგეგმვისთვის უნდა აირჩიოთ რეპეტიტორი და იხილოთ მისი ხელმისაწვდომი დროები.
            შემდეგ, უბრალოდ აირჩიეთ თქვენთვის მოსახერხებელი დრო და დაადასტურეთ შეხვედრა. შეგიძლიათ დაამატოთ დამატებითი ინფორმაცია ან მოთხოვნები.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion slotProps={{ transition: { timeout: 400 } }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography>
            რა ხდება, თუ ვერ შევძელი გაკვეთილის დასწრება?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            თუ ვერ ახერხებთ დაგეგმილი გაკვეთილის დასწრებას, შეგიძლიათ გააუქმოთ ან გადადოთ ის.
            გთხოვთ, გაეცანით რეპეტიტორის წესებს, რომელიც მოცემულია პროფილში.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion slotProps={{ transition: { timeout: 400 } }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography>
            როგორ დავრეგისტრირდე პლატფორმაზე?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            პლატფორმაზე რეგისტრაციისთვის უნდა შეხვიდეთ ჩვენს ვებგვერდზე, დააჭიროთ &quot;შესვლა&quot; ღილაკს, შემდეგ აირჩიოთ &quot;რეგისტრაცია&quot; და შეავსოთ შესაბამისი ინფორმაცია.
            შემდეგ, დაადასტურეთ თქვენი ელ. ფოსტა და უკვე შეგიძლიათ გამოიყენოთ ჩვენი სერვისი.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </section>
  );
}
