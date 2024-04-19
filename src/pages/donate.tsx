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

        <div className={`ZeffyFormWrapper`}>
          <iframe
            title='Donation form powered by Zeffy'
            src='https://www.zeffy.com/en-US/embed/donation-form/1816337f-ba23-45e8-9d0d-6e106bed3ceb'
            className={`ZeffyFormIFrame`}
            allowTransparency
          ></iframe>
        </div>
      </section>
      <section>
        <h3>Other Ways to Contribute</h3>
        <p>
          <strong>
            <u>United State Postal Service:</u>
          </strong>{' '}
          Checks made payable to Sweet Surrender Ministry Center can be mailed
          to P.O. Box 206, Alum Bank, PA 15521. After a successful banking
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
        <p className={`notes`}>
          link to amazon wishlist: maybe we link back to the projects page
          instead so they can get more information on the project they wish to
          donate a gift to?
        </p>
      </section>
    </>
  );
}

export default Donate;
