const Image = (props) => {
  const { priority, loading, unoptimized, objectFit, fill, ...rest } = props;
  return <img {...rest} />;
};

export default Image;
