import Link from "next/link";

type TopMenuItemProps = {
  label: string;
  href: string;
};

export default function TopMenuItem({ label, href }: TopMenuItemProps) {
  return (
    <Link
      href={href}
      className="rounded-md px-4 py-2 font-semibold text-gray-800 transition-colors hover:bg-gray-100"
    >
      {label}
    </Link>
  );
}
