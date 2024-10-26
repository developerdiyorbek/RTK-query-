import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { decrement, increment } from "../slices/counterSlice";

function Counter() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <section className="flex mt-6 flex-col items-center justify-center bg-gray-100 rounded-lg p-6 mx-auto shadow-lg max-w-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Counter</h2>
      <div className="text-3xl font-bold text-green-600 mb-4">{counter}</div>
      <div className="flex gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </section>
  );
}

export default Counter;
