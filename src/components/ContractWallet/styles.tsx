import { classnames } from "classnames/tailwind";

export const wrapperStyle = classnames(
  "flex",
  "md:flex-row",
  "flex-col",
  "p-4"
);
export const leftBlockStyle = classnames(
  "flex-grow",
  "pb-5",
  "md:pb-0",
  "md:pr-10",
  "md:border-r-2",
  "border-b-2",
  "md:border-b-0",
  "border-gray-100",
  "space-y-1"
);
export const rightBlockStyle = classnames(
  "flex-grow",
  "md:pl-10",
  "pt-5",
  "md:pt-0"
);
export const subtitleStyle = classnames(
  "text-lg",
  "text-gray-600",
  "font-medium"
);
export const leftBlockInnerStyle = classnames("flex", "flex-row", "space-x-3");
export const editButtonStyle = classnames(
  "bg-base-blue",
  "p-3",
  "pr-2",
  "rounded-base",
  "hover:opacity-80",
  "transition",
  "focus:outline-none"
);
export const addButtonStyle = classnames(
  "border-2",
  "border-blue-400",
  "py-3",
  "px-10",
  "rounded-base",
  "text-base-blue",
  "text-sm",
  "focus:outline-none",
  "hover:opacity-80",
  "transition"
);
export const balanceWrapperStyle = classnames(
  "flex",
  "md:flex-row",
  "flex-col",
  "space-y-2",
  "md:space-y-0"
);
export const balanceFlexStyle = classnames("flex", "flex-col", "flex-grow");
export const ethBalanceStyle = classnames("text-xl", "text-base-blue");
export const usdBalanceStyle = classnames("text-gray-400", "text-sm");
