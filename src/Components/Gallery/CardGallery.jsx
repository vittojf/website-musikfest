import React from "react";

function CardGallery({ images, title,column, columnBreak }) {
  return (
    <section className="relative mx-auto">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h2 className="h2">{title}</h2>
      </div>
      <div className={`grid ${columnBreak??"grid-cols-2"} ${column??"grid-cols-2"} gap-8 px-5 lg:px-0 justify-center items-center`}>
        {images?.map((el, key) => {
          return (
            <div key={key} className={"rounded  "+el?.className}>
              <img src={el.src} alt={el?.alt} className=" w-full h-[300px] lg:w-[400px] lg:h-[400px] object-cover rounded-full neon hover:p-4 transition-all ease-in" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export { CardGallery };
