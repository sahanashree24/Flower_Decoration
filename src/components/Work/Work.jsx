import React, { useEffect, useRef, useState } from "react";
import Masonry from "masonry-layout";
import ReactPlayer from "react-player";

function Work() {
  const masonryRef = useRef(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const openVideo = (url) => {
    setVideoUrl(url);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeVideo = () => {
    setVideoUrl(null);
  };

 const workItems = [
  {
    id: 1,
    size: "wide__item",
    bg: "/work/work-8.jpeg",
    projectDetails: {
      title: "Vibrant Haldi Ceremony Decor",
      category: "Haldi Ceremony",
      subCategory: "Function",
    },
  },
  {
    id: 2,
    size: "small__item",
    bg: "/work/work-11.jpeg",
    projectDetails: {
      title: "Elegant Mehndi Ceremony Setup",
      category: "Mehndi Ceremony",
      subCategory: "Function",
    },
  },
  {
    id: 3,
    size: "small__item",
    bg: "/work/work-10.jpeg",
    projectDetails: {
      title: "Grand Stage Decoration",
      category: "Stage Ceremony",
      subCategory: "Function",
    },
  },
  {
    id: 4,
    size: "large__item",
    bg: "/work/work-13.jpeg",
    projectDetails: {
      title: "Romantic Anniversary Celebration",
      category: "Marriage Anniversary",
      subCategory: "Function",
    },
  },
  {
    id: 5,
    size: "small__item",
    bg: "/work/work-12.jpeg",
    projectDetails: {
      title: "Traditional Pooja Floral Decor",
      category: "Pooja",
      subCategory: "Function",
    },
  },
  {
    id: 6,
    size: "small__item",
    bg: "/work/work-9.jpeg",
    projectDetails: {
      title: "Beautiful Haldi Decoration",
      category: "Haldi",
      subCategory: "Function",
    },
  },
  {
    id: 7,
    size: "wide__item",
    bg: "/work/work-14.jpeg",
    projectDetails: {
      title: "Grand Welcome Gate Arrangement",
      category: "Welcome Gate",
      subCategory: "Function",
    },
  },
];


  useEffect(() => {
    if (masonryRef.current) {
      new Masonry(masonryRef.current, {
        itemSelector: ".work__item",
        columnWidth: ".grid-sizer",
        gutter: 10,
      });
    }
  }, []);

  return (
    <section className="work">
      <div style={{backgroundColor:'white'}} className="work__gallery" ref={masonryRef}>
        <div className="grid-sizer"></div>
        {workItems.map((item) => (
          <div
            key={item.id}
            className={`work__item ${item.size}`}
            style={{
              backgroundImage: `url(${item.bg})`,
              width: isMobile && "100%",
            }}
          >
            {/* <button
              className="play-btn video-popup"
              onClick={() => openVideo("https://www.youtube.com/watch?v=LXb3EKWsInQ")}
            >
              <i className="fa fa-play"></i>
            </button> */}

            {/* Hover Effect Content */}
            <div className="work__item__hover">
              <h4>{item?.projectDetails?.title}</h4>
              <ul>
                <li>{item?.projectDetails?.category}</li>
                <li>{item?.projectDetails?.subCategory}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {videoUrl && (
        <div className="video-modal">
          <div className="video-content">
            <button className="close-btn" onClick={closeVideo}>
              ×
            </button>
            <ReactPlayer url={videoUrl} controls playing />
          </div>
        </div>
      )}
    </section>
  );
}

export default Work;
