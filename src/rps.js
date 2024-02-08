import { useNavigate } from "react-router-dom";

export default function Rps(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/analyze", { state: { name: props.name, cname: props.cname } });
  };

  return (
    <div className="gamecomponent">
      <div onClick={handleClick}>
        <center>
          <img src={props.image} alt="abcd" />
        </center>
        <center>
          <p>{props.name}</p>
        </center>
      </div>
    </div>
  );
}
