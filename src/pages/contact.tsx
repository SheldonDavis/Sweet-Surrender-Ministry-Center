//components
import QuestionsForm from "../components/QuestionsForm";
import Phone from "../components/PhoneInfo";
import Mail from "../components/mailingInfo";


function Contact(){


  return(
      <>
        <article>
            <h1>Contact</h1>
            <p>descriptive text for the contact page. tell people about ways to contact SSMC, etc.</p>
        </article>
        <Phone/>
        <Mail/>
        <QuestionsForm/>
      </>
  )
}
export default Contact