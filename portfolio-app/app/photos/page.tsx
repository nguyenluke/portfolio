'use client';

type Photo = {
  src: string;
  alt: string;
};

const columns: Photo[][] = [
  [
    { src: "/photos/DSC04016.jpg", alt: "Portrait" },
    { src: "/photos/DSC04183.jpg", alt: "Street photography" },
    { src: "/photos/DSC00995.jpg", alt: "Architecture" },
  ],

  [
    { src: "/photos/DSC01074.jpg", alt: "Football" },
    { src: "/photos/DSC01011.jpg", alt: "Staircase portrait" },
    { src: "/photos/DSC01078.jpg", alt: "City details" },
  ],

  [
    { src: "/photos/DSC00905.jpg", alt: "Seated portrait" },
    { src: "/photos/DSC03919.jpg", alt: "Neon sign" },
    { src: "/photos/DSC01554.jpg", alt: "Night photography" },
  ],

  [
    { src: "/photos/DSC00877.jpg", alt: "Seated portrait" },
    { src: "/photos/DSC05255.jpg", alt: "Neon sign" },
    { src: "/photos/DSC04010.jpg", alt: "Night photography" },
  ],
];

export default function Photos() {
    return (
        <div className="p-4 mt-5">
            <div
                aria-label="Photography portfolio"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
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