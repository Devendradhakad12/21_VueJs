import { ref } from "vue";

// Counter Composable

export const useCounter = (initialValue = 0) => {
  const count = ref(initialValue);

  const increment = () => {
    count.value += 1;
  };
  const decrement = () => {
    count.value -= 1;
  };

  return {
    count,
    increment,
    decrement,
  };
};
