import { useState } from 'react';

interface Properties {
  openBtnTxt: string;
  ModalTitle?: string;
  BodyText: Array<string>;
}

function DialogPopup(props: Properties) {
  const { openBtnTxt, ModalTitle, BodyText } = props;
  const [isOpen, setIsOpen] = useState(false);
  function handle_toggleOpen() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <dialog open={isOpen}>
        {ModalTitle && <h3>{ModalTitle}</h3>}
        {BodyText.map((p, i) => {
          return <p key={i}>{p}</p>;
        })}
        <p>
          <a
            className={`btn`}
            onClick={() => {
              handle_toggleOpen();
            }}
          >
            Close
          </a>
        </p>
      </dialog>
      <p>
        <button
          className={`btn`}
          onClick={() => {
            handle_toggleOpen();
          }}
        >
          {openBtnTxt}
        </button>
      </p>
    </>
  );
}

export default DialogPopup;
