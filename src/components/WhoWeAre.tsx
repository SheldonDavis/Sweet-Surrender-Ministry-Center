// import { useState,  Dispatch, SetStateAction } from 'react';//useEffect,
// import {db} from '../config/firebaseConfig';
// import {getDocs, collection, query, where, limit, orderBy, Timestamp} from 'firebase/firestore';

// interface WhoWeArePost {
//     id?:string;
//     goLive?:Timestamp;
//     displayText?:Array<string>
// }

// async function fetchCurrentWhoWeAre(){
//     const date = new Date()
//     const q = query(collection(db,'WhoWeAre'), where('goLive', '<=', date), orderBy('goLive','desc'), limit(1));
//     const querySnapshot = await getDocs(q)
//     const theOBJ = querySnapshot.docs[0].data()

//     return {'id':querySnapshot.docs[0].id, ...theOBJ}
// }
interface Properties {
  classes?: string;
}

function WhoWeAre(props: Properties) {
  //props: Properties
  // const [data, setData] = useState<WhoWeArePost>({})
  // const {setIsLoading} = props

  // async function fetchData(){
  //     const theData:WhoWeArePost = await fetchCurrentWhoWeAre();
  //     setData(theData);
  // }

  // useEffect(()=>{
  //     fetchData();
  // },[]);

  // useEffect(()=>{d
  //     setIsLoading(false);
  // },[data, setIsLoading]);
  const { classes } = props;
  return (
    <>
      {/* {data?.id ? (
            <section id='WhoWeAre'>
                <h3>Who We Are</h3>
                {data?.displayText?.map((p:string, i:number)=>{
                    return(
                        <p key={i}>{p}</p>
                    )
                })}
            </section>
        ):(
            <section id='WhoWeAre'>
                <h3>Who We Are</h3>
                <p>We are a 501(c)(3) nonprofit newly organized in October 2023 that seeks to provide charitable services to individuals and families of Bedford County, PA. With an ambitious and eager beginning, this nonprofit is getting started with four foundational projects: Birthday Blessing Box, H.O.P.E. Box, Manna Monday, and Second Chance program. </p>
            </section>
        )} */}

      <section id='WhoWeAre' className={classes}>
        <h3>Who Is SSMC</h3>
        <p>
          Sweet Surrender Ministry Center (SSMC) is a 501(c)(3) nonprofit newly
          organized in October 2023 that seeks to provide charitable services to
          individuals and families of Bedford County, PA. With an ambitious and
          eager beginning, this nonprofit is getting started with four
          foundational projects: Birthday Blessing Box, H.O.P.E. Box, Manna
          Monday, and Second Chance program.{' '}
        </p>
      </section>
    </>
  );
}

export default WhoWeAre;
