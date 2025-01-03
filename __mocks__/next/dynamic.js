const dynamic = () => {
  const MockDynamicComponent = (props) => <div {...props} />;
  MockDynamicComponent.preload = jest.fn(); // Si necesitas simular `preload`
  return MockDynamicComponent;
};

export default dynamic;
