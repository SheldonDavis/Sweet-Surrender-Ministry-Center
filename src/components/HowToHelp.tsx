interface Properties {
  classes: string;
}
function HowToHelp(props: Properties) {
  const { classes } = props;
  return (
    <section id={`HowToHelp`} className={classes}>
      <h3>How You Can Help</h3>
      <ul>
        <li>
          <p>
            Tax Deductible Monetary <a href={`/donate`}>Donations</a>
          </p>
        </li>
        <li>
          <p>Volunteer Service Time</p>
        </li>
        <li>
          <p>
            <a href={`/donate`}>Donation</a> of Project Specific Goods
          </p>
        </li>
        <li>
          <p>Pray for the Ministry and Those We Serve</p>
        </li>
      </ul>
    </section>
  );
}
export default HowToHelp;
