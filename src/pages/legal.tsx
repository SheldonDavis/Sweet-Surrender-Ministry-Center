import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const useScrollTo = (id: string) => {
  id = id.replace('#', ''); //replace hash mark

  useLayoutEffect(() => {
    if (id) {
      console.log(id);
      const el = document.getElementById(id);
      if (el) {
        const top = window.scrollY + el.getBoundingClientRect().top;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [id]);
};

function Legal() {
  const location = useLocation();
  const hash = location.hash.toString() || '';
  useScrollTo(hash);

  return (
    <>
      <h1>Legal</h1>
      <p className={`notes`}>legal disclaimers and other stuff needed.</p>
      <p>
        <a
          href={`https://charitylawyerblog.com/2019/12/23/quick-guide-to-writing-nonprofit-privacy-and-legal-notice-webpage/`}
          target='blank_'
        >
          take a look at this legal documentation guideline?
        </a>
      </p>

      <article id={`Legal`}>
        <h3>Legal</h3>
        <p className={`notes`}>
          this is nonsense latin gibberish, used as larger scale placeholder
          text
        </p>
        <p>
          Cupidatat sunt est laboris consectetur elit nulla voluptate aliquip do
          velit. Commodo nostrud irure fugiat ut commodo eiusmod in sit
          adipisicing enim nisi. Cupidatat commodo cupidatat deserunt
          adipisicing proident ad. Minim pariatur ullamco exercitation deserunt
          deserunt ipsum dolore elit velit eiusmod ad aute amet. Et deserunt
          pariatur quis adipisicing eu ea.
        </p>

        <p>
          Non occaecat amet adipisicing tempor. Magna Lorem ex incididunt ipsum
          aute eiusmod proident ad aliquip. Incididunt sunt est ut et anim minim
          culpa excepteur elit ut labore adipisicing.
        </p>

        <p>
          Voluptate deserunt fugiat cillum occaecat amet veniam qui et occaecat
          incididunt mollit qui reprehenderit. Dolor mollit occaecat id
          consectetur voluptate ea est. Ex excepteur laboris adipisicing
          deserunt in ad adipisicing aliqua in do aliquip nisi commodo Lorem.
          Deserunt dolor amet non consectetur mollit cupidatat aute aliqua
          eiusmod duis laboris ut nulla. Dolore incididunt ipsum velit mollit
          magna et.
        </p>

        <p>
          Sit incididunt deserunt laboris ea qui excepteur proident labore sit
          laboris ipsum ipsum. Ullamco incididunt velit aliqua deserunt ullamco
          fugiat id veniam sunt. Deserunt quis et enim minim qui exercitation
          elit nostrud esse consectetur nostrud officia. Eiusmod sint excepteur
          fugiat incididunt et enim incididunt cillum. Cillum nisi amet id
          labore enim mollit occaecat id sunt enim. Quis nostrud proident sunt
          ex. Sint ex minim ex culpa.
        </p>

        <p>
          Dolor dolor sunt laborum irure occaecat quis aliqua amet officia aute
          anim magna esse ex. Nulla nostrud commodo nisi occaecat fugiat
          proident sunt sit nulla duis exercitation. Proident exercitation
          consectetur amet elit laboris sit do cillum occaecat. Ex veniam non do
          veniam officia. Deserunt duis aliqua reprehenderit ipsum anim
          adipisicing eiusmod ex.
        </p>
      </article>

      <article id={`Terms_Conditions`}>
        <h3>Terms & Conditions</h3>
        <p className={`notes`}>
          this is nonsense latin gibberish, used as larger scale placeholder
          text
        </p>
        <p>
          Cupidatat sunt est laboris consectetur elit nulla voluptate aliquip do
          velit. Commodo nostrud irure fugiat ut commodo eiusmod in sit
          adipisicing enim nisi. Cupidatat commodo cupidatat deserunt
          adipisicing proident ad. Minim pariatur ullamco exercitation deserunt
          deserunt ipsum dolore elit velit eiusmod ad aute amet. Et deserunt
          pariatur quis adipisicing eu ea.
        </p>

        <p>
          Non occaecat amet adipisicing tempor. Magna Lorem ex incididunt ipsum
          aute eiusmod proident ad aliquip. Incididunt sunt est ut et anim minim
          culpa excepteur elit ut labore adipisicing.
        </p>

        <p>
          Voluptate deserunt fugiat cillum occaecat amet veniam qui et occaecat
          incididunt mollit qui reprehenderit. Dolor mollit occaecat id
          consectetur voluptate ea est. Ex excepteur laboris adipisicing
          deserunt in ad adipisicing aliqua in do aliquip nisi commodo Lorem.
          Deserunt dolor amet non consectetur mollit cupidatat aute aliqua
          eiusmod duis laboris ut nulla. Dolore incididunt ipsum velit mollit
          magna et.
        </p>

        <p>
          Sit incididunt deserunt laboris ea qui excepteur proident labore sit
          laboris ipsum ipsum. Ullamco incididunt velit aliqua deserunt ullamco
          fugiat id veniam sunt. Deserunt quis et enim minim qui exercitation
          elit nostrud esse consectetur nostrud officia. Eiusmod sint excepteur
          fugiat incididunt et enim incididunt cillum. Cillum nisi amet id
          labore enim mollit occaecat id sunt enim. Quis nostrud proident sunt
          ex. Sint ex minim ex culpa.
        </p>

        <p>
          Dolor dolor sunt laborum irure occaecat quis aliqua amet officia aute
          anim magna esse ex. Nulla nostrud commodo nisi occaecat fugiat
          proident sunt sit nulla duis exercitation. Proident exercitation
          consectetur amet elit laboris sit do cillum occaecat. Ex veniam non do
          veniam officia. Deserunt duis aliqua reprehenderit ipsum anim
          adipisicing eiusmod ex.
        </p>
      </article>

      <article id={`Privacy_Notice`}>
        <h3>Privacy Notice</h3>
        <p className={`notes`}>
          this is nonsense latin gibberish, used as larger scale placeholder
          text
        </p>
        <p>
          Cupidatat sunt est laboris consectetur elit nulla voluptate aliquip do
          velit. Commodo nostrud irure fugiat ut commodo eiusmod in sit
          adipisicing enim nisi. Cupidatat commodo cupidatat deserunt
          adipisicing proident ad. Minim pariatur ullamco exercitation deserunt
          deserunt ipsum dolore elit velit eiusmod ad aute amet. Et deserunt
          pariatur quis adipisicing eu ea.
        </p>

        <p>
          Non occaecat amet adipisicing tempor. Magna Lorem ex incididunt ipsum
          aute eiusmod proident ad aliquip. Incididunt sunt est ut et anim minim
          culpa excepteur elit ut labore adipisicing.
        </p>

        <p>
          Voluptate deserunt fugiat cillum occaecat amet veniam qui et occaecat
          incididunt mollit qui reprehenderit. Dolor mollit occaecat id
          consectetur voluptate ea est. Ex excepteur laboris adipisicing
          deserunt in ad adipisicing aliqua in do aliquip nisi commodo Lorem.
          Deserunt dolor amet non consectetur mollit cupidatat aute aliqua
          eiusmod duis laboris ut nulla. Dolore incididunt ipsum velit mollit
          magna et.
        </p>

        <p>
          Sit incididunt deserunt laboris ea qui excepteur proident labore sit
          laboris ipsum ipsum. Ullamco incididunt velit aliqua deserunt ullamco
          fugiat id veniam sunt. Deserunt quis et enim minim qui exercitation
          elit nostrud esse consectetur nostrud officia. Eiusmod sint excepteur
          fugiat incididunt et enim incididunt cillum. Cillum nisi amet id
          labore enim mollit occaecat id sunt enim. Quis nostrud proident sunt
          ex. Sint ex minim ex culpa.
        </p>

        <p>
          Dolor dolor sunt laborum irure occaecat quis aliqua amet officia aute
          anim magna esse ex. Nulla nostrud commodo nisi occaecat fugiat
          proident sunt sit nulla duis exercitation. Proident exercitation
          consectetur amet elit laboris sit do cillum occaecat. Ex veniam non do
          veniam officia. Deserunt duis aliqua reprehenderit ipsum anim
          adipisicing eiusmod ex.
        </p>
      </article>
    </>
  );
}

export default Legal;
