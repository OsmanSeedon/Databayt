import Tools from "@/components/Card/Tool";
import Header from "@/components/Nav/Header";
import Mobile from "@/components/Nav/Mobile";
import Search from "@/components/Search/Search";
import toolData from "@/constants/tool";
import React from "react";

const Tool = () => {
  return (
    <div className="space-y-4">
      <Header />
      <Search />
      <Mobile />
      <p className="text-[11.5px] tracking-wide font-light">
        The most magical part of the Harry Potter books, is that they eventually
        used the skills they learned at school
      </p>
      <div>
        <p className="text-[16px]">+ 40 tool for</p>
        <p className="text-[24px] pt-0">bussiness automation</p>
      </div>
      {toolData.map((values) => {
        return (
          <div className="py-[3PX]" key={values.id}>
            <Tools
              id={values.id}
              title={values.title}
              subtitle={values.subtitle}
              desc={values.desc}
              path={values.path}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Tool;
