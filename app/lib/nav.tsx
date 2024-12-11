import Link from 'next/link';

export default function Nav() {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
      <div className="fixed bottom-4 mx-auto rounded bg-slate-300 p-2 shadow-md">
        <Link className="p-2" href="/">
          Index
        </Link>
        <Link className="p-2" href="/archive">
          Archive
        </Link>
        <Link className="p-2" href="/about">
          About
        </Link>
      </div>
    </div>
  );
}
