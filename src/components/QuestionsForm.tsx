import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import { FormEvent } from 'react';

//Environmental Variable prefix
const ENV = import.meta.env

//REGEX to validate Emails
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface SubmissionStatus{
  status:string;
  responseText:string;
}

async function sendNotification(target:EventTarget){
  let {ContactEmail, Question} = target
  ContactEmail = ContactEmail.value
  Question = Question.value

  //make sure email is valid
  if(!EMAIL_REGEX.test(ContactEmail)) return {status:'error',responseText:'Bad Contact Email'}  
  Question = JSON.stringify(Question)
  try {
    
    let theBody = ``
    theBody+=`<p><strong>New contact form submission from: ${ContactEmail}</strong></p>`
    theBody+=`<p>They would like to know:</p>`
    theBody+=`<p>${Question}</p>`

    const templateParams:Record<string, string> = {
      emailSubject:"testing email submission through website",
      emailBody:theBody,
    }
      
    await emailjs.send(ENV.VITE_EMAILJS_SERVICE_ID, ENV.VITE_EMAILJS_TEMPLATE_ID, templateParams, ENV.VITE_EMAILJS_PUBLIC_API_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.error(`ERROR: ${error}`);
          return {status:'error',responseText:'An error has occured'}
      });
    return {status:'success',responseText:'An email has been submitted.'}
  } catch (err) {
    console.error(`ERROR: ${err}`)
    return {status:'error',responseText:'An error has occured'}
  }
}


function QuestionsForm(){

            
        const [submissionResponse, setSubmissionResponse] = useState<SubmissionStatus>({status:'',responseText:''})

        async function handleSubmit(e:FormEvent){
            e.preventDefault()
            const target:EventTarget = e?.target
            if(!target) return 'target does not exists'
            const res = await sendNotification(target)
            // console.log(res)
            setSubmissionResponse({status:res.status,responseText:res.responseText})
        }

        useEffect(()=>{
            setTimeout(function(){
            setSubmissionResponse({status:'',responseText:''})
            },30000)
        },[submissionResponse])

    return(
        <>
            <div className={`subNotificationTile ${submissionResponse.status&&(`active`)} ${submissionResponse.status==='success'?(`good`):submissionResponse.status==='error'?(`bad`):('')} `}>
                <span>{submissionResponse.responseText}</span>
            </div>

            <form onSubmit={handleSubmit} >           
                <p>
                    <label htmlFor="ContactEmail">Contact Email:</label>&nbsp;
                    <input type='email' id='ContactEmail' name='ContactEmail' required placeholder='example@example.com'></input>
                </p>
                <p>
                    <label htmlFor="Question">Ask a question:</label><br/>
                    <textarea id='Question' name='Question' required placeholder='I would like to know more about...' rows={10} ></textarea>
                </p>
                <p>
                <button type='submit'>Send</button>
                {/* <input type='submit' value='Submit'/> */}
                </p>
            </form>
        </>
    )
}
export default QuestionsForm