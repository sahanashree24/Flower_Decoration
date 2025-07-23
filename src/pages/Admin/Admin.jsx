import React, { useState, useEffect } from "react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
  deleteObject,
} from "firebase/storage";
import cong from "../../firebaseconfig";
import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import { Trash2, Pencil } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { editDataInFirestore } from "../../actions/FbActions";
import { handleDeleteImage } from "../../actions/FbActions";
import { deleteImageFromStorage } from "../../actions/FbActions";

const Admin = () => {
  const storage = getStorage(cong);
  const firestoredb = getFirestore(cong);
  const eventDocRef = doc(firestoredb, "events", "eventsData");
  const [activeTab, setActiveTab] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [uploading, setUploading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [collectionData, setCollectionData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [dataId, setDataId] = useState("");
  const [imageId, setImageId] = useState("");
  

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("FILE::::", file)
      // const maxSize = 200 * 1024;
      // if (file.size > maxSize) {
      //   alert("File size exceeds the 200KB limit.");
      //   return;
      // }
      setImageFile(file);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const generateRandomNumber = () => {
    return Math.floor(100000 + Math.random() * 900000);
  };

  const onEditClick = (categoryName, content) => {
    setSelectedImage(content?.url);
    setCategoryName(categoryName);
    setDescription(content?.description || "");
    setTitle(content?.title || "");
    setPrice(content?.price || "");
    setDataId(content?.id);
    setImageId(content?.imageId);
    window.isEdit = true;
  };

  const addDataToFirestore = async () => {
    if (!selectedImage || !categoryName || !title || !price) {
      alert("Please fill all fields before uploading.");
      return;
    }

    setUploading(true);
    const fileName = `${categoryName}_Image_${generateRandomNumber()}`;
    const storageRef = ref(storage, `Events/${categoryName}/${fileName}`);
    const dataId = `${categoryName}_Item_${generateRandomNumber()}`;

    try {
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.error("Error uploading file: ", error);
          setUploading(false);
        },
        async () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            const payloadData = {
              id: dataId,
              imageId: fileName,
              url: downloadURL,
              title: title || null,
              description: description || null,
              price: price || null,
              mediaType: imageFile?.type
            };

            const docSnapshot = await getDoc(eventDocRef);
            if (docSnapshot.exists()) {
              const data = docSnapshot.data().data;

              const existingCategory = data.find(
                (item) => item.categoryName === categoryName
              );

              if (existingCategory) {
                await updateDoc(eventDocRef, {
                  data: data.map((item) =>
                    item.categoryName === categoryName
                      ? {
                          ...item,
                          data: [...item.data, payloadData],
                        }
                      : item
                  ),
                });
                notify(`Image added to the existing category: ${categoryName}`);
              } else {
                await updateDoc(eventDocRef, {
                  data: arrayUnion({
                    categoryName,
                    data: [payloadData],
                  }),
                });
                notify(`New category added: ${categoryName}`);
              }
            } else {
              await setDoc(eventDocRef, {
                data: [
                  {
                    categoryName,
                    data: [payloadData],
                  },
                ],
              });
            }

            resetFields();
          });
        }
      );
    } catch (error) {
      console.error("Upload error:", error);
      setUploading(false);
    }
  };

  const editDataValidation = async () => {
    if (!selectedImage || !categoryName || !title || !price) {
      alert("Please fill all fields before uploading.");
      return;
    }

    if (selectedImage.includes("localhost")) {
      deleteImageFromStorage(categoryName, imageId);
      setUploading(true);
      const fileName = `${categoryName}_Image_${generateRandomNumber()}`;
      const storageRef = ref(storage, `Events/${categoryName}/${fileName}`);

      try {
        const uploadTask = uploadBytesResumable(storageRef, imageFile);

        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (error) => {
            console.log("error", error);
            setUploading(false);
          },
          async () => {
            getDownloadURL(uploadTask.snapshot.ref).then(
              async (downloadURL) => {
                const updatedData = {
                  id: dataId,
                  imageId: fileName,
                  url: downloadURL,
                  title: title || null,
                  description: description || null,
                  price: price || null,
                };
                editDataInFirestore(
                  updatedData,
                  eventDocRef,
                  categoryName,
                  dataId,
                  resetFields
                );
              }
            );
          }
        );
      } catch (error) {
        setUploading(false);
      }
    } else {
      const updatedData = {
        id: dataId,
        title: title || null,
        description: description || null,
        price: price || null,
      };
      editDataInFirestore(
        updatedData,
        eventDocRef,
        categoryName,
        dataId,
        resetFields
      );
    }
  };

  const resetFields = () => {
    setUploading(false);
    setSelectedImage(null);
    setImageFile(null);
    setTitle("");
    setDescription("");
    setPrice("");
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(eventDocRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data().data;
        setCollectionData(data);
      } else {
        console.log("No such document!");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = () => {
    if (window.isEdit) {
      editDataValidation();
    } else {
      addDataToFirestore();
    }
  };

  const notify = (message) => toast(message);

  return (
    <>
      <div style={styles.main_container}>
        <div style={styles.container}>
          <h2 style={styles.heading}>Upload Events Image/Video</h2>
          <div style={styles.formGroup}>
            <label style={styles.label}>Choose an Image/Video:</label>
            <input
              type="file"
              accept="image/*, video/*"
              id="imageInput"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <button
              onClick={() => document.getElementById("imageInput").click()}
              style={styles.button}
            >
              Pick an Image/Video
            </button>
          </div>

          {selectedImage && (
            <div style={styles.imagePreview}>
              <img src={selectedImage} alt="Selected" style={styles.image} />
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Select Category:</label>
            <select
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              style={styles.select}
            >
              <option value="">-- Select Events --</option>
              <option value="Marriage">Marriage</option>
              <option value="Haldi">Haldi</option>
              <option value="Birthday">Birthday</option>
              <option value="Corporate Events">Corporate Events</option>
              <option value="Mehndi">Mehndi</option>
              <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={styles.input}
              placeholder="Enter Title"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Description:</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={styles.input}
              placeholder="Enter Description"
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Price:</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              style={styles.input}
              placeholder="Enter Price"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selectedImage || !categoryName || uploading}
            style={{
              ...styles.submitButton,
              backgroundColor:
                selectedImage && categoryName && !uploading
                  ? "#28a745"
                  : "#ccc",
              cursor:
                selectedImage && categoryName && !uploading
                  ? "pointer"
                  : "not-allowed",
            }}
          >
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </div>
      </div>

      <div
        style={{ backgroundColor: "white" }}
        className="flex flex-col items-center py-6"
      >
        <h2 className="text-2xl font-serif italic mb-4">Our Collection</h2>
        <div className="flex space-x-6">
          {collectionData.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab == index
                  ? "bg-green-600 text-white"
                  : "bg-transparent text-gray-700 hover:text-green-600"
              }`}
            >
              {category?.categoryName}
            </button>
          ))}
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {collectionData?.[activeTab]?.data?.map((content, i) => (
              <div key={i}>
                <div className="relative w-68 h-68 flex justify-center items-center border border-red-600 rounded-xl overflow-hidden group">
                  <img
                    key={i}
                    src={content.url}
                    alt={`${content.imageId} - ${i + 1}`}
                    className="w-full h-full object-cover mx-1"
                  />

                  <button
                    onClick={() =>
                      handleDeleteImage(
                        collectionData[activeTab].categoryName,
                        content
                      )
                    }
                    className="absolute top-1 right-1 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                  >
                    <Trash2 size={20} />
                  </button>
                  <button
                    onClick={() =>
                      onEditClick(
                        collectionData[activeTab].categoryName,
                        content
                      )
                    }
                    className="absolute top-1 right-12 bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300"
                  >
                    <Pencil size={20} />
                  </button>
                </div>

                <div className="mt-2">
                  {content?.title && <h4>{content.title}</h4>}
                  {content?.description && (
                    <p className="mt-2 text text-xs">{content.description}</p>
                  )}
                  {content?.price && <h5>₹ {content.price}</h5>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

const styles = {
  main_container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  container: {
    width: "50%",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  heading: {
    marginBottom: "20px",
    fontSize: "20px",
    color: "#333",
  },
  formGroup: {
    marginBottom: "15px",
  },
  inputGroup: {
    marginBottom: "15px",
  },

  input: {
    width: "50%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#555",
  },
  button: {
    padding: "10px 15px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "14px",
  },
  select: {
    width: "50%",
    padding: "8px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  imagePreview: {
    marginTop: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "15px",
  },
  image: {
    width: "100%",
    maxWidth: "200px",
    borderRadius: "8px",
    border: "1px solid #ddd",
  },
  submitButton: {
    padding: "10px 15px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "14px",
    marginTop: "20px",
    width: "100%",
  },
};

export default Admin;
