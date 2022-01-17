import ScrollToTopButton from "../ScrollToTopButton";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    {children}
    <ScrollToTopButton />
  </>
);

export default Layout;
