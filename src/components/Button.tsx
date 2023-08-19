import { ReactNode } from "react";

interface Props {
  children: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "danger";
}
const Buttom = ({ children, onClick, variant = "primary" }: Props) => {
  return (
    <button onClick={onClick} type="button" className={`btn btn-${variant}`}>
      {children}
    </button>
  );
};

export default Buttom;
// app necesito un estado que se llame
