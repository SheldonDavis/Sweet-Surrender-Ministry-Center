interface Properties {
  classes?: string;
}

function VisionForTheFuture(props: Properties) {
  const { classes } = props;
  return (
    <section id={`VisionOfTheFuture`} className={classes}>
      <h3>Vision for the Future of SSMC</h3>
      <p>
        The overarching vision is to secure a physical brick and mortar location for expanded operations of current and future projects and evolving
        opportunities offered for those we serve.
      </p>
    </section>
  );
}
export default VisionForTheFuture;
