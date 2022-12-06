import { showEvents } from "../utilities/AddAvatar";
import { speakers } from "./speakers";

const findSpeaker = (name) => {
  return speakers[speakers.findIndex((speaker) => speaker.name === name)];
};

// export const talks = showEvents()


export const talks = [

  // {
  //     'summary': 'Awesome Event!',
  //     'location': '800 Howard St., San Francisco, CA 94103',
  //     'description': 'Really great refreshments',
  //     'start': {
  //       'dateTime': '2022-09-28T09:00:00-07:00',
  //       'timeZone': 'Asia/Kolkata'
  //     },
  //     'end': {
  //       'dateTime': '2022-09-29T9:00:00-07:00',
  //       'timeZone': 'Asia/Kolkata'
  //     },
  //     'recurrence': [
  //       'RRULE:FREQ=DAILY;COUNT=2'
  //     ],
  //     'attendees': [
  //       {'email': 'lpage@example.com'},
  //       {'email': 'sbrin@example.com'}
  //     ],
  //     'reminders': {
  //       'useDefault': false,
  //       'overrides': [
  //         {'method': 'email', 'minutes': 24 * 60},
  //         {'method': 'popup', 'minutes': 10}
  //       ]
  //     }
  // }
  //   ,
  {
    'department':"IT",
    'summary': 'Team Hackathons',
    'sessionDate': "Oct 30th",
    'location': 'Somaiya Vidyavihar',
    'description':"Group of 3 Students will come together to solve a problem, any language can be used",
    'start': {
        'dateTime': '2022-09-28T09:00:00-07:00',
        'timeZone': 'Asia/Kolkata'
      },
    'end': {
        'dateTime': '2022-09-29T9:00:00-07:00',
        'timeZone': 'Asia/Kolkata'
      },
      'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=2'
      ],
      'attendees': [
        {'email': 'lpage@example.com'},
        {'email': 'sbrin@example.com'}
      ],
      'reminders': {
        'useDefault': false,
        'overrides': [
          {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 10}
        ]
      },
    'sessionTime': "2022-10-08T20:00:00.000Z",
    'title': "Team Hackathons",
    
    'genre': "Hackathons",
    'speaker': [findSpeaker("Kashyap Patel"), findSpeaker("Tirth Rambhia")],
  },
  {
    "department":"CS",
    "summary": 'Game Development Contest',
    "sessionDate": "Oct 1th",
    "location": 'Somaiya Vidyavihar',
    "description":
      "A genre or word will be given to the students, and there will be 48 hours to code the Game",
      'start': {
        'dateTime': '2022-10-01T09:00:00-07:00',
        'timeZone': 'Asia/Kolkata'
      },
    'end': {
        'dateTime': '2022-10-02T9:00:00-07:00',
        'timeZone': 'Asia/Kolkata'
      },
      'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=2'
      ],
      'attendees': [
        {'email': 'lpage@example.com'},
        {'email': 'sbrin@example.com'}
      ],
      'reminders': {
        'useDefault': false,
        'overrides': [
          {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 10}
        ]
      },
    "sessionTime": "2022-10-01T20:20:00.000Z",
    "title": "Game Development Contest",
    "genre": "Hackathons",
    "speaker": [findSpeaker("Parth Salian")],
  },


  {
    department:"BCA",
    summary: 'Web Development Challenge',
    sessionDate: "Oct 3th",
    location: 'Somaiya Vidyavihar',
    description:
      "Group of 2 will be judged on their HTML, JS and CSS skills to create websites.",
    sessionTime: "2022-09-08T20:40:00.000Z",
    title: "Web Development Challenge",
    start: {
      'dateTime': '2022-10-03T09:00:00-07:00',
      'timeZone': 'Asia/Kolkata'
    },
    end: {
      'dateTime': '2022-10-04T8:00:00-07:00',
      'timeZone': 'Asia/Kolkata'
    },
    recurrence: [
      'RRULE:FREQ=DAILY;COUNT=1'
    ],
    attendees: [
      {'email': 'lpage@example.com'},
      {'email': 'sbrin@example.com'}
    ],
    reminders: {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10}
      ]
    },
    genre: "Web Development",
    speaker: [findSpeaker("Edzil Misquitta")],
  },



  {
    department:"IT",
    summary: "React Crash Course",
    sessionDate: "Oct 13th",
    location: 'Somaiya Vidyavihar',
    description:
      "Crash Course on, How to use React Js in Application, and React Native in Android Application for better and responsive UI",
    sessionTime: "Oct 13th",
    title: "React Crash Course",
      start: {
        'dateTime': '2022-10-13T09:00:00-07:00',
        'timeZone': 'Asia/Kolkata'
      },
      end: {
        'dateTime': '2022-10-14T8:00:00-07:00',
        'timeZone': 'Asia/Kolkata'
      },
      recurrence: [
        'RRULE:FREQ=DAILY;COUNT=1'
      ],
      attendees: [
        {'email': 'lpage@example.com'},
        {'email': 'sbrin@example.com'}
      ],
      reminders: {
        'useDefault': false,
        'overrides': [
          {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 10}
        ]
      },
    genre: "Web Development",
    speaker: [findSpeaker("Nikhil Parab")],
  },



  {
    department:"IT",
    summary: "Getting Started with Android Studios",
    sessionDate: "Oct 14th",
    location: 'Somaiya Vidyavihar',
    description:
      "A Crash Course on Android Development using Android Studios",
    sessionTime: "2022-10-14T15:00:00.000Z",
    title: "Getting Started with Android Studios",
    start: {
      'dateTime': '2022-10-14T09:00:00-07:00',
      'timeZone': 'Asia/Kolkata'
    },
    end: {
      'dateTime': '2022-10-15T8:00:00-07:00',
      'timeZone': 'Asia/Kolkata'
    },
    recurrence: [
      'RRULE:FREQ=DAILY;COUNT=1'
    ],
    attendees: [
      {'email': 'lpage@example.com'},
      {'email': 'sbrin@example.com'}
    ],
    reminders: {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10}
      ]
    },
    genre: "Android Development",
    speaker: [findSpeaker("Kashyap Patel"), findSpeaker("Parth Salian")],
  },



  {
    department:"ECS",
    summary: "Robotics and IOT",
    sessionDate: "Sept 13th",
    location: 'Somaiya Vidyavihar',
    description:
      "Learn Stuff related AI, Robotics and IOT",
    sessionTime: "2022-09-13T15:50:00.000Z",
    title: "Robotics and IOT",
    start: {
      'dateTime': '2022-10-13T09:00:00-07:00',
      'timeZone': 'Asia/Kolkata'
    },
    end: {
      'dateTime': '2022-10-14T8:00:00-07:00',
      'timeZone': 'Asia/Kolkata'
    },
    recurrence: [
      'RRULE:FREQ=DAILY;COUNT=1'
    ],
    attendees: [
      {'email': 'lpage@example.com'},
      {'email': 'sbrin@example.com'}
    ],
    reminders: {
      'useDefault': false,
      'overrides': [
        {'method': 'email', 'minutes': 24 * 60},
        {'method': 'popup', 'minutes': 10}
      ]
    },
    genre: "Robotics",
    speaker: [findSpeaker("Tirth Rambhia")],
  },
];
