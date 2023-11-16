import React from "react";

const CentiInupt = (props: { placeholder: string }) => {
  return (
    <div>
      <input
        className="w-full h-[39px] px-[15px] py-1.5
         bg-neutral-50 border border-black justify-center items-center gap-[180px] inline-flex"
        
         
        type="text"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CentiInupt;
