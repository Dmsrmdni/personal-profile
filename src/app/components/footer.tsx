export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 py-4 border-gray-300 flex flex-col-reverse md:flex-row justify-between gap-4">
      <p className="text-md text-gray-500">
        © {year} Dimas Ramdani. All rights reserved.
      </p>
      <div className="flex items-center justify-center gap-3">
        <ul className="flex flex-wrap gap-2 lg:gap-4">
          {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
            <li key={item} className="">
              <a href={`#${item.toLowerCase()}`} className="capitalize text-md text-gray-500 hover:text-gray-800 font-medium transition-all duration-300" tabIndex={-1}>
                  {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
