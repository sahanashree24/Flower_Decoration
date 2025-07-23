import React, { useEffect, useState } from "react";
import AppRouter from './navigation/AppRouter'
import cong from "./firebaseconfig"; // Assuming the correct path to your configuration file
import { getDatabase, ref, onValue } from "firebase/database";
import { getFirestore, collection, setDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";

function App() {
  const firestoredb = getFirestore(cong);
  const [eventsData, setEventsData] = useState([
    {
      categoryName: "Marriage Events",
      images: [
        {url:""},
        {url:""},
        {url:""},
        {url:""},
        {url:""},
        {url:""},
        {url:""},
        {url:""},
        {url:""},
      ]
    },
    {
      categoryName: "Engagement Events",
      images: [
        {url:""},
        {url:""},
        {url:""},
        {url:""},
        {url:""},
        {url:""},
        {url:""},
        {url:""},
        {url:""},
      ]
    },
  ]);

  // useEffect(()=>{
  //   const insertData = async () => {
  //     try {
  //       const docRef = doc(firestoredb, "events", "eventsData");
  //       await setDoc(docRef, {
  //         events: eventsData,
  //       });
  //       console.log("Data inserted successfully!");
  //     } catch (error) {
  //       console.error("Error adding document: ", error);
  //     }
  //   };
  //   insertData();
  // },[])

  useEffect(() => {
    // Reference to the "eventsData" document in the "events" collection
    const docRef = doc(firestoredb, "events", "eventsData");

    // Listen for real-time updates to the document
    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data().data; // Access the 'events' field from the document
        console.log("DATA:::::", data);
        // setEvents(data); // Update state with the events data
      } else {
        console.log("No such document!");
      }
    });

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const database = getDatabase(cong);
  //   const collectionRef = ref(database, "testcollection");
  //   const fetchData = () => {
  //     onValue(collectionRef, (snapshot) => {
  //       const dataItem = snapshot.val();
  //       if (dataItem) {
  //         const displayItem = Object.values(dataItem);
  //         setEvents(displayItem);
  //       }
  //     });
  //   };
  //   fetchData();
  // }, []);

  return <AppRouter />
}

export default App
