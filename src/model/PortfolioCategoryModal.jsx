import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const PortfolioCategoryModal = ({ isOpen, closeModal, selectedMedia }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldReturnFocusAfterClose={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        content: {
          inset: 0,
          background: "transparent",
          border: "none",
          padding: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "auto",
        },
      }}
    >
      <div
        className="flex items-center justify-center w-full h-full"
        onClick={handleOverlayClick}
      >
        <div className="relative">
          {selectedMedia?.mediaType?.includes("video/") ? (
            <video
              // className="portfolio__item__video self-center w-full"
              className="max-w-full max-h-[80vh] rounded-xl shadow-2xl object-cover"
              src={selectedMedia?.url}
              autoPlay
            />
          ) : (
            <img
              src={selectedMedia?.url}
              alt="Large Preview"
              className="max-w-full max-h-[80vh] rounded-xl shadow-2xl object-cover"
            />
          )}
          <button
            className="absolute -top-3 -right-3 bg-white/20 backdrop-blur-md border border-white/40 w-9 h-9 rounded-full border-red-500 flex items-center justify-center text-white text-xl"
            style={{ borderRadius: 9999 }}
            onClick={closeModal}
          >
            ✕
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PortfolioCategoryModal;
