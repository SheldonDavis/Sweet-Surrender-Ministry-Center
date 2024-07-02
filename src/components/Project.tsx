import DialogPopup from './DialogPopup';

interface Wishlist {
  btnTxt: string;
  url: string;
}
interface Properties {
  id: string;
  title: string;
  description: Array<string>;
  readMore: Array<string>;
  image: string;
  orientation: boolean;
  wishlist: Array<Wishlist>;
}

function Project(props: Properties) {
  const { id, title, description, image, orientation, wishlist, readMore } = props;
  return (
    <section className={`projectCard ${orientation ? `rightToLeft` : `leftToRight`}`} key={`${id}_section`}>
      <p className={`projectImage`} key={`${id}_title`}>
        <img src={image} alt={title} />
      </p>
      <div className={`projectText`} key={`${id}_text`}>
        <h3 key={`${id}_title_text`}>{title}</h3>
        {description.map((p, ii) => {
          return <p key={ii}>{p}</p>;
        })}

        {wishlist.map((link: Wishlist, iii) => {
          return (
            <>
              <p key={iii}>
                <a href={link.url} target={`_blank`}>
                  {link.btnTxt}
                </a>
              </p>
            </>
          );
        })}

        {readMore.length > 0 && <DialogPopup openBtnTxt={`Read More`} ModalTitle={`Read more about ${title}`} BodyText={readMore} />}
      </div>
    </section>
  );
}
export default Project;
