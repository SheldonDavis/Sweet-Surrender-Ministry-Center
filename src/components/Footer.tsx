interface Properties {
  isMenuOpen: boolean;
}

function Footer(props: Properties) {
  const { isMenuOpen } = props;
  return (
    <footer className={`outerDrawer ${isMenuOpen ? `open` : `closed`}`}>
      <p>
        <a href={`/legal`}>Legal Disclosures</a>
      </p>
    </footer>
  );
}
export default Footer;
