//components
import QuestionsForm from "../components/QuestionsForm";
import Phone from "../components/PhoneInfo";
import Mail from "../components/MailingInfo";


function Contact(){


  return(
      <>
        <article>
            <h1>Contact</h1>
            <p className={`notes`}>descriptive text for the contact page. tell people about ways to contact SSMC, etc.</p>
        </article>
        <Phone/>
        <Mail/>
        <QuestionsForm/>
      </>
  )
}
export default Contact