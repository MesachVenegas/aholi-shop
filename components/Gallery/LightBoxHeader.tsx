import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LightBoxHeader({ close }: { close: () => void}) {
  return (
    <div className="flex justify-end p-4">
      <span className="text-white cursor-pointer" onClick={close}>
        <FontAwesomeIcon icon={faXmark} className="w-8 h-8"/>
      </span>
    </div>
  )
}
