import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="w-full max-w-full  lg:max-w-7xl">{children}</div>;
};

export const Section = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  return (
    <div className="w-full max-w-full lg:max-w-7xl mx-auto py-32 px-4 ">
      {title ? <h2 className="text-2xl mb-8">{title}</h2> : null}
      {children}
    </div>
  );
};

export default MainLayout;
