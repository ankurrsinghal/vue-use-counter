import { ref } from "vue";

export function useCounter(initialValue = 0) {
  const counter = ref(initialValue);

  const inc = (n = 1) => (counter.value += n);
  const dec = (n = 1) => (counter.value -= n);
  const get = () => counter.value;
  const set = (n: number) => (counter.value = n);
  const reset = (val = initialValue) => {
    initialValue = val;
    return set(val);
  };

  return {
    counter,
    inc,
    dec,
    get,
    set,
    reset,
  };
}
