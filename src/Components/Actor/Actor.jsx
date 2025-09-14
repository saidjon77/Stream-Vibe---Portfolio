import React, { useEffect, useState } from "react";
import "./Actor.scss";
import Api_Service from "../../Service/api_service";
import { useParams } from "react-router-dom";

const Actor = () => {
  const { id } = useParams();
  console.log(id);
  const [person, setPerson] = useState();
  const getAPi = async () =>{
    let responce = await Api_Service.getData(`person/${id}`);
    setPerson(responce);
  }

  console.log(person);
  

  useEffect(() => {
    getAPi();
  }, []);

  return (
    <div className="Actor">
      <div className="Img_text">
        <div className="Images">
          <img src={`https://image.tmdb.org/t/p/w500/${person?.profile_path}`} alt="" />
        </div>
        <div className="Texts">
          <h1>{person?.name}</h1>
          <h4>{person?.birthday}</h4>
          <p>
            {person?.biography.slice(0, 1000)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Actor;
