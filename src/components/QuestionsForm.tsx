import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import { FormEvent } from 'react';

//icons
import {faSpinner} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

//Environmental Variable prefix
const ENV = import.meta.env

//REGEX to validate Emails
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface SubmissionStatus{
  status:string;
  responseText:string;
}

async function sendNotification(target:HTMLFormElement){
  let {ContactEmail, Question} = target
  ContactEmail = ContactEmail.value
  Question = Question.value

  // console.log(target)
  // console.log(ContactEmail)
  // console.log(Question)
  //return{status:'success',responseText:'success testings'}
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
          console.log(`email sent with response: ${result.text}`);
      }, (error) => {
          console.error(`ERROR: ${error}`);
          return {status:'error',responseText:'An error has occured'}
      });
      return {status:'success',responseText:`An email has been submitted.`}
  } catch (err) {
    console.error(`ERROR: ${err}`)
    return {status:'error',responseText:'An error has occured'}
  }
}


function QuestionsForm(){

        const [submissionResponse, setSubmissionResponse] = useState<SubmissionStatus>({status:'',responseText:''})
        const [Loading,setLoading] = useState<boolean>(false)
        const [Message,setMessage] = useState<string>("")

        async function handleSubmit(e: FormEvent<HTMLFormElement>){
            setLoading(true);
            e.preventDefault()
            const target = e?.currentTarget           
            if(!target) return 'target does not exists'
            const res = await sendNotification(target)
            setSubmissionResponse({status:res.status,responseText:res.responseText})
            if(res.status==="success"){
              setMessage("Thank you for sending in a quesiton.")
            }
        }

        useEffect(()=>{
          setLoading(false)
          setTimeout(function(){
            setSubmissionResponse({status:'',responseText:''})
          },30000)
        },[submissionResponse])

    return(
        <article>
            <div className={`subNotificationTile ${submissionResponse.status&&(`active`)} ${submissionResponse.status==='success'?(`good`):submissionResponse.status==='error'?(`bad`):('')} `}>
                <span>{submissionResponse.responseText}</span>
            </div>
          {Message?(
              <>
                <p>{Message}</p>
              </>
          ):(
            <>
              <h3>Have a question for Sweet Surrender?</h3>

          <p>need to know if there are any additional information need to be gathered during this form.</p>
            
              <form onSubmit={handleSubmit} >
                  <p>
                      <label htmlFor="ContactEmail">Your Email:</label>&nbsp;
                      <input type='email' id='ContactEmail' name='ContactEmail' required placeholder='example@example.com'/>
                  </p>
                  <p>
                      <label htmlFor="Question">Your Question:</label><br/>
                      <textarea id='Question' name='Question' required placeholder='I would like to know more about...' rows={10} ></textarea>
                  </p>
                  <p>
                    {
                      Loading?(
                        <>
                        <FontAwesomeIcon icon={faSpinner} title='sending email' cursor='loading' spin/>
                        </>
                      ):(
                        <button type='submit' className='btn'>Send</button>
                      )
                    }
                  </p>
              </form>
            </> 
          )}
        </article>
    )
}
export default QuestionsForm