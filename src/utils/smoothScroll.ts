const smoothScrollLeft = (
  element: HTMLDivElement | null,
  to: number,
  duration: number
) => {
  if (!element) return;
  const start = element.scrollLeft;
  const change = to - start;
  const startTime = performance.now();

  const animateScroll = (timestamp: number) => {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutCubic(progress);
    element.scrollLeft = start + change * easedProgress;

    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  };

  function easeOutCubic(t: number) {
    return 1 - Math.pow(1 - t, 3);
  }

  requestAnimationFrame(animateScroll);
};

export default smoothScrollLeft;
