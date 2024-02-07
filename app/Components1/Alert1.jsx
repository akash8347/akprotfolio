import { RocketIcon } from "@radix-ui/react-icons"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../components/ui/alert"
export default function Alert1({ onClose }) {
  return (
    <Alert className="fixed  md:top-5 md:right-5  top-5 right-9 w-80 md:w-[30rem] inline-block ">
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Cool !!</AlertTitle>
      <AlertDescription className="md:relative flex flex-row items-center">
        Form Submitted. Akash will be back to you &#128522;
        <button className=" md:right-1 mb-4 md:absolute md:flex md:bottom-2 md:mb-0 " onClick={onClose}>Close</button>
      </AlertDescription>
    </Alert>
  );
}
