const dynamic = () => {
  const MockDynamicComponent = (props) => <div {...props} />;
  MockDynamicComponent.preload = jest.fn();
  return MockDynamicComponent;
};

export default dynamic;
