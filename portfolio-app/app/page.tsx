'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center ml-96">
        <div className="text-md flex flex-col justify-center items-start gap-8">
          <div>
            __HCMC - videographer/photographer/mixing engineer
          </div>
          <div>
            __available for freelance
          </div>
          <div className="flex gap-4">
            <Link href="https://www.instagram.com/n.luke_creative/">
              <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
            </Link>
            <Link href="https://www.facebook.com/nguyen.luke.270426?locale=vi_VN">
              <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
            </Link>
          </div>
        </div>
    </div>
  );
}
