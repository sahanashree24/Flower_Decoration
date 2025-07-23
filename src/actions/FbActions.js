import {
  getFirestore,
  doc,
  updateDoc,
  arrayUnion,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getStorage,
  deleteObject,
} from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import cong from "../firebaseconfig";

const notify = (message) => toast(message);
const storage = getStorage(cong);
const firestoredb = getFirestore(cong);
const eventDocRef = doc(firestoredb, "events", "eventsData");

export const editDataInFirestore = async (
  updatedData,
  eventDocRef,
  categoryName,
  dataId,
  resetFields
) => {
  try {
    const docSnapshot = await getDoc(eventDocRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data().data;

      // Find the category
      const updatedCategories = data.map((category) => {
        if (category.categoryName === categoryName) {
          return {
            ...category,
            data: category.data.map((item) =>
              item.id === dataId ? { ...item, ...updatedData } : item
            ),
          };
        }
        return category;
      });

      await updateDoc(eventDocRef, { data: updatedCategories });

      notify(`Item updated in category: ${categoryName}`);
    } else {
      alert("No category found in Firestore.");
    }
    resetFields();
  } catch (error) {
    console.error("Error updating item:", error);
  }
};

export const handleDeleteImage = async (categoryName, content) => {
  try {
    deleteImageFromStorage(categoryName, content.imageId);

    const docSnapshot = await getDoc(eventDocRef);
    if (docSnapshot.exists()) {
      const data = docSnapshot.data().data;
      const updatedData = data.map((category) => {
        if (category.categoryName === categoryName) {
          return {
            ...category,
            data: category.data.filter((item) => item.id !== content.id),
          };
        }
        return category;
      });
      await updateDoc(eventDocRef, { data: updatedData });
      notify("Image is deleted");
    }
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};

export const deleteImageFromStorage = async (categoryName, imageId) => {
  try {
    const imageRef = ref(storage, `Events/${categoryName}/${imageId}`);
    await deleteObject(imageRef);
    return true;
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};
