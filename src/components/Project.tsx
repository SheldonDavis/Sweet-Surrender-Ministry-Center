interface Properties {
  title: string;
  description: Array<string>;
  image: string;
  orientation: boolean;
  link?: string;
}

function Project(props: Properties) {
  const { title, description, image, orientation, link } = props;
  return (
    <section
      className={`projectCard ${orientation ? `rightToLeft` : `leftToRight`}`}
    >
      <p className={`projectImage`}>
        <img src={image} alt={title} />
      </p>
      <div className={`projectText`}>
        <h3>{title}</h3>
        {description.map((p, i) => {
          return <p key={i}>{p}</p>;
        })}
        {link && (
          <>
            <a href={link} target={`_blank`}>
              View Amazon Wishlist
            </a>
            <p className={`notes`}>
              This is will be a link to the amazon wishlist if there is an
              associated wishlist for this project
            </p>
          </>
        )}
      </div>
    </section>
  );
}
export default Project;
