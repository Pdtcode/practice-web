import { Navbar } from "./_components/navbar";

interface ProtectedLayoutProps {
  children: React.ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return ( 
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-centerbg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-400 to-slate-800">
      <Navbar />
      {children}
    </div>
   );
}
 
export default ProtectedLayout;