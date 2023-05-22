export const Link = ({ href = "/", children }) => {
  return (
    <a href={href} title="title">
      {children}
    </a>
  );
};
