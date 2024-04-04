// import { useState, useEffect } from 'react'
// import {getDocs, collection} from "firebase/firestore"
// import {db} from '../config/firebaseConfig.tsx';

//importing components
import WhoWeAre from '../components/WhoWeAre';
import Mission from '../components/Mission.tsx';
import VisionForTheFuture from '../components/VisionForTheFuture.tsx';
import CoreValues from '../components/CoreValues.tsx';
import HowToHelp from '../components/HowToHelp.tsx';

// interface User{
//   id:string;
//   name?:string;
//   age?:number;
// }

// async function fetchAllDataFromFirestore(){
//   const querySnapshot = await getDocs(collection(db,"users"))
//   const data:Array<User> = [];
//   querySnapshot.forEach((doc)=>{
//     data.push({id:doc.id, ...doc.data()});
//   })
//   return data
// }

function Home() {
  // const [data, setData] = useState<Array<User>>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(true);

  // async function fetchData(){
  //   const data:Array<User> = await fetchAllDataFromFirestore();
  //   setData(data);
  // }

  // useEffect(()=>{
  //   fetchData();
  // },[]);
  // useEffect(()=>{
  //   setIsLoading(false);
  // },[data]);

  return (
    <>
      <h1>Sweet Surrender Ministry Center</h1>
      <WhoWeAre classes={``} />
      <VisionForTheFuture classes={`coloredBG light`} />
      <Mission classes={``} />
      <CoreValues classes={``} />
      <HowToHelp classes={`coloredBG dark`} />

      {/*
        isLoading?
        <>
          <p>loading...</p>
        </>
        :(
          data.map((user:User)=>{
            return(
                <div key={user.id}>
                  <p><a href={`/about/${user.id}`}>About {user.name}</a></p>
                  <p>{user.id}</p>
                  <p>{user.age}</p>
                </div>
            )
          })
          )
          */}
    </>
  );
}

export default Home;
