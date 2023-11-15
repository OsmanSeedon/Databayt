import React from "react";

const Read = () => {
  return (
    
      <div className="flex flex-col text-right items-end gap-2">
        <div>
        <h1 className="font-medium text-[18px]"> Databayt داتابيت</h1>
        <p className="font-medium text-[17px]">مشروع تقني حول أتمتة الأعمال</p>
          </div>
        <p className="text-black/100">
          داتابيت معنية بتقديم أدوات تساعد على أتمتة الأعمال، وتسعى داتابيت
          لتكون جسرا يوصل بالأدوات المتاحة بالفعل في السوق العالمي،
        </p>
        <p className="text-black/50">المجانية منها والمدفوعة الثمن, وتسعى كذلك لبناء أدوات من الصفر</p>
        
        <button className="hover:text-blue-600 text-lg">أقرا المزيد</button>
        
      </div>
    
  );
};

export default Read;
