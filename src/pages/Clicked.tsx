import ReactPlayer from 'react-player';
import bg from "../Asset/bg.jpeg";
import { array } from 'yup';
// import song from 


function Clicked() {

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <p className="flex flex-wrap p-10 text-center w-64">
          Semangat jalanin harinya ya.. kamu hebat dah berjuang sejauh ini😊
          tapi jangan lupa take care your self yaa.. I hope you are proud of
          making it this far 😁
        </p>
      </div>
      <ReactPlayer url={["song.mp3"]} playing controls={false}  className="hidden"/>
    </div>
  );
}

export default Clicked;
