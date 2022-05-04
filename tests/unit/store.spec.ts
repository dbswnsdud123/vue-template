import Vuex from "vuex";
import { cloneDeep } from "lodash";
import { AStore } from "@/store/AStore";

describe("store test", () => {
  const mockStore = new Vuex.Store(cloneDeep(AStore));
  it("state, mutate", async () => {
    mockStore.commit("mutate", ["randomText", { test: 123 }]);
    expect(mockStore.state.randomText).toStrictEqual({ test: 123 });
  });
});
