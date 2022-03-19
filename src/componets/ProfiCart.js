import React from "react";

export function ProfilCart(props) {


   return (
   <div>
      {props.c}<button onClick={()=> props.a(props.c+1)}>+</button>
      
   </div>
   )
}