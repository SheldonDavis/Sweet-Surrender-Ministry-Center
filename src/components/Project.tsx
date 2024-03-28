interface Properties {
  title: string;
  description: Array<string>;
  image: string;
  orientation: boolean;
}

function Project(props: Properties) {
  const { title, description, image, orientation } = props;
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
      </div>
    </section>
  );
}
export default Project;
