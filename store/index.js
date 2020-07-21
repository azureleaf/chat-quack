export const state = () => ({
  // For which user the entire UI is displayed
  viewerId: 1, // Initial value
  users: [
    {
      id: 1,
      avatar: "/duck_yellow.png",
      name: "Donald Duck"
    },
    {
      id: 2,
      avatar: "/duck_purple.png",
      name: "Daisy Duck"
    },
    {
      id: 3,
      avatar: "/duck_green.png",
      name: "Louie Duck"
    },
    {
      id: 4,
      avatar: "/duck_pink.png",
      name: "Huey Duck"
    },
    {
      id: 5,
      avatar: "/duck_blue.png",
      name: "Dewey Duck"
    }
  ],
  rooms: [
    {
      id: 30001,
      type: "multilateral",
      users: [
        { id: 1, isPinning: true },
        { id: 2, isPinning: false },
        { id: 3, isPinning: true },
        { id: 4, isPinning: false },
        { id: 5, isPinning: false },
      ],
      avatar: "/home.png",
      name: "ダック家雑談"
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
      type: "bilateral",
      users: [
        { id: 1, isPinning: false },
        { id: 5, isPinning: false }
      ]
    },
    {
      id: 10009,
      type: "bilateral",
      users: [
        { id: 2, isPinning: false },
        { id: 5, isPinning: false }
      ]
    },
    {
      id: 10010,
      type: "bilateral",
      users: [
        { id: 3, isPinning: false },
        { id: 5, isPinning: false }
      ]
    },
    {
      id: 10011,
      type: "bilateral",
      users: [
        { id: 4, isPinning: false },
        { id: 5, isPinning: false }
      ]
    },
    {
      id: 20001,
      type: "unilateral",
      users: [{ id: 1, isPinning: true }]
    },
    {
      id: 20002,
      type: "unilateral",
      users: [{ id: 2, isPinning: false }]
    },
    {
      id: 20003,
      type: "unilateral",
      users: [{ id: 3, isPinning: false }]
    },
    {
      id: 20004,
      type: "unilateral",
      users: [{ id: 4, isPinning: false }]
    },
    {
      id: 20005,
      type: "unilateral",
      users: [{ id: 5, isPinning: false }]
    }
  ],
  // should be stored in the firebase later
  // Recipient ID is required for "@" message
  msgs: [
    {
      id: 1,
      senderId: 1,
      recipientId: null,
      roomId: 30001,
      reaction: [],
      timestamp: "2020-06-30T05:10:33.717Z",
      text: "Morning everyone! I'm Donald"
    },
    {
      id: 2,
      senderId: 1,
      recipientId: null,
      roomId: 10004,
      reaction: [],
      timestamp: "2020-07-03T05:10:34.717Z",
      text: "Hi Daisy! This is Donald!"
    },
    {
      id: 3,
      senderId: 2,
      recipientId: null,
      roomId: 10002,
      reaction: [],
      timestamp: "2020-07-03T05:12:34.717Z",
      text: "Hello"
    },
    {
      id: 4,
      senderId: 1,
      recipientId: null,
      roomId: 10007,
      reaction: [],
      timestamp: "2020-06-30T05:10:33.717Z",
      text: "Oi Huey!"
    },
    {
      id: 5,
      senderId: 3,
      recipientId: null,
      roomId: 30001,
      reaction: [],
      timestamp: "2020-07-03T05:12:34.717Z",
      text: "Hello there, this is Louie"
    },
    {
      id: 6,
      senderId: 1,
      recipientId: null,
      roomId: 20001,
      reaction: [],
      timestamp: "2020-07-03T05:12:34.717Z",
      text: "Donald's todos: Going to shopping mall"
    }
  ]
});

export const mutations = {
  // Update the ID of the user who is viewing the chat
  setViewerId(state, payload) {
    state.viewerId = payload.viewerId;
  },
  /**
   * Add the new message to the state
   * 
   * @param {*} state Vuex state object
   * @param {*} payload
   *    New message (text body, sender / recipient, etc.) without message ID
   */
  storeNewMsg(state, payload) {
    // Append the message ID to the message
    const newMsg = Object.assign({id: state.msgs.length + 1}, payload);

    // Store entire message
    state.msgs.push(newMsg)
  }
};
