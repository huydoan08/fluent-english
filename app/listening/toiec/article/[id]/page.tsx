'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
    ChevronLeft,
    Play,
    Pause,
    Volume2,
    MoreVertical,
    Plus,
    Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ArticleContent {
    id: string;
    number: number;
    title: string;
    content: string;
    university: string;
    universityUrl: string;
}

const articleContents: Record<string, ArticleContent> = {
    '632': {
        id: '632',
        number: 632,
        title: 'The section refer to the following telephone message.',
        content: `Hello, Mr. Watson. This is Jim Taylor from Accounting. I’m calling regarding the travel expense report you turned in yesterday. I noticed some problems with it and I want them rectified as soon as possible. First, you didn’t include the restaurant receipt for May 15th. According to your report, you paid 150 dollars for dinner with clients but I couldn’t find any relevant receipts. Also, the hotel receipt doesn’t match the amount on the report. Please call my office at 610-1100 so that I can expedite your request. Thank you..`,
        university: 'UNIVERSITY OF PLYMOUTH',
        universityUrl: '#',
    },
};

const audioPlayers = [
    { label: 'SLOW', speed: 0.75, file: '/toeic/part4-01.mp3' },
    { label: 'NORMAL', speed: 1, file: '/toeic/part4-01.mp3' },
    { label: 'FAST', speed: 1.5, file: '/toeic/part4-01.mp3' },
];

export default function ArticlePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const [article, setArticle] = useState<ArticleContent | null>(null);

    const audioRefs = useRef<(HTMLAudioElement | null)[]>([]);
    const [playingIndex, setPlayingIndex] = useState<number | null>(null);
    const [progress, setProgress] = useState<number[]>([0, 0, 0]);
    const [duration, setDuration] = useState<number[]>([0, 0, 0]);

    // resolve params
    useEffect(() => {
        params.then((p) => {
            setArticle(articleContents[p.id] || articleContents['632']);
        });
    }, [params]);

    // handle play
    const handlePlay = (index: number) => {
        const current = audioRefs.current[index];
        if (!current) return;

        // pause others
        audioRefs.current.forEach((audio, i) => {
            if (i !== index && audio) {
                audio.pause();
            }
        });

        if (playingIndex === index) {
            current.pause();
            setPlayingIndex(null);
        } else {
            current.play();
            current.playbackRate = audioPlayers[index].speed;
            setPlayingIndex(index);
        }
    };

    // time update
    const handleTimeUpdate = (index: number) => {
        const audio = audioRefs.current[index];
        if (!audio) return;

        const newProgress = [...progress];
        newProgress[index] = audio.currentTime;
        setProgress(newProgress);
    };

    const handleLoadedMetadata = (index: number) => {
        const audio = audioRefs.current[index];
        if (!audio) return;

        const newDuration = [...duration];
        newDuration[index] = audio.duration;
        setDuration(newDuration);
    };

    const formatTime = (time: number) => {
        if (!time) return '0:00';
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60)
            .toString()
            .padStart(2, '0');
        return `${min}:${sec}`;
    };

    if (!article) return <div>Loading...</div>;

    return (
        <main className="min-h-screen bg-white">
            {/* Header */}
            <div className="border-b">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <Link href="/listening/toiec" className="flex items-center gap-2">
                        <ChevronLeft />
                        Back
                    </Link>
                </div>
            </div>

            {/* AUDIO PLAYER */}
            <div className="border-b">
                <div className="max-w-6xl mx-auto px-6 py-8 space-y-4">
                    {audioPlayers.map((player, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 bg-gray-100 p-4 rounded"
                        >
                            {/* AUDIO */}
                            <audio
                                ref={(el) => {
                                    audioRefs.current[idx] = el;
                                }}
                                src={player.file}
                                onTimeUpdate={() => handleTimeUpdate(idx)}
                                onLoadedMetadata={() => handleLoadedMetadata(idx)}
                            />

                            <span className="w-20 font-bold">{player.label}</span>

                            {/* PLAY BUTTON */}
                            <button
                                onClick={() => handlePlay(idx)}
                                className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center"
                            >
                                {playingIndex === idx ? <Pause /> : <Play />}
                            </button>

                            {/* PROGRESS BAR */}
                            <div className="flex-1 h-2 bg-gray-300 rounded relative overflow-hidden">
                                <div
                                    className="h-full bg-blue-500"
                                    style={{
                                        width: `${duration[idx]
                                            ? (progress[idx] / duration[idx]) * 100
                                            : 0
                                            }%`,
                                    }}
                                />
                            </div>

                            {/* TIME */}
                            <span className="text-sm w-24 text-right">
                                {formatTime(progress[idx])} / {formatTime(duration[idx])}
                            </span>

                            <Volume2 className="w-5 h-5 cursor-pointer" />
                            <MoreVertical className="w-5 h-5 cursor-pointer" />

                            <Button>Download</Button>
                        </div>
                    ))}
                </div>
            </div>

            {/* CONTENT */}
            <div className="max-w-6xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-bold mb-6">{article.title}</h1>

                {article.content.split('\n\n').map((p, i) => (
                    <p key={i} className="mb-4 text-lg text-gray-700">
                        {p}
                    </p>
                ))}
            </div>
        </main>
    );
}