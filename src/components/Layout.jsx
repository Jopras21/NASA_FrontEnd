import Navigation from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
