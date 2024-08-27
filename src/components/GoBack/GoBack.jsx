import { Link } from "react-router-dom";

export default function GoBack({ href, children }) {
  return <Link to={href}>{children}</Link>;
}
