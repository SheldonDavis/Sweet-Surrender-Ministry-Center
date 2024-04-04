import DialogPopup from '../components/DialogPopup';

function Donate() {
  return (
    <>
      <h1>Donate</h1>

      <section>
        <p>
          It is with sincere gratitude that your donation is received into Sweet
          Surrender Ministry Center as a vessel through which the hands and feet
          of Jesus are extended into the lives of those in Bedford County, PA
          and surrounding communities in ways that reveal life transforming hope
          found in relationship with Jesus Christ. Thank You, we couldn't do it
          without YOU!
        </p>
      </section>
      <section className='coloredBG light'>
        <h3>Online Donation Form</h3>

        <DialogPopup
          openBtnTxt={`Why Zeffy?`}
          ModalTitle={`Why Zeffy?`}
          BodyText={[
            `SSMC has chosen the Zeffy online giving platform for all online donation transactions as well as managing all donor giving records made to the ministry center. Zeffy ensures that every dollar you donate the Sweet Surrender Ministry Center goes to SSMC by not withholding any transaction fees from your generous charitable donation. Upon checkout without your online donation, you will be given the opportunity to increase your donation by allocating a gift to Zeffy for their services to many nonprofit organizations like SSMC. Whether or not you choose this option in no way affects your donation designation to Sweet Surrender Ministry Center. Your online donation will conclude with a tax deductible charitable donation receipt emailed directly to the email address you provide.`,
          ]}
        />

        <form>
          <p className={`notes`}>placeholder form</p>
          <p>
            <label>donator name </label>
            <input type='text' />
          </p>
          <p>
            <label>donation amount </label>
            <input type='text' />
          </p>
          <p>
            <label>large text area </label>
            <textarea></textarea>
          </p>
          <p>
            <input type='checkbox' />
            <label> Checkbox</label>
          </p>
        </form>
      </section>
      <section>
        <h3>Other Ways to Contribute</h3>
        <p>
          <strong>
            <u>United State Postal Service:</u>
          </strong>{' '}
          Checks made payable to Sweet Surrender Ministry Center can be mailed
          to PO Box _____, Alum Bank, PA 15521. After a successful banking
          transaction, a tax deductible charitable donation receipt will be
          mailed to the person and address listed on the donation check
          received.
        </p>
        <p>
          <strong>
            <u>Project Specific Goods:</u>
          </strong>{' '}
          Clicking the links below will redirect your online browser to a
          corresponding Amazon List that has been established to correspond to
          the projects and/or routine operations of Sweet Surrender Ministry
          Center. Using this option does not guarantee a charitable donation
          receipt as no identifying information for the donor is collected or
          transmitted to SSMC. These lists are being offered to meet the
          donation comfort level for each type of donor, so everyone who wants
          to contribute has a way to do so. Each list is a guide for product
          examples and are not meant to restrict your donation creativity within
          the scope of vision for each project.
        </p>
      </section>
    </>
  );
}

export default Donate;
