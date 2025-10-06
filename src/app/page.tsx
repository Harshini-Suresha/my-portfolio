export default function Home(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center p-6">
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-24 h-24 rounded-full border-4 border-orange-500 mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">
        Hey, I'm <span className="text-orange-600">Your Name</span> 👋
      </h1>
      <p className="text-gray-600 mb-6">
        Welcome to my corner of the internet. Here's a little about my journey so far.
      </p>

      <div className="flex gap-4 mb-6">
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-600"
        >
          <i className="fa-brands fa-github fa-xl"></i>
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-600"
        >
          <i className="fa-brands fa-twitter fa-xl"></i>
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-600"
        >
          <i className="fa-brands fa-linkedin fa-xl"></i>
        </a>
      </div>

      <div className="flex gap-6 text-orange-600 font-semibold">
        <a href="/blog">blog ↗</a>
        <span>-</span>
        <a href="/proof-of-work">proof-of-work ↗</a>
      </div>

      <div className="bg-white rounded-xl shadow-md mt-10 p-6 text-left max-w-xl font-mono border">
        <p className="text-green-700">yourname@dev:~$ whoami</p>
        <p className="text-gray-700 ml-6">
          yourname - CS graduate passionate about AI, systems programming, and building things that matter.
        </p>
        <p className="text-gray-700 ml-6">
          Currently working at <span className="text-red-500">Couchbase</span>, a distributed database company.
        </p>
        <p className="text-green-700">yourname@dev:~$</p>
      </div>
    </main>
  );
}
