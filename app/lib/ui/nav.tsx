import Link from 'next/link';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function Nav() {
  return (
    <div className="fixed left-0 top-0 flex w-full items-center justify-center">
      <div className="fixed bottom-4 rounded bg-slate-400 p-2 ring-1 ring-slate-500">
        <Link className="p-2" href="/">
          <HomeOutlinedIcon fontSize="large" />
        </Link>
        <Link className="p-2" href="/archive">
          <ArchiveOutlinedIcon fontSize="large" />
        </Link>
        <Link className="p-2" href="/about">
          <InfoOutlinedIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
}
