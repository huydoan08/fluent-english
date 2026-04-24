
const exams = [
  {
    id: 1,
    title: "TOEIC Đề 1 - Part 1 + Part 2",
    audio: "/toeic/LC-TOIEC-de-1-P.1.mp3",
    part: 1,
    time: "40 phút",
    questions: [
      {
        id: 1,
        image:
          "https://lamtracnghiem.com/wp-content/uploads/THI-THU/TOEIC/Screenshot-2025-08-13-121108.png",
        question: "Question 1:",
        options: [
          "A. She's eating in a picnic area.",
          "B. She's waiting in line at a food truck.",
          "C. She's wiping off a bench.",
          "D. She's throwing away a plate.",
        ],
        correctAnswer: "A",
      },
      {
        id: 2,
        image:
          "https://lamtracnghiem.com/wp-content/uploads/THI-THU/TOEIC/2.png",
        question: "Question 2:",
        options: [
          "A. The man is brushing snow off the roof of a car.",
          "B. The man is standing in the snow beside a car.",
          "C. The man is shoveling snow from a walkway.",
          "D. The man is running through the snow.",
        ],
        correctAnswer: "B",
      },
      {
        id: 3,
        image:
          "https://lamtracnghiem.com/wp-content/uploads/THI-THU/TOEIC/3.png",
        question: "Question 3:",
        options: [
          "A. Some workers are hanging art in a gallery.",
          "B. Two of the people are having a conversation.",
          "C. One of the men is rearranging cushions on a sofa.",
          "D. One of the men is painting a picture.",
        ],
        correctAnswer: "B",
      },
      {
        id: 4,
        image:
          "https://lamtracnghiem.com/wp-content/uploads/THI-THU/TOEIC/4.png",
        question: "Question 4:",
        options: [
          "A. Vehicles are entering a parking garage.",
          "B. Clothes hangers are scattered on the ground.",
          "C. Empty racks are lined up next to a building.",
          "D. Clothing is being displayed under a tent.",
        ],
        correctAnswer: "D",
      },
      {
        id: 5,
        image:
          "https://lamtracnghiem.com/wp-content/uploads/THI-THU/TOEIC/5.png",
        question: "Question 5:",
        options: [
          "A. Potted plants have been suspended from a ceiling.",
          "B. Chairs have been stacked in front of an entryway.",
          "C. A computer station has been set up on a desk.",
          "D. A rug has been rolled up against a wall.",
        ],
        correctAnswer: "C",
      },
      {
        id: 6,
        image:
          "https://lamtracnghiem.com/wp-content/uploads/THI-THU/TOEIC/6.png",
        question: "Question 6:",
        options: [
          "A. One of the men is sweeping a patio.",
          "B. One of the men is replacing some flooring.",
          "C. A door has been taken off its frame.",
          "D. A light fixture has been left on the ground.",
        ],
        correctAnswer: "A",
      },

      // ===== PART 2 =====
      {
        id: 7,
        question: "Question 7: How old is this building?",
        options: [
          "A. To ship some materials.",
          "B. About ten years old.",
          "C. Company offices, I think.",
        ],
        correctAnswer: "B",
      },
      {
        id: 8,
        question: "Question 8: Can you come to my jazz performance tonight?",
        options: [
          "A. I'm sorry I was late for the meeting.",
          "B. Mostly just local musicians.",
          "C. Sure, I'll be there!",
        ],
        correctAnswer: "C",
      },
      {
        id: 9,
        question: "Question 9: Which apartment submitted a work order?",
        options: [
          "A. It's what you did for a living.",
          "B. Submit your assignment here.",
          "C. It came from the tenants in B23.",
        ],
        correctAnswer: "C",
      },
      {
        id: 10,
        question:
          "Question 10: Will you contact the vendor about changing our delivery date?",
        options: [
          "A. Of course, I'll take care of it.",
          "B. An e-mail receipt.",
          "C. Could I get change for a dollar?",
        ],
        correctAnswer: "A",
      },
      {
        id: 11,
        question: "Question 11: Why was the maintenance worker here?",
        options: [
          "A. No, he didn't.",
          "B. From three o'clock until four.",
          "C. Because a light needed to be fixed.",
        ],
        correctAnswer: "C",
      },
      {
        id: 12,
        question: "Question 12: Did management make a hiring decision yet?",
        options: [
          "A. Put it on the highest shelf.",
          "B. The personnel department.",
          "C. Yes, they chose Jacob Borgman.",
        ],
        correctAnswer: "C",
      },
      {
        id: 13,
        question:
          "Question 13: Do you want to eat here in our cafeteria or go out?",
        options: [
          "A. He went there yesterday.",
          "B. Well, maybe a sandwich.",
          "C. Let's eat here.",
        ],
        correctAnswer: "C",
      },
      {
        id: 14,
        question:
          "Question 14: Didn't you e-mail the employment contract to Mr. Patel yesterday?",
        options: [
          "A. Yes, I would agree.",
          "B. No, I'll send it now.",
          "C. Check the employee manual.",
        ],
        correctAnswer: "B",
      },
      {
        id: 15,
        question: "Question 15: Our division's picnic is this Saturday, right?",
        options: [
          "A. There's a lot of rain in the forecast.",
          "B. Sure, I like salad.",
          "C. At the end of this corridor.",
        ],
        correctAnswer: "A",
      },
      {
        id: 16,
        question: "Question 16: Would you like coffee or tea?",
        options: [
          "A. Just water, please.",
          "B. For a few dollars more.",
          "C. A fifteen-minute break.",
        ],
        correctAnswer: "A",
      },
      {
        id: 17,
        question: "Question 17: We achieved our sales targets this month.",
        options: [
          "A. That's excellent news!",
          "B. A few times a day.",
          "C. To the end of April.",
        ],
        correctAnswer: "A",
      },
      {
        id: 18,
        question: "Question 18: How often do you travel for your job?",
        options: [
          "A. It turned out well.",
          "B. Yes, I did find one.",
          "C. About once a month.",
        ],
        correctAnswer: "C",
      },
      {
        id: 19,
        question: "Question 19: We should hike the Wildflower Trail today.",
        options: [
          "A. This seat is available.",
          "B. I didn't bring boots.",
          "C. At the visitors' center.",
        ],
        correctAnswer: "B",
      },
      {
        id: 20,
        question: "Question 20: You've booked a hotel in London, haven't you?",
        options: [
          "A. Very enjoyable, thanks.",
          "B. He usually takes the train.",
          "C. Yes, I made a reservation last week.",
        ],
        correctAnswer: "C",
      },
      {
        id: 21,
        question:
          "Question 21: Are there any tickets left for tonight's concert?",
        options: [
          "A. It's sold out.",
          "B. He's a concert violinist.",
          "C. They already left.",
        ],
        correctAnswer: "A",
      },
      {
        id: 22,
        question: "Question 22: Haven't you used this software before?",
        options: [
          "A. Thanks, but I can't swim.",
          "B. I haven't had the chance.",
          "C. About 40 dollars.",
        ],
        correctAnswer: "B",
      },
      {
        id: 23,
        question: "Question 23: When is the new blender going to be released?",
        options: [
          "A. Only with fruits and vegetables.",
          "B. In the kitchen cabinet.",
          "C. The prototype is still being tested.",
        ],
        correctAnswer: "C",
      },
      {
        id: 24,
        question: "Question 24: Who's picking up our clients at the airport?",
        options: [
          "A. They decided to drive.",
          "B. At terminal 2.",
          "C. It's a marketing position.",
        ],
        correctAnswer: "A",
      },
      {
        id: 25,
        question:
          "Question 25: Where are the red roses that came in this morning?",
        options: [
          "A. About three liters of water.",
          "B. No, I didn't check out the sale.",
          "C. I needed some for a large bouquet.",
        ],
        correctAnswer: "C",
      },
      {
        id: 26,
        question:
          "Question 26: This film has been nominated for several awards.",
        options: [
          "A. Why don't we go see it?",
          "B. After the announcement.",
          "C. He made a great speech.",
        ],
        correctAnswer: "A",
      },
      {
        id: 27,
        question:
          "Question 27: Who's interested in starting a car pool program?",
        options: [
          "A. Thanks, but I can't swim.",
          "B. Clara's already organizing one.",
          "C. It's a very interesting article.",
        ],
        correctAnswer: "B",
      },
      {
        id: 28,
        question: "Question 28: Where will I teach my workshop this month?",
        options: [
          "A. We just sent an e-mail to all instructors.",
          "B. Five to seven months.",
          "C. Yes, it's a beautiful building.",
        ],
        correctAnswer: "A",
      },
      {
        id: 29,
        question:
          "Question 29: Why are we moving these sweaters to the back of the store?",
        options: [
          "A. In the new shopping mall.",
          "B. Yes, they come in other colors.",
          "C. Our spring merchandise is arriving soon.",
        ],
        correctAnswer: "C",
      },
      {
        id: 30,
        question:
          "Question 30: Would you be interested in working on some of these contracts?",
        options: [
          "A. Thank you for meeting me.",
          "B. A contact lens prescription.",
          "C. I have very limited time.",
        ],
        correctAnswer: "C",
      },
      {
        id: 31,
        question: "Question 31: What type of job are you looking for?",
        options: [
          "A. No, at ten A.M.",
          "B. I really like working with computers.",
          "C. Just a résumé is needed.",
        ],
        correctAnswer: "B",
      },
    ],
  },
  {
    id: 2,
    title: "TOEIC Đề 1 - Part 4",
    audio: "/toeic/TOEIC-Listening-TEST-17-Part-4.mp3",
    part: 4,
    time: "40 phút",
    questions: [
      {
        id: 1,
        question: `Question 73: What type of company does the speaker work for?`,
        options: [
          "A: A technology consulting firm",
          "B: A landscaping company",
          "C: A construction company",
          "D: A law firm",
        ],
        correctAnswer: "A",
      },
      {
        id: 2,
        question: `Question 74: What good news does the speaker share about the company?`,
        options: [
          "A: It won a city contract.",
          "B: It will expand its headquarters.",
          "C: It has won an industry award.",
          "D: Its profits have increased.",
        ],
        correctAnswer: "C",
      },
      {
        id: 3,
        question: `Question 75: What does the speaker say he will do later this week?`,
        options: [
          "A: Purchase new equipment",
          "B: Update some software",
          "C: Contact an advertising agency",
          "D: Post some job openings",
        ],
        correctAnswer: "D",
      },

      {
        id: 4,
        question: `Question 76: Where does the talk most likely take place?`,
        options: [
          "A: At a press conference",
          "B: At a trade show",
          "C: At an awards ceremony",
          "D: At a sports competition",
        ],
        correctAnswer: "B",
      },
      {
        id: 5,
        question: `Question 77: What aspect of a product does the speaker mention?`,
        options: [
          "A: Its improved graphics",
          "B: Its fast download speeds",
          "C: Its smartphone compatibility",
          "D: Its high-quality audio",
        ],
        correctAnswer: "C",
      },
      {
        id: 6,
        question: `Question 78: What does the speaker say the listeners can do after the talk?`,
        options: [
          "A: Start a free trial",
          "B: Speak to a representative",
          "C: Enjoy some refreshments",
          "D: Enter a contest",
        ],
        correctAnswer: "B",
      },

      {
        id: 7,
        question: `Question 79: Where is the meeting most likely taking place?`,
        options: [
          "A: At a farm",
          "B: At a cafeteria",
          "C: At a warehouse",
          "D: At a grocery store",
        ],
        correctAnswer: "C",
      },
      {
        id: 8,
        question: `Question 80: What does the speaker say is required?`,
        options: [
          "A: Requesting vacation time in advance",
          "B: Updating employee contact information",
          "C: Wearing the appropriate clothing",
          "D: Completing some employee training",
        ],
        correctAnswer: "D",
      },
      {
        id: 9,
        question: `Question 81: What did the speaker find out about this week?`,
        options: [
          "A: Business has been slower than usual.",
          "B: Inventory has been running low.",
          "C: Employees have been missing meetings.",
          "D: Workers have been taking extended breaks.",
        ],
        correctAnswer: "B",
      },

      {
        id: 10,
        question: `Question 82: What type of business is coming to an area?`,
        options: [
          "A: A research facility",
          "B: A delivery service",
          "C: A computer repair company",
          "D: An electronics manufacturer",
        ],
        correctAnswer: "B",
      },
      {
        id: 11,
        question: `Question 83: Why was a specific location chosen?`,
        options: [
          "A: It is near public transportation.",
          "B: It is affordable.",
          "C: It is near an educational institution.",
          "D: It will attract a lot of customers.",
        ],
        correctAnswer: "A",
      },
      {
        id: 12,
        question: `Question 84: How can the listeners find out more information?`,
        options: [
          "A: By attending an event",
          "B: By visiting a Web site",
          "C: By calling a city official",
          "D: By subscribing to a newsletter",
        ],
        correctAnswer: "B",
      },

      {
        id: 13,
        question: `Question 85: What is the broadcast mainly about?`,
        options: [
          "A: The announcement of a sporting competition",
          "B: The completion of a construction project",
          "C: The closing of a local business",
          "D: The election of a city official",
        ],
        correctAnswer: "A",
      },
      {
        id: 14,
        question: `Question 86: According to the speaker, which industry will benefit from an event?`,
        options: [
          "A: Technology",
          "B: Manufacturing",
          "C: Fishing",
          "D: Tourism",
        ],
        correctAnswer: "D",
      },
      {
        id: 15,
        question: `Question 87: Why does the speaker say, “that’s less than taking the ferry”?`,
        options: [
          "A: To show surprise",
          "B: To stress a disadvantage",
          "C: To acknowledge a mistake",
          "D: To offer a counterargument",
        ],
        correctAnswer: "A",
      },

      {
        id: 16,
        question: `Question 88: What kind of business does the speaker work for?`,
        options: [
          "A: A publicity agency",
          "B: A plastics manufacturer",
          "C: An accounting firm",
          "D: A grocery store",
        ],
        correctAnswer: "C",
      },
      {
        id: 17,
        question: `Question 89: What does the speaker mainly discuss?`,
        options: [
          "A: Upgrading the bookkeeping system",
          "B: Preparing for a new regulation",
          "C: Revising a company logo",
          "D: Increasing online advertising",
        ],
        correctAnswer: "B",
      },
      {
        id: 18,
        question: `Question 90: What does the speaker expect one of the listeners to do?`,
        options: [
          "A: Contact another department",
          "B: Draft a timeline",
          "C: Find a new supplier",
          "D: Design a showroom layout",
        ],
        correctAnswer: "A",
      },

      {
        id: 19,
        question: `Question 91: Who most likely is the speaker?`,
        options: [
          "A: A journalist",
          "B: An accountant",
          "C: A restaurant owner",
          "D: A customer service representative",
        ],
        correctAnswer: "D",
      },
      {
        id: 20,
        question: `Question 92: What does the speaker say she needs the listener to do?`,
        options: [
          "A: Contact some clients",
          "B: Check an inventory list",
          "C: Create a marketing campaign",
          "D: Scan some information",
        ],
        correctAnswer: "A",
      },
      {
        id: 21,
        question: `Question 93: Why does the speaker say, “we’re offering a workshop on that topic next month”?`,
        options: [
          "A: To reject an invitation",
          "B: To explain a survey",
          "C: To make a recommendation",
          "D: To ask for help",
        ],
        correctAnswer: "C",
      },

      {
        id: 22,
        question: `Question 94: What is the speaker discussing?`,
        options: [
          "A: Updating a database",
          "B: Hiring more staff",
          "C: Revising safety guidelines",
          "D: Purchasing supplies",
        ],
        correctAnswer: "C",
      },
      {
        id: 23,
        question: `Question 95: Where does the speaker most likely work?`,
        options: [
          "A: At a warehouse",
          "B: At a fitness center",
          "C: At a home-improvement store",
          "D: At a cleaning service",
        ],
        correctAnswer: "A",
      },
      {
        id: 24,
        question: `Question 96: What does the speaker imply when he says, “Tunji, I think you have a free hour tomorrow morning”?`,
        options: [
          "A: Tunji should complete the task.",
          "B: Tunji can attend the client meeting.",
          "C: Tunji’s schedule needs to be corrected.",
          "D: Tunji can leave work early.",
        ],
        correctAnswer: "A",
      },

      {
        id: 25,
        question: `Question 97: Where does the speaker work?`,
        options: [
          "A: At a community center",
          "B: At a car repair shop",
          "C: At a supermarket",
          "D: At a department store",
        ],
        correctAnswer: "D",
      },
      {
        id: 26,
        question: `Question 98: Look at the graphic. How much will the speaker pay for today’s order?`,
        options: ["A: $15", "B: $17", "C: $18", "D: $14"],
        correctAnswer: "B",
      },
      {
        id: 27,
        question: `Question 99: What does the speaker want to install?`,
        options: [
          "A: A beverage vending machine",
          "B: An air-conditioning unit",
          "C: Some security cameras",
          "D: Some carpeting",
        ],
        correctAnswer: "C",
      },

      {
        id: 28,
        question: `Question 100: Look at the graphic. Who is the speaker?`,
        options: [
          "A: Takanori Kimura",
          "B: Ozan Demir",
          "C: Robert Wilson",
          "D: Ivan Stepanov",
        ],
        correctAnswer: "A",
      },
      {
        id: 29,
        question: `Question 101: How is the company trying to increase participation in a program?`,
        options: [
          "A: By offering free snacks",
          "B: By providing paid time off",
          "C: By providing a salary increase",
          "D: By giving away a free trip",
        ],
        correctAnswer: "B",
      },
      {
        id: 30,
        question: `Question 102: What will the speaker do next?`,
        options: [
          "A: Introduce some committee members",
          "B: Review some sales figures",
          "C: Pass out tickets to an upcoming event",
          "D: Give examples of employee goals",
        ],
        correctAnswer: "A",
      },
    ],
  },
];

export async function GET(request: Request) {
  try {
    // Simulate database query delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    // Nếu có id, lấy user cụ thể
    if (id) {
      const userId = parseInt(id);
      const user = exams.find((u) => u.id === userId);

      if (!user) {
        return Response.json(
          { success: false, error: "User not found" },
          { status: 404 },
        );
      }

      return Response.json({
        success: true,
        data: user,
        message: "User fetched successfully",
      });
    }

    // Nếu không có id, lấy tất cả users
    return Response.json({
      success: true,
      data: exams,
      message: "Exams fetched successfully",
    });
  } catch (error) {
    return Response.json(
      { success: false, error: "Failed to fetch exams" },
      { status: 500 },
    );
  }
}

// In-memory data store (in production use a real database)
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

// GET - Lấy tất cả users hoặc lấy user theo ID
// export async function GET(request: Request) {
//   try {
//     // Simulate database query delay
//     await new Promise((resolve) => setTimeout(resolve, 500));

//     const { searchParams } = new URL(request.url);
//     const id = searchParams.get('id');

//     // Nếu có id, lấy user cụ thể
//     if (id) {
//       const userId = parseInt(id);
//       const user = users.find((u) => u.id === userId);

//       if (!user) {
//         return Response.json(
//           { success: false, error: 'User not found' },
//           { status: 404 }
//         );
//       }

//       return Response.json({
//         success: true,
//         data: user,
//         message: 'User fetched successfully',
//       });
//     }

//     // Nếu không có id, lấy tất cả users
//     return Response.json({
//       success: true,
//       data: users,
//       message: 'Users fetched successfully',
//     });
//   } catch (error) {
//     return Response.json(
//       { success: false, error: 'Failed to fetch users' },
//       { status: 500 }
//     );
//   }
// }

// POST - Thêm user mới
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validation
    if (!body.name || !body.email) {
      return Response.json(
        { success: false, error: "Name and email are required" },
        { status: 400 },
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return Response.json(
        { success: false, error: "Invalid email format" },
        { status: 400 },
      );
    }

    const newUser = {
      id: Math.max(...users.map((u) => u.id), 0) + 1,
      name: body.name,
      email: body.email,
    };

    users.push(newUser);

    return Response.json(
      { success: true, data: newUser, message: "User created successfully" },
      { status: 201 },
    );
  } catch (error) {
    console.error("POST error:", error);
    return Response.json(
      { success: false, error: "Failed to create user" },
      { status: 500 },
    );
  }
}

// PUT - Cập nhật user
export async function PUT(request: Request) {
  try {
    const body = await request.json();

    // Validation
    if (!body.id || !body.name || !body.email) {
      return Response.json(
        { success: false, error: "ID, name, and email are required" },
        { status: 400 },
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return Response.json(
        { success: false, error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Find and update user
    const userIndex = users.findIndex((u) => u.id === body.id);
    if (userIndex === -1) {
      return Response.json(
        { success: false, error: "User not found" },
        { status: 404 },
      );
    }

    users[userIndex] = {
      id: body.id,
      name: body.name,
      email: body.email,
    };

    return Response.json({
      success: true,
      data: users[userIndex],
      message: "User updated successfully",
    });
  } catch (error) {
    console.error("PUT error:", error);
    return Response.json(
      { success: false, error: "Failed to update user" },
      { status: 500 },
    );
  }
}

// DELETE - Xóa user
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") || "");

    if (!id) {
      return Response.json(
        { success: false, error: "ID is required" },
        { status: 400 },
      );
    }

    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex === -1) {
      return Response.json(
        { success: false, error: "User not found" },
        { status: 404 },
      );
    }

    const deletedUser = users.splice(userIndex, 1)[0];

    return Response.json({
      success: true,
      data: deletedUser,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("DELETE error:", error);
    return Response.json(
      { success: false, error: "Failed to delete user" },
      { status: 500 },
    );
  }
}
