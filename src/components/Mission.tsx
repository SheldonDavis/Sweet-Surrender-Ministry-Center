interface Properties{
  classes?:string;
}

function Mission(props:Properties) {
  const {classes}=props
  return (
    <article id={`TheMission`} className={classes}>
      <h3>Mission</h3>
      <p>
        Loving, Training, Equipping and Empowering the Least, the Last, and the
        Lost with the Love of God.
      </p>
      <p>
        To extend His hands and feet to those we serve from the point of
        surrender that reveals the sweetest place on earth through life
        transforming hope found in relationship with Jesus Christ.
      </p>
    </article>
  );
}
export default Mission;
