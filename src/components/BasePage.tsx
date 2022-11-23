import React, { useState } from "react";
import { Sidebar } from '@c/Sidebar';
import { ArtBoard } from '@c/Canvas';
import { fabric } from "fabric";
const BasePage = () => {
  const [canvas, setCanvas] = useState<fabric.Canvas | undefined>();;
  return (
    <div className="grid overflow-hidden dark auto-cols-auto grid-rows-1 gap-2">
      <div className="box row-span-2"><Sidebar /></div>
      <div className="box col-start-2 col-span-2">
        <ArtBoard setCanvas={setCanvas} />
      </div>
    </div>
  );
}


export default BasePage;
