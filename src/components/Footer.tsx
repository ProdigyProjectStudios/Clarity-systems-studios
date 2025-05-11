const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center py-8 mt-12">
      <div className="container mx-auto px-4">
        <p className="text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Clarity Systems Studio. All rights reserved.
        </p>
        <p className="text-gray-500 text-xs mt-2">
          Powered by AI, Perfected by a Human.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

