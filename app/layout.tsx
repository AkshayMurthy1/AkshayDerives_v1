import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-black font-sans">
        <header className="p-4 bg-gray-100 shadow-md sticky top-0 z-50">
          <nav className="flex justify-between max-w-5xl mx-auto">
            <h1 className="text-xl text-amber-300 font-bold">akshayderives.io</h1>
            <div className="space-x-4">
              <a href="/" className="hover:underline text-amber-950" >Home</a>
              <a href="/calculus" className="hover:underline text-amber-950">Calculus</a>
              <a href="/projects" className="hover:underline text-amber-950">Projects</a>
              <a href="/blog" className="hover:underline text-amber-950">Blog</a>
              <a href="/about" className="hover:underline text-amber-950">About</a>
            </div>
          </nav>
        </header>
        <main className="max-w-5xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}