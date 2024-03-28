interface Properties {
  classes?: string;
}

function VisionOfTheFuture(props: Properties) {
  const { classes } = props;
  return (
    <section id={`VisionOfTheFuture`} className={classes}>
      <h3>Vision of the Future of SSMC</h3>
      <p>
        With anticipated growth stemming from our four start-up projects, the
        overarching vision is to secure a physical brick and mortar location for
        expanded operations of existing projects and evolving opportunities
        offered for those we serve. Some of the envisioned growth for the future
        location of SSMC are: Loads of Love laundry assistance, Community Garden
        space, Transitional Housing in connection with the Second Chance
        program, and meeting space available to outside human service programs
        such as AA, Celebrate Recovery, Stephen Ministries, Grief Share, or
        other programs of the like.
      </p>
    </section>
  );
}
export default VisionOfTheFuture;
