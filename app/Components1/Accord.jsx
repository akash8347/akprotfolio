import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Accord() {
  const defaultContent =
    `I am a Full stack developer and Problem solver working Hard to achieve my goals.`;

  return (
    <Accordion  className="  ">
      <AccordionItem key="1" aria-label="Accordion 1"
       title="My Introduction ?" className=" border-b-1   ">
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="My skills ?"
      className="   border-b-1 w-full "
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="My Education ?"
      className="    "
      >
        {"I have done graduation in BCA and currently pursuing Masters in Computer Application"}
      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Problem Solving skills"
      className="    "
      >
        {"I have an Excellence Problem solving skills "}
      </AccordionItem>
    </Accordion>
  );
}
