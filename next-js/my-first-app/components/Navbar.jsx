import Link from "next/link";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },
  { href: "/query", label: "query" },
  { href: "/prisma-example", label: "prisma-example" },
  { href: "/about", label: "about" },
];

const Navbar = () => {
  return (
    <div>
      <nav className="bg-base-300 py-4">
        <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Next.js
          </Link>

          <ul className="menu menu-horizontal md:ml-8 space-x-2 ">
            {links.map((link) => {
              return (
                <li key={link.label}>
                  <Link href={link.href} className="capitalize text-pretty">
                    {" "}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
