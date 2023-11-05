import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  //   console.log(err);
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong!!</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
      <Link to="/">
        <button className="">Home 👈</button>
      </Link>
    </div>
  );
};

export default Error;
