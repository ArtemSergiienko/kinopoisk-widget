import { ref, onBeforeUnmount } from "vue";

export const useCurrentTime = (): {currentTime: Date} => {
  const currentTime = ref<any>(new Date());

  const updateCurrentTime = () => {
    currentTime.value = new Date();
  };

  const updateTimeInterval: NodeJS.Timer = setInterval(updateCurrentTime, 1000);

  onBeforeUnmount(() => {
    clearInterval(updateTimeInterval);
  });

  return {
    currentTime,
  };
};
