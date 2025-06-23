export default function HomePage() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white text-gray-900">
      <div className="max-w-2xl mx-auto text-center px-4">
        <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-blue-800">
          akshayderives.io
        </h1>
        <p className="text-lg mb-10 text-gray-600">
          Visualizing calculus. Exploring math & physics. Showcasing passion projects.
        </p>

        <div className="grid grid-cols-2 gap-6 justify-center">
          <a
            href="/calculus"
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-3 px-5 rounded-xl shadow-sm transition"
          >
            Learn Calculus
          </a>
          <a
            href="/projects"
            className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-3 px-5 rounded-xl shadow-sm transition"
          >
            View Projects
          </a>
          <a
            href="/blog"
            className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 font-semibold py-3 px-5 rounded-xl shadow-sm transition"
          >
            Read Blog
          </a>
          <a
            href="/about"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-5 rounded-xl shadow-sm transition"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}
