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
    <header className="grid grid-cols-3 items-center p-4">
        <div className="text-md justify-self-start">TRAN TIEN QUOC NGUYEN</div>
        <div className="text-4xl justify-self-center">LUKE</div>
        <div className="justify-self-end">
            {menuItems.map((item) => {
                return (
                    <Link
                        key={item.id}
                        href={item.href}
                        className="px-4 py-2 text-sm hover:underline"
                    >
                        {item.label.toUpperCase()}
                    </Link>
                )
            })}
        </div>
    </header>
  );
}