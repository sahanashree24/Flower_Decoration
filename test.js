import React, {useState} from "react";
import HeroSection from "../../components/Hero/HeroSection";
import "./Home.css";
import Services from "../../components/Services/Services";
import Work from "../../components/Work/Work";
import { ref, uploadBytesResumable, getDownloadURL, getStorage, listAll } from "firebase/storage"; // Import storage functions
import cong from "../../firebaseconfig"; // Assuming the correct path to your configuration file

const Home = () => {

  const storage = getStorage(cong); // Initialize Firebase Storage

  const [selectedImage, setSelectedImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [imageURL, setImageURL] = useState("");

  const handleFileChange = (e) => {
    console.log("onHANDLEFILECHANGE::::");
    
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      const maxSize = 200 * 1024;
      if (file.size > maxSize) {
        console.log("File size exceeds the 200KB limit.");
        setSelectedImage(null); // Clear selected image if invalid
        return; // Exit if file size is too large
      } else {
        setSelectedImage(file); // Set the file to state
      }
    }
  };

  const generateRandomNumber = () => {
    return Math.floor(100000 + Math.random() * 900000); // Generates a number between 100000 and 999999
  };

  const checkIfFolderExists = async (folderName) => {
    try {
      const folderRef = ref(storage, folderName);
      const folderSnapshot = await listAll(folderRef); // List all files under this folder
      return folderSnapshot.items.length > 0; // If any items exist, the folder is considered to exist
    } catch (error) {
      console.error("Error checking folder existence:", error);
      return false;
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      alert("Please select an image to upload.");
      return;
    }

    setUploading(true);

    const folderName = 'MarriageEvents';
    const fileName = `MarriageImage_${generateRandomNumber()}`;

    try {
      // Check if the folder already exists (by checking if the file exists in that folder)
      const folderExists = await checkIfFolderExists(folderName);
      if (folderExists) {
        console.log(`Folder ${folderName} exists, uploading image to the existing folder.`);
      } else {
        console.log(`Folder ${folderName} doesn't exist, creating a new folder.`);
      }

      // Create a storage reference with the folder name and file name
      const storageRef = ref(storage, `${folderName}/${fileName}`);

    // Create an upload task
    const uploadTask = uploadBytesResumable(storageRef, selectedImage);

    // Monitor the upload progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.error("Error uploading file: ", error);
        setUploading(false);
      },
      () => {
        // Get the download URL after successful upload
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImageURL(downloadURL); // Store the download URL
          setUploading(false); // Reset uploading state
        });
      }
    );
  } catch (error) {
    console.error("Error checking folder existence:", error);
    setUploading(false);
  }
  };

  return (
    <>
     <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Image"}
      </button>
      <HeroSection />
      <Services />
      <Work />
    </>
  );
};

export default Home;