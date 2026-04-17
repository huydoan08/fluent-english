interface Lesson {
  id: string;
  number: number;
  title: string;
  description: string;
  image: string;
  duration: string;
  questions: number;
  completed?: boolean;
}
export const lessons: Lesson[] = [
  {
    id: '1',
    number: 1,
    title: 'Questionnaire number 1',
    description:
      'Hello, Mr. Watson. This is Jim Taylor from Accounting.I’m calling regarding the travel expense report you turned in yesterday.I noticed some problems with it, and I want them rectified as soon as possible.First, you didn’t include the restaurant receipt for May 15th.According to your report, you paid 150 dollars for dinner with clients, but I couldn’t find any relevant receipts.Also, the hotel receipt doesn’t match the amount on the report.Please call my office at 610-1100 so that I can expedite your request.Thank you.',
    image:
      'https://images.unsplash.com/photo-1574482620811-1aa16ffe3c82?w=200&h=160&fit=crop',
    duration: '1:10',
    questions: 1,
    completed: false,
  },
//   {
//     id: '2',
//     number: 2,
//     title: 'Questions 2 refer to the following advertisement.',
//     description: `Are you looking for a convenient and cozy place in the downtown area?
// If you want a perfect apartment for your family, look no further than Pacific Hill, which overlooks the harbor.

// These apartments are within walking distance to Queen Street shopping district and Robinson Park,
// which attracts an estimated two million visitors every year.

// Recently, we repainted the walls and upgraded the kitchens with new high-end appliances.
// What’s more, all residents have free access to the wireless Internet service inside the building.

// If you’d like a tour, don’t hesitate to call James Decker at 600-1200. Thank you.`,
//     image:
//       'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=160&fit=crop',
//     duration: '00:42',
//     questions: 3,
//     completed: true,
//   },
//   {
//     id: '3',
//     number: 3,
//     title: 'Questions 3 refer to the following talk.',
//     description:
//       'Welcome to our 10th annual Environment Conservation Forum here at Mega Dream Hotel. I’m so thrilled to have participants from more than 20 countries this year. First of all, we have invited Dr. James Donald as our keynote speaker. He is well known in the field of environmental engineering and even won the Green Planet award last year. He will share his knowledge about the hazards of carbon dioxide with us later. Throughout the week, there will be a number of informative lectures and discussions that might interest you as well. Please refer to the complete schedule in the conference packet you received when you checked in at the reception desk.',
//     image:
//       'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=160&fit=crop',
//     duration: '1:05',
//     questions: 3,
//     completed: false,
//   },
];