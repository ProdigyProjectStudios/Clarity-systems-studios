import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Clarity Systems Studio
        </Link>
        <nav>
          <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
            About
          </Link>
          <Link href="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
            Services
          </Link>
          <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
            Portfolio
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

