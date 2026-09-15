import { useCountStore } from "../store/count";
import Viewer from "@/components/counter/viewer";
import Controller from "@/components/counter/controller";

export default function CounterPage() {
  return (
    <div>
      <h1 className="test-2xl font-bold">Counter</h1>
      <Viewer />
      <Controller />
    </div>
  );
}
