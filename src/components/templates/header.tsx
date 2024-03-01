import { Link } from 'react-router-dom';
import { Button } from './button';
import Logo from '/public/favicon.ico';

interface HeaderProps {
  isMenuVisible?: boolean;
}

function Header({ isMenuVisible = true }: HeaderProps) {
  return (
    <header className="sticky left-0 top-0 z-50 flex h-fit justify-center">
      <div className="flex w-full max-w-7xl items-center justify-between p-4 backdrop-blur-sm">
        <div className="flex items-center gap-5">
          <Link replace to="/">
            <img src={Logo} alt="logo" className="h-8 w-8" />
          </Link>
          {!!isMenuVisible && (
            <>
              <Link to="/">
                <h2 className={`text-xl font-bold`}>인사이트</h2>
              </Link>
              <Link to="/">
                <h2 className={`text-xl font-bold`}>템플릿</h2>
              </Link>
            </>
          )}
        </div>
        {!!isMenuVisible && (
          <ul className="flex items-center gap-4">
            <Button>회원가입</Button>
          </ul>
        )}
      </div>
    </header>
  );
}

export { Header };
