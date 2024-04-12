import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full bg-blue-700 text-white shadow">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a className="mb-4 flex items-center font-medium text-white md:mb-0">
          <span className="ml-3 text-xl">Trio-State-Cart</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <NavLink
            to="/mealslist"
            className={({ isActive }) =>
              isActive
                ? 'mr-5 font-bold text-blue-100'
                : 'mr-5 text-blue-200 hover:text-blue-400'
            }
          >
            首頁
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? 'mr-5 font-bold text-blue-100'
                : 'mr-5 text-blue-200 hover:text-blue-400'
            }
          >
            購物車
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
