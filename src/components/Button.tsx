import { ReactNode } from "react";
import "./Button.css";
interface Props {
  children: string;
  onClick: () => void;
  variant?: "primary" | "secondary" | "warning" | "danger";
}
const Buttom = ({ children, onClick, variant = "primary" }: Props) => {
  return (
    <button onClick={onClick} type="button" className={`btn`}>
      {children}
    </button>
  );
};

export default Buttom;
