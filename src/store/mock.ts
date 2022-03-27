/* eslint-disable */
// @ts-nocheck
// not used anywhere, but wwhen updating db, data wewre overwritten, needed some backup...

const categoriesMap = {
	Monday: 'Family',
	Tuesday: 'Shopping',
	Wednesday: 'Work',
	Thursday: 'Personal',
	Friday: 'General'
}

const todos = [
    {
     "createdAt": "2022-03-24T00:47:32.485Z",
     "title": "beer&bacon shopping",
     "description": "Nisi reprehenderit facilis pariatur modi et.",
     "type": "Tuesday",
     "done": false,
     "id": "1"
    },
    {
     "createdAt": "2022-03-24T06:01:22.774Z",
     "title": "Beer drinking",
     "description": "Reiciendis aut ratione ut minima sed nihil magni quae.",
     "type": "Friday",
     "done": false,
     "id": "2"
    },
    {
     "createdAt": "2022-03-24T12:12:38.801Z",
     "title": "Bacon eating and beer drinking + movies and games",
     "description": "Cumque aut ut.",
     "type": "Friday",
     "done": false,
     "id": "3"
    },
    {
     "createdAt": "2022-03-24T07:22:18.740Z",
     "title": "El Classico",
     "description": "Impedit occaecati quis possimus at dolorem vitae modi.",
     "type": "Thursday",
     "done": false,
     "id": "4"
    },
    {
     "createdAt": "2022-03-23T23:49:01.207Z",
     "title": "BBQ",
     "description": "Et accusamus nobis pariatur nulla et labore in.",
     "type": "Monday",
     "done": false,
     "id": "5"
    },
    {
     "createdAt": "2022-03-24T08:44:24.608Z",
     "title": "Brainstorming with my team",
     "description": "Est voluptas iure sunt.",
     "type": "Wednesday",
     "done": false,
     "id": "6"
    },
    {
     "createdAt": "2022-03-24T18:12:40.146Z",
     "title": "Birthday party",
     "description": "Odit ducimus nobis sed.",
     "type": "Monday",
     "done": false,
     "id": "7"
    }
];

const categories = [
    {
      "name": "Family",
      "color": "#FFE761",
      "typeId": "Monday",
      "id": "1"
    },
    {
      "name": "Shopping",
      "color": "#F45E6D",
      "typeId": "Tuesday",
      "id": "2"
    },
    {
      "name": "Work",
      "color": "#61DEA4",
      "typeId": "Wednesday",
      "id": "3"
    },
    {
      "name": "Personal",
      "color": "#B678FF",
      "typeId": "Thursday",
      "id": "4"
    },
    {
      "name": "General",
      "color": "#EBEFF5",
      "typeId": "Friday",
      "id": "5"
    }
]