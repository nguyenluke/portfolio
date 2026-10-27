'use client';

type Photo = {
  src: string;
  alt: string;
};

const columns: Photo[][] = [
  [
    { src: "/photos/DSC04016.jpg", alt: "Portrait" },
    { src: "/photos/DSC04017.jpg", alt: "Street photography" },
    { src: "/photos/DSC04018.jpg", alt: "Architecture" },
  ],

  [
    { src: "/photos/DSC04019.jpg", alt: "Football" },
    { src: "/photos/DSC04020.jpg", alt: "Staircase portrait" },
    { src: "/photos/DSC04021.jpg", alt: "City details" },
  ],

  [
    { src: "/photos/DSC04022.jpg", alt: "Seated portrait" },
    { src: "/photos/DSC04023.jpg", alt: "Neon sign" },
    { src: "/photos/DSC04024.jpg", alt: "Night photography" },
  ],
];

export default function Photos() {
    return (
        <div className="p-4">
            <div
                aria-label="Photography portfolio"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-6">
                    {column.map((photo) => (
                    <figure key={photo.src}>
                        <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        className="block h-auto w-full"
                        />
                    </figure>
                    ))}
                </div>
                ))}
            </div>
        </div>
    );
}