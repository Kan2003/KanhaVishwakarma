import { ReactNode, ElementType, HTMLAttributes } from "react";
import { useReveal } from "../hooks/useReveal";

type Props = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3;
  as?: ElementType;
};

export default function Reveal({ children, delay = 0, as: As = "div", className, ...rest }: Props) {
  const { ref, shown } = useReveal<HTMLElement>();
  const cls = `kc-reveal ${delay ? `d${delay}` : ""} ${shown ? "in" : ""} ${className ?? ""}`.trim();
  return (
    <As ref={ref as any} className={cls} {...rest}>
      {children}
    </As>
  );
}
