import {logoWhite} from '../../assets/base';

function Header() {
  return (
      <header className="relative bg-black py-3 text-center">
      <img className="mx-auto w-[200px]" src={logoWhite} alt="PChome" />
    </header>
  );
}

export default Header;
