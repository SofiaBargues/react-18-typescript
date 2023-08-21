import { ReactNode } from "react";
import { useState } from "react";

interface Props {
  children: ReactNode;
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
}

const Alert = ({ children, isVisible, setIsVisible }: Props) => {
  return (
    <div
      className={
        "alert alert-warning alert-dismissible fade" +
        (isVisible ? " show" : " ")
      }
      role="alert"
    >
      {children}
      <button
        onClick={() => setIsVisible(false)}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
