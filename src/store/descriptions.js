// import db from "../api/firebase";
import axios from "axios";
axios.defaults.baseURL = "https://work-description.firebaseio.com";

export default {
  state: {
    desc: [],
    selected: { text: "QA", value: "qa" },
    isLoading: false,

    options: [
      { text: "QA", value: "qa" },
      { text: "Dev", value: "dev" },
      { text: "BA", value: "ba" },
      { text: "PM", value: "pm" },
    ],
  },
  getters: {
    getDescription: (state) => state.desc,
    getSelected: (state) => state.selected.value,
    getOptions: (state) => state.options,
    getDescriptionArray: (state) => (number) => {
      const arr = state.desc.map((item) => item.text);
      const randomarr = [];
      if (arr.length > 0) {
        for (let i = randomarr.length; i < number; i++) {
          const r = Math.floor(Math.random() * arr.length);
          if (randomarr.indexOf(r) === -1) {
            randomarr.push(r);
          } else {
            i--;
          }
        }
        return randomarr.map((item) => arr[item]).join("\n");
      }
      return "";
    },
    getIsLoading: (state) => state.isLoading,
  },

  mutations: {
    setState(state, payload) {
      state.desc = payload;
    },
    select(state, position) {
      state.selected = state.options.find((item) => item.value === position);
    },
    addDescription(state, payload) {
      state.desc = [...state.desc, payload];
    },
  },
  actions: {
    async getDescriptions({ commit, state }, payload) {
      state.isLoading = true;
      const response = await axios.get(`/${payload}.json`);
      try {
        const keys = Object.keys(response.data);
        const array = keys.map((key) => ({
          id: key,
          ...response.data[key],
        }));
        commit("setState", array);
        state.isLoading = false;
      } catch (error) {
        commit("setState", []);
        state.isLoading = false;
      }
    },
    async addDescription(context, payload) {
      payload.items.forEach(async (item) => {
        await axios
          .post(`/${payload.selected}.json`, { text: item.trim() })
          .then(() => {
            context.dispatch("getDescriptions", payload.selected);
          });
      });
    },
    async removeDescription(context, { selected, id }) {
      await axios.delete(`/${selected}/${id}.json`).then(() => {
        context.dispatch("getDescriptions", selected);
      });
    },
  },
};
