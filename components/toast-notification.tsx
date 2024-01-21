import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
const ToastNotification = () => {
  return (
    <div>
      <ToastContainer
        position= "top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        rtl={false}
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        transition={Bounce}
      />
    </div>
  )
}

export default ToastNotification