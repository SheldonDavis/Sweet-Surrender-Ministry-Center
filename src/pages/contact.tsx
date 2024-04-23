//components
import QuestionsForm from '../components/QuestionsForm';
import Phone from '../components/PhoneInfo';
import Mail from '../components/MailingInfo';
// import Email from '../components/EmailInfo';

function Contact() {
  return (
    <>
      <section>
        <h1>Contact</h1>
        {/* <p className={`notes`}>descriptive text for the contact page. tell people about ways to contact SSMC, etc.</p> */}
      </section>

      <div className={`sideToSide`}>
        <Phone />
        <Mail />
      </div>
      {/* <Email/> */}
      <QuestionsForm />
    </>
  );
}
export default Contact;
