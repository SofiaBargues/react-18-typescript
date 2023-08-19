import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  const isVisible = true;
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
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
