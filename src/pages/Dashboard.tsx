import bg from "../Asset/bg.jpeg";
import Loading from "../component/LoadingComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Dashboard() {
  const storedName = localStorage.getItem("name");
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  function onClick() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/Clicked");
    }, 2000);
  }

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      {!loading && (
        <div className="text-center w-64">
          <p className="text-xl flex">
            Hai {storedName}. biar kamu semangat coba klik tombol dibawah ini
          </p>
          <button
            onClick={onClick}
            className="bg-blue-500 text-white p-2 rounded-xl font-bold hover:bg-blue-800 mt-6">
            Klik ini nih
          </button>
        </div>
      )}
      <Loading isLoading={loading} />
    </div>
  );
}

export default Dashboard;
