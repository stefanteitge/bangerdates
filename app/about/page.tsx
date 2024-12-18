export default function About() {
  return (
    <div className="content">
      <main className="row-start-2 flex flex-col items-center gap-4 sm:items-start">
        <h1 className="text-5xl font-extrabold">Banger dates </h1>
        <div className="mb-4 text-2xl italic text-neutral-500">Belgium & Netherlands</div>
        <h2 className="text-3xl font-extrabold">About</h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-8 text-slate-600">
          <div>Made by Stefan Teitge</div>
          <div>2024</div>
          <div>
            <a href="https://github.com/stefanteitge/bangerdates">Contribute at Github</a>
          </div>
        </div>
      </main>
    </div>
  );
}
