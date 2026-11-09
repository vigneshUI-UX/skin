import { useEffect, useRef } from "react";

const FRAME_COUNT = 300;
const START_FRAME = 1; // Change this to 232 if your sequence starts at ezgif-frame-232.jpg

function framePath(index) {
  const frameNumber = START_FRAME + index;
  return `frames/ezgif-frame-${String(frameNumber).padStart(3, "0")}.jpg`;
}

export default function Hero() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const canvas = canvasRef.current;

    if (!section || !sticky || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const frames = new Array(FRAME_COUNT);

    let currentFrame = -1;
    let animationId = null;
    let destroyed = false;

    let width = 0;
    let height = 0;
    let dpr = 1;

    // --------------------------------
    // RESIZE CANVAS
    // --------------------------------

    function resizeCanvas() {
      if (destroyed) return;

      const rect = sticky.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (currentFrame >= 0) {
        drawFrame(currentFrame);
      }
    }

    // --------------------------------
    // DRAW IMAGE
    // --------------------------------

    function drawFrame(index) {
      if (destroyed || width === 0 || height === 0) return;

      const image = frames[index];

      if (!image || !image.complete || !image.naturalWidth) {
        return;
      }

      const scale = Math.max(
        width / image.naturalWidth,
        height / image.naturalHeight
      );

      const drawWidth = image.naturalWidth * scale;
      const drawHeight = image.naturalHeight * scale;

      const x = (width - drawWidth) / 2;
      const y = (height - drawHeight) / 2;

      ctx.clearRect(0, 0, width, height);

      ctx.drawImage(
        image,
        x,
        y,
        drawWidth,
        drawHeight
      );
    }

    // --------------------------------
    // FIND AVAILABLE FRAME
    // --------------------------------

    function drawCurrentFrame() {
      if (currentFrame < 0) return;

      if (
        frames[currentFrame]?.complete &&
        frames[currentFrame]?.naturalWidth
      ) {
        drawFrame(currentFrame);
        return;
      }

      for (let distance = 1; distance < FRAME_COUNT; distance++) {
        const before = currentFrame - distance;
        const after = currentFrame + distance;

        if (
          before >= 0 &&
          frames[before]?.complete &&
          frames[before]?.naturalWidth
        ) {
          drawFrame(before);
          return;
        }

        if (
          after < FRAME_COUNT &&
          frames[after]?.complete &&
          frames[after]?.naturalWidth
        ) {
          drawFrame(after);
          return;
        }
      }
    }

    // --------------------------------
    // UPDATE SCROLL PROGRESS
    // --------------------------------

    function updateAnimation() {
      animationId = null;

      if (destroyed) return;

      const rect = section.getBoundingClientRect();

      const scrollDistance =
        section.offsetHeight - sticky.offsetHeight;

      if (scrollDistance <= 0) return;

      const scrolled = -rect.top;

      const progress = Math.max(
        0,
        Math.min(1, scrolled / scrollDistance)
      );

      const nextFrame = Math.round(
        progress * (FRAME_COUNT - 1)
      );

      if (nextFrame !== currentFrame) {
        currentFrame = nextFrame;
        drawCurrentFrame();
      }
    }

    function handleScroll() {
      if (animationId !== null || destroyed) return;
      animationId = requestAnimationFrame(updateAnimation);
    }

    // --------------------------------
    // LOAD IMAGES
    // --------------------------------

    function loadFrame(index) {
      const image = new Image();

      frames[index] = image;

      image.onload = () => {
        if (destroyed) return;

        if (index === currentFrame || currentFrame === -1) {
          if (currentFrame === -1) currentFrame = 0;
          drawCurrentFrame();
        }
      };

      image.onerror = () => {
        console.error("Unable to load:", framePath(index));
      };

      image.src = framePath(index);

      return image;
    }

    // Load all frames
    for (let i = 0; i < FRAME_COUNT; i++) {
      loadFrame(i);
    }

    // --------------------------------
    // INITIALIZE
    // --------------------------------

    resizeCanvas();

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    window.addEventListener("resize", resizeCanvas);

    let observer;

    if (window.ResizeObserver) {
      observer = new ResizeObserver(() => {
        resizeCanvas();
        handleScroll();
      });

      observer.observe(section);
      observer.observe(sticky);
    }

    handleScroll();

    // --------------------------------
    // CLEANUP
    // --------------------------------

    return () => {
      destroyed = true;

      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);

      if (animationId !== null) {
        cancelAnimationFrame(animationId);
      }

      observer?.disconnect();

      frames.forEach((image) => {
        if (image) {
          image.onload = null;
          image.onerror = null;
        }
      });
    };
  }, []);

  return (
    <section
      className="cinematic-hero"
      id="home"
      ref={sectionRef}
    >
      <div
        className="hero-sticky"
        ref={stickyRef}
      >
        <canvas
          className="hero-canvas"
          ref={canvasRef}
        />

        <div className="hero-overlay" />

        <div className="container hero-content">
          <div className="hero-copy" data-aos="fade-up">
            <h1>
              A softer
              <br />
              kind of <em>glow.</em>
            </h1>

            <p>
              Thoughtful skincare made with gentle ingredients,
              simple rituals, and a little love for your skin.
            </p>

            <div className="hero-buttons">
              <a className="btn-petal" href="#shop">
                Discover your glow
              </a>

              <a className="hero-text-link" href="#story">
                Our philosophy
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}