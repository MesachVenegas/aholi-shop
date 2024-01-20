import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FormErrorProps {
  message?: string;
}


const FormSuccess = ({
  message
}: FormErrorProps) => {
  if(!message) return null;

  return (
    <div className="bg-emerald-500/10 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500 ">
      <FontAwesomeIcon icon={faCircleCheck} className="w-5 h-5" />
      <p>{message}</p>
    </div>
  )
}

export default FormSuccess