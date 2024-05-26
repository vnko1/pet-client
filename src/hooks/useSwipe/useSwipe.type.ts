export type UseSwipeProps = {
  left?: () => void;
  right?: () => void;
  axis?: "clientX" | "clientY";
  touchDistinction?: number;
  enableSwipeUpToScreen?: number;
  enableSwipe?: boolean;
};
