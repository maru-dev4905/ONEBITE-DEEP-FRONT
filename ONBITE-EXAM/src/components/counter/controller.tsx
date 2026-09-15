import { Button } from "@/components/ui/button";
import {
  useCountStore,
  useDecreaseCount,
  useIncreaseCount,
} from "@/store/count";

export default function Controller() {
  // const { increase, decrease } = useCountStore((store) => store.actions);
  const increase = useIncreaseCount();
  const decrease = useDecreaseCount();

  return (
    <div>
      <Button onClick={decrease}>-</Button>
      <Button onClick={increase}>+</Button>
    </div>
  );
}
