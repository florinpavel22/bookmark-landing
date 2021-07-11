import Container from "./subcomponents/Container";

const InnerSection = (props) => {
  const { children, contents } = props;
  return (
    <Container>
      <div className="container-center">
        <h2 className="inner-header">{contents.title}</h2>
        <p>{contents.content}</p>
        <div className="section-inner">{children}</div>
      </div>
    </Container>
  );
};

export default InnerSection;
