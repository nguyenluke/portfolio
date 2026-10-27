'use client';

import { useState } from 'react';

const projects = [
  {
    title: 'The Perfect Love Of Jesus',
    client: 'For Thingsabove',
    role: 'My role: everything',
    videoId: 'IkIwskFwQWs',
  },
  {
    title: 'Nothing Else x Closer',
    client: 'For Thingsabove',
    role: 'My role: everything',
    videoId: '0XxY37BWDvA',
  },
  {
    title: 'You saved me x I Could Sing Of Your Love',
    client: 'For Thingsabove',
    role: 'My role: everything',
    videoId: '9nzESrhPwdY',
  },
];

export default function Videos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProject = projects[currentIndex];

  function nextProject() {
    setCurrentIndex((index) => (index + 1) % projects.length);
  }

  function previousProject() {
    setCurrentIndex(
      (index) => (index - 1 + projects.length) % projects.length
    );
  }

  return (
    <div className="flex min-h-[90vh] flex-col justify-center">
        
        {/* Events videos */}
        <div className='mb-20'>
            <div className='flex justify-center items-center mb-20 mt-20 text-5xl'>
                MUSIC VIDEOS
            </div>
            {/* Current project */}
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">

                {/* YouTube video */}
                <div className="aspect-video w-full overflow-hidden bg-[#7F011F]">
                <iframe
                    key={currentProject.videoId}
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${currentProject.videoId}`}
                    title={currentProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                </div>

                {/* Project information */}
                <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl">
                    {currentProject.title}
                </h2>

                <p>{currentProject.client}</p>
                <p>{currentProject.role}</p>
                </div>
            </div>

            {/* Controls */}
            <div className="mx-auto mt-10 flex w-full max-w-6xl items-center justify-between">

                <button
                onClick={previousProject}
                aria-label="Previous project"
                className="p-3 text-2xl"
                >
                ←
                </button>

                <div className="flex items-center gap-2">
                {projects.map((project, index) => (
                    <button
                    key={project.videoId}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to project ${index + 1}`}
                    aria-current={index === currentIndex ? 'true' : undefined}
                    className={`h-2.5 w-2.5 rounded-full ${
                        index === currentIndex
                        ? 'bg-[#7F011F]'
                        : 'bg-[#E6C3C4]'
                    }`}
                    />
                ))}
                </div>

                <button
                onClick={nextProject}
                aria-label="Next project"
                className="p-3 text-2xl"
                >
                →
                </button>
            </div>
            <div className='flex justify-center items-center m-10 text-5xl'>
                _______________
            </div>
        </div>

        {/* Events videos */}

        <div className='mb-20'>
            <div className='flex justify-center items-center m-5 mb-20 text-5xl'>
                EVENTS
            </div>
            {/* Current project */}
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 md:grid-cols-2">

                {/* YouTube video */}
                <div className="aspect-video w-full overflow-hidden bg-[#7F011F]">
                <iframe
                    key={currentProject.videoId}
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${currentProject.videoId}`}
                    title={currentProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                </div>

                {/* Project information */}
                <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl">
                    {currentProject.title}
                </h2>

                <p>{currentProject.client}</p>
                <p>{currentProject.role}</p>
                </div>
            </div>

            {/* Controls */}
            <div className="mx-auto mt-10 flex w-full max-w-6xl items-center justify-between">

                <button
                onClick={previousProject}
                aria-label="Previous project"
                className="p-3 text-2xl"
                >
                ←
                </button>

                <div className="flex items-center gap-2">
                {projects.map((project, index) => (
                    <button
                    key={project.videoId}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to project ${index + 1}`}
                    aria-current={index === currentIndex ? 'true' : undefined}
                    className={`h-2.5 w-2.5 rounded-full ${
                        index === currentIndex
                        ? 'bg-[#7F011F]'
                        : 'bg-[#E6C3C4]'
                    }`}
                    />
                ))}
                </div>

                <button
                onClick={nextProject}
                aria-label="Next project"
                className="p-3 text-2xl"
                >
                →
                </button>
            </div>
        </div>
    </div>
  );
}
