import React from "react";
import { actors } from "../data";
import DirectorDiv from "./DirectorDiv";

function Actors() {
  return <div>
    <h1>Actors Page</h1>
    {actors.map(actor => {
      return (
        <DirectorDiv
        director={actor}
        key={actor.name}
        />
      )
    })}
  </div>;
}

export default Actors;
