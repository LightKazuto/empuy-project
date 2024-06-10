import bg from "../Asset/bg.jpeg";

function Dashboard() {
  const storedName = localStorage.getItem("name");

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}>
      <div className="text-center">
        <p className="text-xl flex">Hai, <p className="font-bold ml-2 mr-2">{storedName}</p> biar kamu semangat coba klik tombol dibawah ini</p>
        <button className="bg-blue-500 text-white p-2 rounded-xl font-bold hover:bg-blue-800 mt-6">Klik ini nih</button>
      </div>
    </div>
  );
}

export default Dashboard;