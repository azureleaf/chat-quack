export const state = () => ({
  counter: 0,
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
  ]
});

export const mutations = {
  increment(state) {
    state.counter++;
  }
};