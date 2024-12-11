import Link from 'next/link';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export default function Nav() {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center">
      <div className="fixed bottom-4 mx-auto rounded bg-slate-300 p-2 shadow-md">
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
