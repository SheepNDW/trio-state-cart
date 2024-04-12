function Footer() {
  return (
    <footer className="text-gray-600">
      <div className="container mx-auto flex flex-col items-center px-5 py-8 sm:flex-row">
        <a className="flex items-center justify-center font-medium text-gray-900 md:justify-start">
          <span className="ml-3 text-xl">Trio-State-Cart</span>
        </a>
        <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:pl-4">
          © {new Date().getFullYear()} Trio-State-Cart —
          <a
            href="https://github.com/SheepNDW"
            className="ml-1 text-gray-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            @SheepNDW
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
