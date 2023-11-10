import Tool from "@/components/Hero/Tool";
import Back from "@/components/Icon/Back";
import ToolIcon from "@/components/Icon/Tool";
import React from "react";

const Map = () => {
  return (
    <>
      <Back path='/tool'/>
      <Tool
        title="MAP"
        subtitle="Map of treasure"
        desc="Location, contact, working hours, traffic, Appointment Booking and required docs"
      />
      <div className="grid gap-4 grid-cols-2">
        <ToolIcon src="/health.png" width={100} height={100} alt="Health" path='/tool/map/health'/>
        <ToolIcon src="/document.png" width={100} height={100} alt="Document" path='/tool/map/document' />
        <ToolIcon src="/shop.png" width={100} height={100} alt="Shop" path='/tool/map/shop' />
        <ToolIcon src="/company.png" width={100} height={100} alt="Company"path='/tool/map/company'/>
      </div>
    </>
  );
};

export default Map;
