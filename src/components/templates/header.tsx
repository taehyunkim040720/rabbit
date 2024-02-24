import { Link } from 'react-router-dom';
import { Button } from './button';

interface HeaderProps {
  isMenuVisible?: boolean;
}

function Header({ isMenuVisible = true }: HeaderProps) {
  return (
    <header className="sticky left-0 top-0 z-50 flex h-fit justify-center">
      <div className="flex w-full max-w-[1280px] items-center justify-between p-4 backdrop-blur-sm">
        <Link replace to="/">
          <h1 className="logo text-3xl font-bold tracking-wide">Rabbit :</h1>
        </Link>
        {!!isMenuVisible && (
          <ul className="flex items-center gap-4">
            <Button>회원가입</Button>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;
