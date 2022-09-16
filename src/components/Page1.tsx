import { Link } from "react-router-dom";

export const Page1 = () => {
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to="detailA">DetailA</Link>
      <br />
      <Link to="detailB">DetailB</Link>
    </div>
  );
};
