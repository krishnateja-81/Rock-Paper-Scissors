import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import Win from "./win";

export default function Rps(props) {
  const navigate = useNavigate();
  const [rps, setRps] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    setRps(props.name);
    setDisabled(true);

    navigate("/analyze", { state: { name: props.name, cname: props.cname } });
  };


  return (
    <div className={`gamecomponent ${rps === props.name ? "clicked" : ""}`}>
      {rps === props.name && <Win name={props.name} cname={props.cname} />}

      <div onClick={disabled ? null : handleClick}>
        <img src={props.image} alt="abcd" />
        <p>{props.name}</p>
      </div>
    </div>
  );
}
