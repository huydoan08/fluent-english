'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface Article {
  id: string;
  number: number;
  title: string;
  description: string;
  image: string;
}

const articles: Article[] = [
  {
    id: '632',
    number: 632,
    title: 'The True Story Of The Chornobyl Suicide Squad',
    description:
      'In 1986, three men volunteered to die in order to save hundreds of thousands of people, but most of us have never heard of these unsung heroes. When a nuclear power plant in Chernobyl, Ukraine began...',
    image: 'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=200&h=160&fit=crop',
  },
  {
    id: '631',
    number: 631,
    title: 'Fighting For The Amazon',
    description:
      'More than twenty men hired by an oil company hacked through the Ecuadorean jungle. Suddenly, they found themselves surrounded by a large group of indigenous people called the Cofan. The newcomer...',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=160&fit=crop',
  },
  {
    id: '630',
    number: 630,
    title: 'Diamond Ring Insurance',
    description:
      'Brian McGuinn waded through a sea of more than nine tons of garbage. He came to the dump because just days before, he accidentally threw away his wife\'s $10,000 diamond engagement ring. Brian need...',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=160&fit=crop',
  },
  {
    id: '629',
    number: 629,
    title: 'The Millionaire Mirage: All That Glitters Is Not Gold',
    description:
      'When something seems too good to be true, it probably isn\'t true at all. The story of Karl Rabeder who was once a millionaire, is one of those stories. He had a nice house, fancy cars and he stayed in...',
    image: 'https://images.unsplash.com/photo-1516251193557-37f08b1bbb51?w=200&h=160&fit=crop',
  },
  {
    id: '628',
    number: 628,
    title: 'The Most Hated Man In America',
    description:
      'A dark journey into the story of one of America\'s most controversial figures and the events that shaped his path...',
    image: 'https://images.unsplash.com/photo-1540575467063-178f50902f4b?w=200&h=160&fit=crop',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/listening/toiec/article/${article.id}`}
            >
              <article
                className="flex gap-6 items-start hover:opacity-80 transition-opacity cursor-pointer"
              >
              {/* Number Badge */}
              <div className="flex-shrink-0">
                <div className="bg-yellow-400 w-20 h-20 flex flex-col items-center justify-center rounded-sm">
                  <span className="text-white font-bold text-sm">#{article.number}</span>
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Image */}
              <div className="flex-shrink-0 w-48 h-32 relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold text-gray-900 mb-2 text-balance">
                  {article.title}
                </h2>
                <p className="text-gray-700 text-base leading-relaxed line-clamp-3">
                  {article.description}
                </p>
              </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
