import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import { FormEvent } from 'react';

//icons
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Environmental Variable prefix
const ENV = import.meta.env;

//REGEX to validate Emails
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

interface SubmissionStatus {
  status: string;
  responseText: string;
}

async function sendNotification(target: HTMLFormElement) {
  let { ContactEmail, Question, FirstName, LastName, Prayers } = target;
  ContactEmail = ContactEmail.value;
  Question = Question.value;
  FirstName = FirstName.value;
  LastName = LastName.value;
  Prayers = Prayers.value;

  //make sure email is valid
  if (!EMAIL_REGEX.test(ContactEmail)) return { status: 'error', responseText: 'Bad Contact Email' };
  Question = JSON.stringify(Question);
  FirstName = JSON.stringify(FirstName);
  LastName = JSON.stringify(LastName);
  Prayers = JSON.stringify(Prayers);
  // console.log(Question);
  // console.log(FirstName);
  // console.log(LastName);
  // console.log(Prayers);
  // return { status: 'success', responseText: 'success testings' };
  try {
    let theBody = ``;
    theBody += `<p><strong>New contact form submission from: ${FirstName} ${LastName} - ${ContactEmail}</strong></p>`;
    theBody += `<p><strong>First Name:</strong> ${FirstName}</p>`;
    theBody += `<p><strong>Last Name:</strong> ${LastName}</p>`;
    theBody += `<p><strong>Email:</strong> ${ContactEmail}</p>`;
    theBody += `<p>They would like to know:</p>`;
    theBody += `<p>${Question}</p>`;
    theBody += `<p>Prayer Request:</p>`;
    theBody += `<p>${Prayers}</p>`;

    const templateParams: Record<string, string> = {
      emailSubject: 'Sweet Surrender Ministry Center Contact Form Submission',
      emailBody: theBody,
      emailSender: ContactEmail,
      emailQuestion: Question,
      emailSenderFName: FirstName,
      emailSenderLName: LastName,
      emialPrayers: Prayers,
    };

    // return { status: 'success', responseText: 'success testings' };
    await emailjs.send(ENV.VITE_EMAILJS_SERVICE_ID, ENV.VITE_EMAILJS_TEMPLATE_ID, templateParams, ENV.VITE_EMAILJS_PUBLIC_API_KEY).then(
      // (result) => {
      //   console.log(`email sent with response: ${result.text}`);
      // },
      (error) => {
        console.error(`ERROR: ${error}`);
        return {
          status: 'error',
          responseText: 'An error has occured, Please try again later or email SSMC directly.',
        };
      }
    );
    return { status: 'success', responseText: `An email has been submitted.` };
  } catch (err) {
    console.error(`ERROR: ${err}`);
    return { status: 'error', responseText: 'An error has occured' };
  }
}

function QuestionsForm() {
  const [submissionResponse, setSubmissionResponse] = useState<SubmissionStatus>({ status: '', responseText: '' });
  const [Loading, setLoading] = useState<boolean>(false);
  const [Message, setMessage] = useState<string>('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault();
    const target = e?.currentTarget;
    if (!target) return 'target does not exists';
    const res = await sendNotification(target);
    setSubmissionResponse({
      status: res.status,
      responseText: res.responseText,
    });
    if (res.status === 'success') {
      setMessage('Thank you for sending in a quesiton.');
    }
  }

  useEffect(() => {
    setLoading(false);
    setTimeout(function () {
      setSubmissionResponse({ status: '', responseText: '' });
    }, 30000);
  }, [submissionResponse]);

  return (
    <section>
      <div
        className={`subNotificationTile ${submissionResponse.status && `active`} ${
          submissionResponse.status === 'success' ? `good` : submissionResponse.status === 'error' ? `bad` : ''
        } `}
      >
        <span>{submissionResponse.responseText}</span>
      </div>
      {Message ? (
        <>
          <p>{Message}</p>
        </>
      ) : (
        <>
          <h3>Email Your Questions Here</h3>

          <form onSubmit={handleSubmit} className={`sideToSide`}>
            <div className={`contactInfo`}>
              <p>
                <label htmlFor={`FirstName`}>First Name:</label>&nbsp;
                <input type={`text`} id={`FirstName`} name={`FirstName`} required placeholder={`First Name`} />
              </p>
              <p>
                <label htmlFor={`LastName`}>Last Name:</label>&nbsp;
                <input type={`text`} id={`LastName`} name={`LastName`} required placeholder={`Last Name`} />
              </p>
              <p>
                <label htmlFor='ContactEmail'>Email:</label>&nbsp;
                <input type='email' id='ContactEmail' name='ContactEmail' required placeholder='example@example.com' />
              </p>
            </div>
            <div className={`questionsPrayers`}>
              <p>
                <label htmlFor='Question'>Questions For SSMC:</label>
                <br />
                <textarea id='Question' name='Question' required placeholder='I would like to know more about...' rows={5}></textarea>
              </p>
              <p>
                <label htmlFor='Prayers'>How Can We Pray For You?:</label>
                <br />
                <textarea id='Prayers' name='Prayers' required placeholder='I would like prayers for...' rows={5}></textarea>
              </p>
            </div>
            <p className={`sendButtonWrapper`}>
              {Loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} title='sending email' cursor='loading' spin />
                </>
              ) : (
                <button type='submit' className='btn'>
                  Send
                </button>
              )}
            </p>
          </form>
          <p>
            Or send an email directly to&nbsp;
            <a href={`mailto:contact@sweetsurrendermc.org`}>contact@sweetsurrendermc.org</a>.
          </p>
        </>
      )}
    </section>
  );
}
export default QuestionsForm;
