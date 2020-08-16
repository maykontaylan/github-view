import React from "react";

const Action = ({handleGetRepos}) => (
    <div className="Action">
    <button onClick={() => handleGetRepos('repos')}>Ver Repositorios</button>
    <button onClick={() => handleGetRepos('starred')}>Ver Favoritos</button>
  </div>
);

export default Action;