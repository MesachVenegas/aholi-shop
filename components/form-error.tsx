import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FormErrorProps {
  message?: string;
}


const FormError = ({
  message
}: FormErrorProps) => {
  if(!message) return null;

  return (
    <div className="bg-destructive/10 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive ">
      <FontAwesomeIcon icon={faTriangleExclamation} className="w-5 h-5" />
      <p>{message}</p>
    </div>
  )
}

export default FormError