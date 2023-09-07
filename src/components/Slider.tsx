import { MouseEvent, ReactNode, useRef, useState } from "react";
import smoothScrollLeft from "../utils/smoothScroll";

const Slider = ({ children }: { children: ReactNode }) => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const mouseX = useRef({
    startX: 0,
    scrollLeft: 0,
  });
  const [sliderScrolledLeft, setSliderScrolledLeft] = useState(0);

  const scrollTo = (value: number) => {
    smoothScrollLeft(sliderRef.current, value, 700); // 1000ms - 1s duration, adjust as needed
  };

  const handleDragStart = (
    e: MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    e.persist();

    if ("pageX" in e) {
      const initX = e.pageX - slider.offsetLeft;
      const scrollLeft = slider.scrollLeft;
      mouseX.current.startX = initX;
      mouseX.current.scrollLeft = scrollLeft;
      setIsMouseDown(true);
    } else if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      const initX = touch.pageX - slider.offsetLeft;
      const scrollLeft = slider.scrollLeft;
      mouseX.current.startX = initX;
      mouseX.current.scrollLeft = scrollLeft;
      setIsMouseDown(true);
    }
  };

  const handleDrag = (
    e: MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!isMouseDown || !sliderRef.current) return;

    if ("pageX" in e) {
      const walkX = e.pageX - mouseX.current.startX;
      const sliderNewScrollLeft = mouseX.current.scrollLeft - walkX * 1.5;
      scrollTo(sliderNewScrollLeft);
      setSliderScrolledLeft(sliderNewScrollLeft);
    } else if (e.touches && e.touches.length > 0) {
      const touch = e.touches[0];
      const walkX = touch.pageX - mouseX.current.startX;
      const sliderNewScrollLeft = mouseX.current.scrollLeft - walkX * 1.5;
      scrollTo(sliderNewScrollLeft);
      setSliderScrolledLeft(sliderNewScrollLeft);
    }
  };

  const jumpToLeft = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const walkX = slider.children[2].clientWidth / 6;
    const scrollLeft = mouseX.current.scrollLeft - walkX * 1.5;
    const sliderNewScrollLeft = scrollLeft < 0 ? 0 : scrollLeft;
    scrollTo(sliderNewScrollLeft);
    setSliderScrolledLeft(sliderNewScrollLeft);
  };

  const jumpToRight = () => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const walkX = slider.children[2].clientWidth / 6;
    const sliderNewScrollLeft = (mouseX.current.scrollLeft + walkX) * 1.5;
    scrollTo(sliderNewScrollLeft);
    setSliderScrolledLeft(sliderNewScrollLeft);
  };

  const handleDragEnd = () => {
    setIsMouseDown(false);
    if (!sliderRef.current) return;
  };

  return (
    <div className="relative select-none">
      <div
        className="w-[100%] h-[100%] overflow-x-hidden cursor-grabbing"
        onMouseDown={handleDragStart}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDrag}
        onTouchEnd={handleDragEnd}
        onTouchCancel={handleDragEnd}
        ref={sliderRef}
      >
        <div
          onClick={jumpToLeft}
          className={`absolute left-[10px] top-[50%] translate-y-[-30%] z-10 hover:bg-slate-500 hover:bg-opacity-20 rounded-full p-2 ${
            sliderScrolledLeft > 0 ? "block" : "hidden"
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
            sliderRef &&
            sliderRef?.current &&
            sliderScrolledLeft <
              sliderRef.current.children[2].clientWidth /
                Math.ceil(
                  sliderRef.current.children[2].clientWidth /
                    sliderRef.current.clientWidth
                )
              ? "block"
              : "hidden"
          }`}
        >
          <img
            src="/test-tw/right.png"
            className="w-[30px] h-[30px] ease-out duration-200 cursor-pointer"
          />
        </div>

        <div className="flex w-full md:w-[150%] gap-4">{children}</div>
      </div>
    </div>
  );
};

export default Slider;
