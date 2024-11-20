interface Properties {
  classes?: string;
}

function Mission(props: Properties) {
  const { classes } = props;
  return (
    <section id={`TheMission`} className={classes}>
      <h3>Mission</h3>
      <p>
        To extend the hands and feet of Jesus Christ to those we serve from the point of surrender that reveals the sweetest place on earth through
        life transforming hope found in relationship with Him.
      </p>
    </section>
  );
}
export default Mission;
