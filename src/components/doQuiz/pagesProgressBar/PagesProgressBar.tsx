import React from "react";
function PagesProgressBar({ Quiz, actualPageIndex}: { Quiz?: any,actualPageIndex:number }) {
  return (
    <div className="flex pagesProgressBars mt-1">
      {Quiz?.pages.map((page: any, i: number) => (
        <div
          className={`pageProgressBar
            ${page.isCorrect === false && "incorrect"}
            ${page.isCorrect === true && "correct"}
            ${i === actualPageIndex && "actual"}
          `}
          key={i}
        ></div>
      ))}
    </div>
  );
}
export default PagesProgressBar;
