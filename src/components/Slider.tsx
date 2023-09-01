import { MouseEvent, useRef, useState } from "react";

type SliderItem = {
  title: string;
  description: string;
  imgUrl: string;
  url: string;
};

type SliderData = SliderItem[];

// maybe  children should be better
const Slider = ({ items }: { items: SliderData }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useRef({
    startX: 0,
    scrollLeft: 0,
  });

  const handleDragStart = (e: MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;

    const initX = e.pageX - slider.offsetLeft;
    const scrollLeft = slider.scrollLeft;
    mouseX.current.startX = initX;
    mouseX.current.scrollLeft = scrollLeft;
    setIsMouseDown(true);
    // document.body.style.cursor = "grabbing";
  };

  const handleDrag = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown || !sliderRef.current) return;
    const walkX = e.pageX - mouseX.current.startX;
    const slider = sliderRef.current;
    slider.scrollLeft = mouseX.current.scrollLeft - walkX * 1.5;
  };

  const jumpToLeft = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const walkX = slider.children[2].clientWidth / 6;
    slider.scrollLeft = mouseX.current.scrollLeft - walkX * 1.5;
  };

  const jumpToRight = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const walkX = slider.children[2].clientWidth / 6;
    slider.scrollLeft = (mouseX.current.scrollLeft + walkX) * 1.5;
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!sliderRef.current) return;
    // document.body.style.cursor = "default";
  };

  const renderItems = () => {
    return items.map((i) => (
      <div
        key={i.title}
        className="max-w-fit px-4 py-2 rounded text-center min-w-[200px] md:min-w-[20%] flex flex-col gap-4 group"
      >
        <img
          src={i.imgUrl}
          className="m-auto py-2 max-w-[200px] max-h-[200px]"
          draggable="false"
        />
        <h3 className="text-xl">{i.title}</h3>
        <div className="text-base group-hover:opacity-100 duration-300 opacity-80">
          {i.description}
        </div>
        <a
          href={i.url}
          target="_blank"
          className="text-black w-fit mx-auto py-1 px-3 font-medium my-2 flex items-center gap-1 hover:underline opacity-80 hover:opacity-100 duration-300"
        >
          <img src="/test-tw/link.svg" className="w-[18px]" />
          Δες το
        </a>
      </div>
    ));
  };

  return (
    <div className="relative select-none">
      <div
        className="w-[100%] h-[100%] overflow-auto lg:overflow-hidden cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        ref={sliderRef}
      >
        <div
          onClick={jumpToLeft}
          className={`absolute left-[10px] top-[50%] translate-y-[-30%] z-10 hover:bg-slate-500 hover:bg-opacity-20 rounded-full p-2 ${
            sliderRef &&
            sliderRef?.current &&
            sliderRef.current.scrollLeft >
              sliderRef.current.children[2].clientWidth / 6
              ? "block"
              : "hidden"
          }`}
        >
          <img
            src="/test-tw/left.png"
            className="w-[30px] h-[30px] ease-out duration-200 cursor-pointer"
          />
        </div>

        <div
          onClick={jumpToRight}
          className={`absolute right-[10px] top-[50%] translate-y-[-30%] z-10 hover:bg-slate-500 hover:bg-opacity-20 rounded-full p-2 ${
            sliderRef && sliderRef?.current
              ? sliderRef.current.scrollLeft <
                sliderRef.current.children[2].clientWidth /
                  Math.ceil(
                    sliderRef.current.children[2].clientWidth /
                      sliderRef.current.clientWidth
                  )
                ? "block"
                : "hidden"
              : "hidden lg:block"
          }`}
        >
          <img
            src="/test-tw/right.png"
            className="w-[30px] h-[30px] ease-out duration-200 cursor-pointer"
          />
        </div>

        <div className="flex w-full md:w-[150%] gap-4">{renderItems()}</div>
      </div>
    </div>
  );
};

export default Slider;
