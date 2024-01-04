import { recursive } from "@/components/ui/fonts";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginPage() {
  return (
    <main className="flex justify-center items-center bg-card-img h-[65vh]">
      <div className="flex flex-col w-full justify-center items-center gap-12 p-6">
          <h1 className={`${recursive.className} text-white text-xl font-medium`}>Iniciar Sesion</h1>
          <div className="flex justify-center items-center bg-white/40 backdrop-blur-lg w-full max-w-2xl h-full p-6 rounded-md">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-md font-bold">
                <FontAwesomeIcon icon={faGoogle} className="w-5 h-5 "/>
                <div>
                  <span className="text-[#4285f4]">G</span>
                  <span className="text-[#f43f5e]">o</span>
                  <span className="text-[#fbbc05]">o</span>
                  <span className="text-[#4285f4]">g</span>
                  <span className="text-[#34a853]">l</span>
                  <span className="text-[#f43f5e]">e</span>
                </div>
              </button>
              <span>o</span>
              <button className="flex items-center gap-2 bg-blue-700 rounded-md font-bold px-4 py-2 text-white">
                <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5"/>
                Facebook
              </button>
            </div>
          </div>
      </div>
    </main>
  )
}
