'use client';

import { useState } from 'react';

const musicVideoProjects = [
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

const eventProjects = [
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
    const [musicVideoIndex, setMusicVideoIndex] = useState(0);
    const [eventIndex, setEventIndex] = useState(0);

    const currentMusicProject = musicVideoProjects[musicVideoIndex];
    const currentEventProject = eventProjects[eventIndex];

    function nextMusicProject() {
        setMusicVideoIndex((index) => (index + 1) % musicVideoProjects.length);
    }

    function previousMusicProject() {
        setMusicVideoIndex(
            (index) => (index - 1 + musicVideoProjects.length) % musicVideoProjects.length
        );
    }

    function nextEventProject() {
        setEventIndex((index) => (index + 1) % eventProjects.length);
    }

    function previousEventProject() {
        setEventIndex(
            (index) => (index - 1 + eventProjects.length) % eventProjects.length
        );
    }

  return (
    <div>
        {/* Music video projects */}
        <div className="flex min-h-[90vh] flex-col justify-center px-4">
            <div className="text-3xl md:text-4xl mb-32 text-center">
                MUSIC VIDEOS
            </div>
            {/* Main carousel row */}
            <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 lg:gap-12">

            {/* Previous arrow */}
            <button
                onClick={previousMusicProject}
                aria-label="Previous project"
                className="p-2 text-2xl transition-opacity hover:opacity-50 md:text-3xl"
            >
                ←
            </button>

            {/* Video + project information */}
            <div className="grid min-w-0 grid-cols-1 items-center gap-8 md:grid-cols-2">

                {/* YouTube video */}
                <div className="aspect-video w-full overflow-hidden bg-[#7F011F]">
                <iframe
                    key={currentMusicProject.videoId}
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${currentMusicProject.videoId}`}
                    title={currentMusicProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                </div>

                {/* Project information */}
                <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl">
                    {currentMusicProject.title}
                </h2>

                <p>{currentMusicProject.client}</p>
                <p>{currentMusicProject.role}</p>
                </div>
            </div>

            {/* Next arrow */}
            <button
                onClick={nextMusicProject}
                aria-label="Next project"
                className="p-2 text-2xl transition-opacity hover:opacity-50 md:text-3xl"
            >
                →
            </button>
            </div>

            {/* Pagination dots stay underneath the content */}
            <div className="mx-auto mt-10 flex w-full max-w-7xl items-center justify-center gap-2">
            {musicVideoProjects.map((project, index) => (
                <button
                key={project.videoId}
                onClick={() => setMusicVideoIndex(index)}
                aria-label={`Go to project ${index + 1}`}
                aria-current={index === musicVideoIndex ? 'true' : undefined}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === musicVideoIndex
                    ? 'bg-[#7F011F]'
                    : 'bg-[#E6C3C4]'
                }`}
                />
            ))}
            </div>
            <div className="text-3xl md:text-4xl mt-16 text-center">
                ________________
            </div>
        </div>

        {/* Event projects */}
        <div className="flex min-h-[90vh] flex-col justify-center px-4">
            <div className="text-3xl md:text-4xl mb-32 text-center">
                EVENTS
            </div>
            {/* Main carousel row */}
            <div className="mx-auto grid w-full max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 lg:gap-12">

            {/* Previous arrow */}
            <button
                onClick={previousEventProject}
                aria-label="Previous project"
                className="p-2 text-2xl transition-opacity hover:opacity-50 md:text-3xl"
            >
                ←
            </button>

            {/* Video + project information */}
            <div className="grid min-w-0 grid-cols-1 items-center gap-8 md:grid-cols-2">

                {/* YouTube video */}
                <div className="aspect-video w-full overflow-hidden bg-[#7F011F]">
                <iframe
                    key={currentEventProject.videoId}
                    className="h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${currentEventProject.videoId}`}
                    title={currentEventProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
                </div>

                {/* Project information */}
                <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl">
                    {currentEventProject.title}
                </h2>

                <p>{currentEventProject.client}</p>
                <p>{currentEventProject.role}</p>
                </div>
            </div>

            {/* Next arrow */}
            <button
                onClick={nextEventProject}
                aria-label="Next project"
                className="p-2 text-2xl transition-opacity hover:opacity-50 md:text-3xl"
            >
                →
            </button>
            </div>

            {/* Pagination dots stay underneath the content */}
            <div className="mx-auto mt-10 flex w-full max-w-7xl items-center justify-center gap-2">
            {eventProjects.map((project, index) => (
                <button
                key={project.videoId}
                onClick={() => setEventIndex(index)}
                aria-label={`Go to project ${index + 1}`}
                aria-current={index === eventIndex ? 'true' : undefined}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    index === eventIndex
                    ? 'bg-[#7F011F]'
                    : 'bg-[#E6C3C4]'
                }`}
                />
            ))}
            </div>
        </div>
    </div>
    );
}
