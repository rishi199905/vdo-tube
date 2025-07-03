import React from "react";
import Button from "./Button";

const list = ["All", "Live", "Gaming"];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Movies" />
      <Button name="UFC" />
      <Button name="Cooking" />
      <Button name="Cricket" />
      <Button name="PRIME" />
      <Button name="NETFLIX" />
      <Button name="SUPER MARIO" />
      <Button name="HOW TO LIFE" />
    </div>
  );
};

export default ButtonList;
