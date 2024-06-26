interface Properties {
  classes?: string;
}
function CoreValues(props: Properties) {
  const { classes } = props;
  return (
    <section id={`CoreValues`} className={classes}>
      <h3>Core Values</h3>
      <p>
        <strong>
          <u>See them.</u>
        </strong>
        <br />
        <i>Hebrews 2:10 </i> - God, for whom and through whom everything was made...
      </p>
      <p>
        <strong>
          <u>Serve them.</u>
        </strong>
        <br />
        <i>Matthew 22:37-39 </i> - Love the LORD your God with all your heart, all your soul, and all your mind... Love your neighbor as yourself.
      </p>

      <p>
        <strong>
          <u>Affirm them.</u>
        </strong>
        <br />
        <i>Acts 17:28</i> - For in Him, we live and move and have our being.
      </p>

      <p>
        <strong>
          <u>Seek wisdom.</u>
        </strong>
        <br />
        <i>James 3:17 </i> - the wisdom from above is first of all pure. It is also peace loving, gentle at all times, and willing to yield to others. It is full of mercy and the fruit of good deeds. <br />
        It shows no favoritism and is always sincere.
      </p>
    </section>
  );
}
export default CoreValues;
