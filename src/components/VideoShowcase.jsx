import { useRef, useEffect, useState } from "react";

const videos = [
  {
    id: 1,
    title: "Your Daily Ritual",
    subtitle: "A softer start to every morning.",
    category: "SKINCARE ROUTINE",
    src: "videos/skincare-routine.mp4",
  },
  {
    id: 2,
    title: "A Drop of Glow",
    subtitle: "Discover the beauty of gentle serums.",
    category: "SERUM APPLICATION",
    src: "videos/serum-application.mp4",
  },
  {
    id: 3,
    title: "The Beauty of Texture",
    subtitle: "Soft, rich and beautifully nourishing.",
    category: "PRODUCT TEXTURE",
    src: "videos/product-texture.mp4",
  },
];

function VideoCard({ video }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  // Automatic video playback
  useEffect(() => {
    const element = videoRef.current;

    if (!element) return;

    element.muted = true;
    element.loop = true;
    element.playsInline = true;

    element.play()
      .then(() => {
        setPlaying(true);
      })
      .catch((error) => {
        console.log("Autoplay blocked:", error);
      });

    return () => {
      element.pause();
    };
  }, []);

  // Manual play and pause
  const toggleVideo = async () => {
    const element = videoRef.current;

    if (!element) return;

    if (element.paused) {
      try {
        await element.play();
      } catch (error) {
        console.error("Video playback failed:", error);
      }
    } else {
      element.pause();
    }
  };

  return (
    <article className="petal-video-card">

      <div className="petal-video-frame">

        <video
          ref={videoRef}
          className="petal-showcase-video"
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        />

       

        <span className="petal-video-category">
          {video.category}
        </span>

      </div>

      <div className="petal-video-info">
        <h3>{video.title}</h3>
        <p>{video.subtitle}</p>
      </div>

    </article>
  );
}

export default function VideoShowcase() {
  return (
    <section className="petal-video-section" id="rituals">

      <div className="container">

        <div className="petal-video-heading" data-aos="fade-up">


          <h2>
            Beauty in every
            <em> little ritual.</em>
          </h2>

          <p>
            Explore the little moments that make your
            skincare routine feel special.
          </p>

        </div>

        <div className="row g-4">

          {videos.map((video, index) => (
            <div
              className="col-lg-4 col-md-6"
              key={video.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <VideoCard video={video} />
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}