type Question = {
  id: string;
  audio: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
  transcript: string;
};
export const questions: Question[] = [
  {
    id: 'q1',
    audio: '/toeic/01.mp3',
    question: 'What is the main purpose of the call?',
    options: [
      'To report an issue',
      'To request information',
      'To confirm a booking',
      'To cancel an order',
    ],
    correct: 'To report an issue',
    explanation:
      'The caller mentions problems with the expense report.',
    transcript:
      'Hello, Mr. Watson. This is Jim Taylor from Accounting.I’m calling regarding the travel expense report you turned in yesterday.I noticed some problems with it, and I want them rectified as soon as possible.First, you didn’t include the restaurant receipt for May 15th.According to your report, you paid 150 dollars for dinner with clients, but I couldn’t find any relevant receipts.Also, the hotel receipt doesn’t match the amount on the report.Please call my office at 610-1100 so that I can expedite your request.Thank you.',
  },
  {
    id: 'q2',
    audio: '/toeic/02.mp3',
    question: 'What does the speaker ask the listener to do?',
    options: [
      'Send an email',
      'Fix a report',
      'Call back later',
      'Attend a meeting',
    ],
    correct: 'Fix a report',
    explanation: 'The speaker mentions correcting a report.',
    transcript: `Are you looking for a convenient and cozy place in the downtown area?
If you want a perfect apartment for your family, look no further than Pacific Hill, which overlooks the harbor.

These apartments are within walking distance to Queen Street shopping district and Robinson Park,
which attracts an estimated two million visitors every year.

Recently, we repainted the walls and upgraded the kitchens with new high-end appliances.
What’s more, all residents have free access to the wireless Internet service inside the building.

If you’d like a tour, don’t hesitate to call James Decker at 600-1200. Thank you.`,
  },
  {
    id: 'q2',
    audio: '/toeic/03.mp3',
    question: 'What does the speaker ask the listener to do?',
    options: [
      'Send an email',
      'Fix a report',
      'Call back later',
      'Attend a meeting',
    ],
    correct: 'Fix a report',
    explanation: 'The speaker mentions correcting a report.',
    transcript: 'Welcome to our 10th annual Environment Conservation Forum here at Mega Dream Hotel. I’m so thrilled to have participants from more than 20 countries this year. First of all, we have invited Dr. James Donald as our keynote speaker. He is well known in the field of environmental engineering and even won the Green Planet award last year. He will share his knowledge about the hazards of carbon dioxide with us later. Throughout the week, there will be a number of informative lectures and discussions that might interest you as well. Please refer to the complete schedule in the conference packet you received when you checked in at the reception desk.',
  },
  {
    id: 'q2',
    audio: '/toeic/04.mp3',
    question: 'What does the speaker ask the listener to do?',
    options: [
      'Send an email',
      'Fix a report',
      'Call back later',
      'Attend a meeting',
    ],
    correct: 'Fix a report',
    explanation: 'The speaker mentions correcting a report.',
    transcript: 'Please revise the document and send again...',
  },
  {
    id: 'q2',
    audio: '/toeic/05.mp3',
    question: 'What does the speaker ask the listener to do?',
    options: [
      'Send an email',
      'Fix a report',
      'Call back later',
      'Attend a meeting',
    ],
    correct: 'Fix a report',
    explanation: 'The speaker mentions correcting a report.',
    transcript: 'Please revise the document and send again...',
  },
  {
    id: 'q2',
    audio: '/toeic/06.mp3',
    question: 'What does the speaker ask the listener to do?',
    options: [
      'Send an email',
      'Fix a report',
      'Call back later',
      'Attend a meeting',
    ],
    correct: 'Fix a report',
    explanation: 'The speaker mentions correcting a report.',
    transcript: 'Please revise the document and send again...',
  },
  {
    id: 'q2',
    audio: '/toeic/07.mp3',
    question: 'What does the speaker ask the listener to do?',
    options: [
      'Send an email',
      'Fix a report',
      'Call back later',
      'Attend a meeting',
    ],
    correct: 'Fix a report',
    explanation: 'The speaker mentions correcting a report.',
    transcript: 'Please revise the document and send again...',
  },
  {
    id: 'q2',
    audio: '/toeic/08.mp3',
    question: 'What does the speaker ask the listener to do?',
    options: [
      'Send an email',
      'Fix a report',
      'Call back later',
      'Attend a meeting',
    ],
    correct: 'Fix a report',
    explanation: 'The speaker mentions correcting a report.',
    transcript: 'Please revise the document and send again...',
  },
  {
    id: 'q2',
    audio: '/toeic/09.mp3',
    question: 'What does the speaker ask the listener to do?',
    options: [
      'Send an email',
      'Fix a report',
      'Call back later',
      'Attend a meeting',
    ],
    correct: 'Fix a report',
    explanation: 'The speaker mentions correcting a report.',
    transcript: 'Please revise the document and send again...',
  },
  {
    id: 'q2',
    audio: '/toeic/10.mp3',
    question: 'What does the speaker ask the listener to do?',
    options: [
      'Send an email',
      'Fix a report',
      'Call back later',
      'Attend a meeting',
    ],
    correct: 'Fix a report',
    explanation: 'The speaker mentions correcting a report.',
    transcript: 'Please revise the document and send again...',
  },
];