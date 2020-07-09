export const state = () => ({
  // For which user the entire UI is displayed
  viewerId: 2, // Initial value
  // should be stored in the firebase later
  channels: [
    {
      id: 1,
      isPinned: false,
      isPerson: false,
      avatar: "/home.png",
      title: "鴨川家雑談"
    },
    {
      id: 2,
      isPinned: false,
      isPerson: true,
      avatar: "/duck_yellow.png",
      title: "鴨川檸檬"
    },
    {
      id: 3,
      isPinned: false,
      isPerson: true,
      avatar: "/duck_purple.png",
      title: "鴨川紫苑"
    },
    {
      id: 4,
      isPinned: false,
      isPerson: true,
      avatar: "/duck_green.png",
      title: "鴨川若菜"
    },
    {
      id: 5,
      isPinned: false,
      isPerson: true,
      avatar: "/duck_pink.png",
      title: "鴨川桜"
    }
  ],
  users: [
    {
      id: 2,
      avatar: "/duck_yellow.png",
      title: "鴨川檸檬"
    },
    {
      id: 3,
      avatar: "/duck_purple.png",
      title: "鴨川紫苑"
    },
    {
      id: 4,
      avatar: "/duck_green.png",
      title: "鴨川若菜"
    },
    {
      id: 5,
      avatar: "/duck_pink.png",
      title: "鴨川桜"
    }
  ],
  rooms: [
    {
      id: 10001,
      isBilateral: false,
      avatar: "/home.png",
      name: "鴨川家雑談",
      members: [
        { id: 1, isPinning: true },
        { id: 2, isPinning: false }
      ]
    },
    {
      id: 10002,
      isBilateral: true,
      avatar: null,
      name: null,
      members: []
    },
    {
      id: 10003,
      members: [],
      isBilateral: true,
      avatar: null,
      name: null
    },
    {
      id: 10004,
      members: [],
      isBilateral: true,
      avatar: null,
      name: null
    },
    {
      id: 10005,
      members: [],
      isBilateral: true,
      avatar: null,
      name: null
    }
  ],
  // should be stored in the firebase later
  msgs: [
    {
      id: 1,
      senderId: 2,
      channelId: null,
      reaction: [],
      timestamp: "2020-06-30T05:10:33.717Z",
      text: "皆さんこんにちは。レモンです。"
    },
    {
      id: 2,
      senderId: 2,
      channelId: 3,
      reaction: [],
      timestamp: "2020-07-03T05:10:34.717Z",
      text: "紫苑さんこんにちは。レモンです。"
    },
    {
      id: 3,
      senderId: 3,
      channelId: 2,
      reaction: [],
      timestamp: "2020-07-03T05:12:34.717Z",
      text: "こんにちはレモンさん。"
    },
    {
      id: 4,
      senderId: 2,
      channelId: 4,
      reaction: [],
      timestamp: "2020-06-30T05:10:33.717Z",
      text: "若菜さんこんにちは。レモンです。"
    },
    {
      id: 5,
      senderId: 3,
      channelId: null,
      reaction: [],
      timestamp: "2020-07-03T05:12:34.717Z",
      text: "若菜です。みなさんはじめまして。"
    }
  ]
});

export const mutations = {
  // Update the ID of the user who is viewing the chat
  setViewerId(state, payload) {
    state.viewerId = payload.viewerId;
  }
};
