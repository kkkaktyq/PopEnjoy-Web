import React from "react";

// Minimal types & stubs to satisfy use-toast typing/imports
export type ToastActionElement = React.ReactNode;

export type ToastProps = {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  action?: ToastActionElement;
  children?: React.ReactNode;
};

// Minimal Toast component stub (not used visually by default)
export const Toast: React.FC<ToastProps> = ({ children }) => {
  return <>{children}</>;
};

export default Toast;
