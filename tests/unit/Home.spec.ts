import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("renders about me in title on home", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.get(".title").text()).to.include("About Me");
  });
});
