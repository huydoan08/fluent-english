type Question = {
  id: string;
  audio: string;
  question: string;
  options: string[];
  correct: string;
  transcript: string;
};
export const questions: Question[] = [
  {
    id: 'q1',
    audio: '/toeic/01.mp3',
    question: 'What is the main purpose of Jim Taylor’s call?',
    options: [
      'A. To approve a travel expense report',
      'B. To request corrections to a report',
      'C. To schedule a meeting with a client',
      'D. To discuss future travel plans',
    ],
    correct: 'B. To request corrections to a report',
    transcript:
      'Hello, Mr. Watson. This is Jim Taylor from Accounting.I’m calling regarding the travel expense report you turned in yesterday.I noticed some problems with it, and I want them rectified as soon as possible.First, you didn’t include the restaurant receipt for May 15th.According to your report, you paid 150 dollars for dinner with clients, but I couldn’t find any relevant receipts.Also, the hotel receipt doesn’t match the amount on the report.Please call my office at 610-1100 so that I can expedite your request.Thank you.',
  },
  {
    id: 'q2',
    audio: '/toeic/02.mp3',
    question: 'What improvement was recently made?',
    options: [
      'A. The parking area was expanded',
      'B. The apartments were repainted and kitchens upgraded',
      'C. The building height was increased',
      'D. A swimming pool was added',
    ],
    correct: 'B. The apartments were repainted and kitchens upgraded',
    transcript: `Are you looking for a convenient and cozy place in the downtown area?
If you want a perfect apartment for your family, look no further than Pacific Hill, which overlooks the harbor.

These apartments are within walking distance to Queen Street shopping district and Robinson Park,
which attracts an estimated two million visitors every year.

Recently, we repainted the walls and upgraded the kitchens with new high-end appliances.
What’s more, all residents have free access to the wireless Internet service inside the building.

If you’d like a tour, don’t hesitate to call James Decker at 600-1200. Thank you.`,
  },
  {
    id: 'q3',
    audio: '/toeic/03.mp3',
    question: 'Who is Dr. James Donald?',
    options: [
      'A. The hotel manager',
      'B. A conference participant',
      'C. The keynote speaker',
      'D. A reception staff member',
    ],
    correct: 'C. The keynote speaker',
    transcript: 'Welcome to our 10th annual Environment Conservation Forum here at Mega Dream Hotel. I’m so thrilled to have participants from more than 20 countries this year. First of all, we have invited Dr. James Donald as our keynote speaker. He is well known in the field of environmental engineering and even won the Green Planet award last year. He will share his knowledge about the hazards of carbon dioxide with us later. Throughout the week, there will be a number of informative lectures and discussions that might interest you as well. Please refer to the complete schedule in the conference packet you received when you checked in at the reception desk.',
  },
  {
    id: 'q4',
    audio: '/toeic/04.mp3',
    question: 'Where should passengers go to receive a meal voucher?',
    options: [
      'A. The ticket counter',
      'B. Gate 10',
      'C. The customer service desk',
      'D. The second-floor restaurant',
    ],
    correct: 'C. The customer service desk',
    transcript: 'Attention all passengers waiting to board Atlanta Air flight 1710, which was scheduled to depart for New York at 3:10 pm. Because of heavy fog here in Heathrow Airport, this flight has been delayed until further notice. Passengers holding tickets for this flight are invited to receive a meal voucher worth 10 dollars. If you’d like one, please feel free to pick it up at our customer service desk, which is situated next to Gate 10 on the second floor. If you want to get a refund or exchange your ticket, please proceed to one of our ticket counters. Thank you for your patience.',
  },
  {
    id: 'q5',
    audio: '/toeic/05.mp3',
    question: 'Why is John Moore calling?',
    options: [
      'A. To cancel an Internet service',
      'B. To request installation of Internet service',
      'C. To complain about poor service',
      'D. To change his phone number',
    ],
    correct: 'B. To request installation of Internet service',
    transcript: 'Hi, this is John Moore and I’m calling regarding the Internet service you provide. I’m scheduled to move to Jacksonville next Monday and I’d like to get it installed as soon as possible. Steve Wagner, one of my colleagues, told me that he has been very satisfied with your fast and reliable service. So, I’m wondering if you can give me a price quote within the week. Please call me at 400-2355 whenever you are available. When you return my call, I’ll give you my new address in Jacksonville. I hope to hear from you soon. Bye.',
  },
  {
    id: 'q6',
    audio: '/toeic/06.mp3',
    question: 'What are visitors NOT allowed to do during the tour?',
    options: [
      'A. Ask questions',
      'B. Take photographs',
      'C. Visit the sculpture garden',
      'D. Listen to the guide',
    ],
    correct: 'Correct Answer: B. Take photographs',
    transcript: 'Good afternoon, everyone. My name is Sally White and welcome to the Manchester Art Museum. Today, I’ll be guiding you through our famous sculpture garden, which features a number of bold and innovative designs from all over the world. Especially, one of the emerging young sculptors in Europe, Juan Garcia will be here at noon to talk about his works that are displayed here. We are very pleased to give you this great opportunity to hear from the gifted artist. Finally, I’d like to remind everyone that photography is not permitted during the tour. Should you have any questions, please feel free to ask me. If you are ready, let’s get started.',
  },
  {
    id: 'q7',
    audio: '/toeic/07.mp3',
    question: 'What change does Jason Morrison mention about the event?',
    options: [
      'A. The event date has been changed',
      'B. Fewer people will attend',
      'C. More people will attend than expected',
      'D. The event has been canceled',
    ],
    correct: 'Correct Answer: C. More people will attend than expected',
    transcript: 'Hello, Ms. Carter. This is Jason Morrison from Indiana Consulting. I reserved the dining hall at your hotel for April 15th and I’m calling to let you know of some changes we’d like to make. Initially, we were expecting 120 employees to attend our end-of-year banquet, but there will actually be 30 more people joining us for the event. Also, I’d like you to add a vegetarian option to our dinner menu. I hope these changes won’t cause you any inconvenience. If you want to discuss this in more detail, don’t hesitate to call my office at 300-7600.',
  },
  {
    id: 'q8',
    audio: '/toeic/08.mp3',
    question: 'What is suggested about The Scent of Paris?',
    options: [
      'A. It recently opened in Arizona',
      'B. It mainly serves fast food',
      'C. It has a long history of serving customers',
      'D. It only accepts online reservations',
    ],
    correct: 'Correct Answer: C. It has a long history of serving customers',
    transcript: 'Are you planning a family reunion or a company event? If so, why not try The Scent of Paris, one of Arizona’s most famous French restaurants? We specialize in authentic French dishes like Beef Bourguignon and Pureed Carrot Soup. We have been pleasing our patrons for over 30 years, providing an elegant atmosphere in a relaxed setting. Since Mr. Brian Fabian established this small French restaurant in Tucson, it has steadily grown to become one of the top 10 restaurants in Arizona. If you would like to see our menu, please feel free to visit our website. For reservations, please call us at 500-1000. Don’t hesitate to make your day special with us today.',
  },
  {
    id: 'q9',
    audio: '/toeic/09.mp3',
    question: 'What should the managers do before leaving work today?',
    options: [
      'A. Submit the quarterly report to Mr. Jennings.',
      'B. Make sure everything is working safely.',
      'C. Prepare a safety inspection for next week.',
      'D. Wait for the fire inspectors to arrive.',
    ],
    correct: 'Correct Answer: B. Make sure everything is working safely.',
    transcript: 'Before we move onto the next agenda, I’d like to remind you that the inspectors from the fire department will visit our manufacturing plant tomorrow for the annual safety inspection. As managers, you are responsible for the section you are assigned to. It’s essential for us to receive a perfect report. Please make sure that everything is working safely before you leave work today. Also, I’d like each of you to turn in a status report to me by the end of the day.Now, Mr. Jennings will tell us about the quarterly report which includes important sales figures and after that we’ll talk about these results',
  },
  {
    id: 'q10',
    audio: '/toeic/10.mp3',
    question: 'Why was the banquet held at the Lincoln Community Center this year?',
    options: [
      'A. Because the Atlantic Hotel closed permanently.',
      'B. Because renovations were being done at the Atlantic Hotel.',
      'C. Because the celebrities refused to attend the hotel.',
      'D. Because the money was collected for the hotel staff.',
    ],
    correct: 'Correct Answer: B. Because renovations were being done at the Atlantic Hotel.',
    transcript: 'Good evening, listeners. This is Rebecca Simpson with your local headlines. This morning, Hamilton Construction hosted an annual banquet to raise money for local charity organizations.The banquet was held at the Atlantic Hotel in the past but it was held in the Lincoln Community Center this year due to renovations at the hotel.Fortunately, many celebrities including a famous hockey player, Jim Morgan and a well-known actress, Susan Black participated in the event.Proceeds for this year’s event will go to a local orphanage in Little Rock. Here is Tony Jennings with Ryan Kim, the president of Hamilton Construction…',
  },
];