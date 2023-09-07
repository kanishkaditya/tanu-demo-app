import React from "react";

export default function CustomBody(faltu) {
  return (
    <div className='interest'>
      <h1>{faltu['heading']}</h1>
      <p>
      {faltu['discription']}
      </p>
    </div>
  );
}
