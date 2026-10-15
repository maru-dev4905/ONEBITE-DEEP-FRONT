import { useCount } from "../store/count";

function Viewer() {
  const count = useCount();
  return <div>{count}</div>;
}

export default Viewer;
