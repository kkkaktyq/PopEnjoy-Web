import React from "react";

type Props = {
  children: React.ReactNode;
};

// Minimal TooltipProvider stub — simply renders children
export const TooltipProvider: React.FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default TooltipProvider;
