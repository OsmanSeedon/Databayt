import CentiButton from "@/components/Button/Centi";
import CentiInupt from "@/components/Input/Centi";
import MicroText from "@/components/Text/Micro";
import React from "react";

const Join = () => {
  return (
    <div className="mt-60 px-6 space-y-3">
      <CentiInupt placeholder="Name" />
      <CentiInupt placeholder="Phone" />
      <CentiInupt placeholder="Password" />
      <MicroText text="Between 7 to 28 characters" />
      <CentiButton placeholder="Join" />
      <MicroText
        text="Already on Databayt?"
        span="  Log in"
        link="/member/login"
      />
    </div>
  );
};

export default Join;
