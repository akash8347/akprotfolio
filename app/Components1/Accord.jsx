import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export default function Accord() {
  const defaultContent =
    "I am a Full stack developer and Problem solver working Hard to achieve my goals.";

  return (
    <Accordion className="">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title={<span style={{ fontSize: "1.1rem" }}>My Introduction ?</span>}
        className="border-b-1 text-center"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title={<span style={{ fontSize: "1.1rem" }}>My skills ?</span>}
        className="border-b-1 w-full"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title={<span style={{ fontSize: "1.1rem" }}>My Education ?</span>}
        className=""
      >
        I have done graduation in BCA and currently pursuing Masters in Computer Application
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title={<span style={{ fontSize: "1.1rem" }}>Problem Solving skills</span>}
        className=""
      >
        I have an Excellence Problem solving skills
      </AccordionItem>
    </Accordion>
  );
}
