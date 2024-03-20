import { useState, useEffect } from 'react'
import {getDocs, collection, query, where, documentId, limit} from 'firebase/firestore'
import {useParams} from 'react-router-dom'


import {db} from '../config/firebaseConfig.tsx';


interface SlugData {
    id?:string;
    name?:string;
    age?:number;
}

async function fetchSpecificItemFromFirestore(id:string|null|undefined){
    const q = query(collection(db,'users'), where(documentId(), '==', id), limit(1));
    const querySnapshot = await getDocs(q)
    console.log(querySnapshot)
    const theOBJ = querySnapshot.docs[0].data()
    return {'id':querySnapshot.docs[0].id, ...theOBJ}
}

function About() {

    const {id} = useParams()

    const [data, setData] = useState<SlugData>({})

    async function fetchData(id:string|null|undefined){
        const theData:SlugData = await fetchSpecificItemFromFirestore(id);
        setData(theData);
    }
    
    useEffect(()=>{
        if(id){
            fetchData(id);
        }
    },[id]);

    return(        
        <>
            {(JSON.stringify(data)==='{}') ?(
            <>
                <p>no record found</p>
            </>
            ):(
            <>
                <p>{data.name}</p>
                <p>{data.age}</p>
            </>
            )}

        </>
    )
}
export default About