import { useIncrease, useDecrease } from "../store/count";

function Controller() {
  const increase = useIncrease();
  const decrease = useDecrease();

  return (
    <div className="flex gap-2">
      <button
        className="text-5xl w-20 h-20 rounded-2xl border-white border cursor-pointer"
        onClick={increase}
      >
        +
      </button>
      <button
        className="text-5xl w-20 h-20 rounded-2xl border-white border cursor-pointer"
        onClick={decrease}
      >
        -
      </button>
    </div>
  );
}

export default Controller;
