'user client';

import Link from "next/link";

export type MenuItem = {
    id: string;
    label: string;
    href: string;
    children?: MenuItem[];
};
interface HeaderProps {
    menuItems: MenuItem[];
}

export default function Header ({ menuItems }: HeaderProps) {
  return (
    <header className="flex justify-between items-center p-4">
        <div className="text-md">TRAN TIEN QUOC NGUYEN</div>
        <div className="text-4xl">LUKE</div>
        <div>
            {menuItems.map((item) => {
                return (
                    <Link
                        key={item.id}
                        href={item.href}
                        className="px-3 py-2 text-sm hover:underline"
                    >
                        {item.label.toUpperCase()}
                    </Link>
                )
            })}
        </div>
    </header>
  );
}