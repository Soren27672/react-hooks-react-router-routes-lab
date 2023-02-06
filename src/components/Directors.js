import React from "react";
import { directors } from "../data";
import DirectorDiv from "./DirectorDiv";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map(director => {
      return (
        <DirectorDiv
        director={director}
        key={director.name}
        />
      )
    })}
    </div>;
}

export default Directors;
