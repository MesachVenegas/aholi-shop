import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
const ToastNotification = ({ closeIn }: { closeIn?: number | false }) => {
  return (
    <div>
      <ToastContainer
        position= "top-right"
        autoClose={closeIn || 3000}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
        transition={Bounce}
      />
    </div>
  )
}

export default ToastNotification;