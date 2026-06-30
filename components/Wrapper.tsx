import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

function Wrapper({ children }: WrapperProps) {
  return (
    <div>
      {children}
    </div>
  );
}

export default Wrapper;