export const state = () => ({
  // For which user the entire UI is displayed
  viewerId: 2, // Initial value
  users: [
    {
      id: 1,
      avatar: "/duck_yellow.png",
      name: "鴨川檸檬"
    },
    {
      id: 2,
      avatar: "/duck_purple.png",
      name: "鴨川紫苑"
    },
    {
      id: 3,
      avatar: "/duck_green.png",
      name: "鴨川若菜"
    },
    {
      id: 4,
      avatar: "/duck_pink.png",
      name: "鴨川桜"
    }
  ],
  rooms: [
    {
      id: 10001,
      type: "multilateral",
      users: [
        { id: 1, isPinning: true },
        { id: 2, isPinning: false },
        { id: 3, isPinning: true },
        { id: 4, isPinning: false }
      ],
      avatar: "/home.png",
      name: "鴨川家雑談"
    },
    {
      id: 10002,
      type: "bilateral",
      users: [
        { id: 2, isPinning: false },
        { id: 3, isPinning: false }
      ]
    },
    {
      id: 10003,
      type: "bilateral",
      users: [
        { id: 2, isPinning: false },
        { id: 4, isPinning: false }
      ]
    },
    {
      id: 10004,
      type: "bilateral",
      users: [
        { id: 1, isPinning: false },
        { id: 2, isPinning: false }
      ]
    },
    {
      id: 10005,
      type: "bilateral",
      users: [
        { id: 3, isPinning: false },
        { id: 4, isPinning: false }
      ]
    },
    {
      id: 10006,
      type: "bilateral",
      users: [
        { id: 1, isPinning: false },
        { id: 3, isPinning: false }
      ]
    },
    {
      id: 10007,
      type: "bilateral",
      users: [
        { id: 1, isPinning: false },
        { id: 4, isPinning: false }
      ]
    },
    {
      id: 10008,
      type: "unilateral",
      users: [{ id: 1, isPinning: true }]
    },
    {
      id: 10009,
      type: "unilateral",
      users: [{ id: 2, isPinning: false }]
    },
    {
      id: 10010,
      type: "unilateral",
      users: [{ id: 3, isPinning: false }]
    },
    {
      id: 10011,
      type: "unilateral",
      users: [{ id: 4, isPinning: false }]
    }
  ],
  // should be stored in the firebase later
  msgs: [
    {
      id: 1,
      senderId: 1,
      recipientId: null,
      roomId: 10001,
      reaction: [],
      timestamp: "2020-06-30T05:10:33.717Z",
      text: "皆さんこんにちは。レモンです。"
    },
    {
      id: 2,
      senderId: 1,
      recipientId: null,
      roomId: 10004,
      reaction: [],
      timestamp: "2020-07-03T05:10:34.717Z",
      text: "紫苑さんこんにちは。レモンです。"
    },
    {
      id: 3,
      senderId: 2,
      recipientId: null,
      roomId: 10004,
      reaction: [],
      timestamp: "2020-07-03T05:12:34.717Z",
      text: "こんにちはレモンさん。"
    },
    {
      id: 4,
      senderId: 1,
      recipientId: null,
      roomId: 10006,
      reaction: [],
      timestamp: "2020-06-30T05:10:33.717Z",
      text: "若菜さんこんにちは。レモンです。"
    },
    {
      id: 5,
      senderId: 3,
      recipientId: null,
      roomId: 10001,
      reaction: [],
      timestamp: "2020-07-03T05:12:34.717Z",
      text: "若菜です。みなさんはじめまして。"
    },
    {
      id: 6,
      senderId: 1,
      recipientId: null,
      roomId: 10008,
      reaction: [],
      timestamp: "2020-07-03T05:12:34.717Z",
      text: "レモンの買い物メモ：　牛乳を買う"
    }
  ]
});

export const mutations = {
  // Update the ID of the user who is viewing the chat
  setViewerId(state, payload) {
    state.viewerId = payload.viewerId;
  }
};
