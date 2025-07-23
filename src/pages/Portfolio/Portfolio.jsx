import React, { useEffect, useState } from "react";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import cong from "../../firebaseconfig";
const firestoredb = getFirestore(cong);
import breadcrumbBg from "/public/hero/hero-3.jpeg";
import PortfolioCategoryModal from "../../model/PortfolioCategoryModal";


const Portfolio = () => {
  const [eventsData, setEventsData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState({});

  useEffect(() => {
    const docRef = doc(firestoredb, "events", "eventsData");

    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data().data;
        setEventsData(data);
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe();
  }, []);

  function openModal(url, mediaType) {
    setSelectedMedia({url, mediaType})
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  }

  // Handle category selection
  const handleCategoryChange = async (index) => {
    setLoading(true);
    setSelectedCategory(index);

    // Wait for all images in the new category to load
    const newImages = eventsData?.[index]?.data || [];
    await Promise.all(
      newImages.map((item) => {
        console.log("ITEMURL::::", item.url);
        return new Promise((resolve) => {
          const img = new Image();
          img.src = item.url;
          img.onload = resolve;
          img.onerror = resolve; // Prevents blocking if an image fails
        });
      })
    );

    setLoading(false);
  };

  return (
    <div>
      <div
        className="breadcrumb-option spad set-bg"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2 style={{ color: "#891F3A" }}>Portfolio</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="portfolio spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="portfolio__filter">
                {eventsData.map((item, index) => (
                  <li
                    key={index}
                    className={index === selectedCategory ? "active" : ""}
                    onClick={() => handleCategoryChange(index)}
                  >
                    {item?.categoryName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="row portfolio__gallery">
            {loading ? (
              <div className="col-lg-12 text-center">
                <p>Loading...</p>
              </div>
            ) : (
              eventsData?.[selectedCategory]?.data?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-sm-6 mix branding cursor-pointer"
                    onClick={() => openModal(item?.url, item?.mediaType)}
                  >
                    <div className="portfolio__item">
                      {item?.mediaType?.includes("video/") ? (
                        <video
                          className="portfolio__item__video self-center w-full"
                          src={item?.url}
                          autoPlay
                        />
                      ) : (
                        <img
                          className="portfolio__item__video self-center w-full"
                          src={item?.url}
                          alt="Media"
                        />
                      )}
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>
      {isOpen && (<PortfolioCategoryModal closeModal={closeModal} isOpen={isOpen} selectedMedia={selectedMedia}/>)}
    </div>
  );
};

export default Portfolio;
