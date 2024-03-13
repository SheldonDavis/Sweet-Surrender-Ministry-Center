
// import { useState, useEffect } from 'react'
// import {getDocs, collection} from "firebase/firestore"
// import {db} from '../config/firebaseConfig.tsx';
import NAV from '../components/nav';

//importing components
import WhoWeAre from '../components/WhoWeAre';
import OurMission from '../components/OurMission.tsx';
import VisionOfTheFuture from '../components/VisionOfTheFuture.tsx';
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
        <NAV/>
        <WhoWeAre 
          //setIsLoading={setIsLoading}
        />
        <VisionOfTheFuture/>
        <HowToHelp/>
        <OurMission/>
        <CoreValues/>

        {
          /*
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
          */
        }
    </>
  )
}

export default Home
