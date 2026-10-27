'use client';

export default function Home() {
  return (
    <div className="flex justify-center items-center align-middle content-center ml-80 mt-60">
        <div className="text-md flex flex-col justify-center items-start gap-8">
          <div>
            __HCMC - videographer/photographer/mixing engineer
          </div>
          <div>
            __available for freelance
          </div>
          <div className="flex gap-4">
            <img src="/instagram-icon.png" alt="Instagram" className="w-6 h-6" />
            <img src="/facebook-icon.png" alt="Facebook" className="w-6 h-6" />
            <img src="/email-icon.png" alt="Email" className="w-6 h-6" />
          </div>
        </div>
    </div>
  );
}
