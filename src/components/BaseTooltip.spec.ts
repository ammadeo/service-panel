import { Base } from "../../tests/utils/core"
import Component from "./BaseTooltip.vue"
const base = new Base(Component, {
  props: {
    text: "test-text",
    show: true,
  },
})

const queryTooltip = "[data-testid='tooltip']"

jest.useFakeTimers()

describe("components/BaseTooltip.vue", () => {
  it("render base slot", () => base.testHasSlot())

  describe("visibility", () => {
    it("show tooltip on prop 'show' set to true", () => {
      const wrapper = base.render()
      expect(wrapper.html()).toContain("test-text")
    })

    it("hide tooltip on prop 'show' set to false", () => {
      const wrapper = base.render({
        props: {
          text: "test-text",
          show: false,
        },
      })
      expect(wrapper.html()).not.toContain("test-text")
    })
  })

  describe("alignment", () => {
    it("has 'left-0' by default", () => {
      const wrapper = base.render()

      const tooltip = wrapper.get(queryTooltip).element
      expect(tooltip).toHaveClass("left-0")
      expect(tooltip).not.toHaveClass("right-0")
    })
    it("has 'right-0' class on prop 'right' set to true", () => {
      const wrapper = base.render({
        props: {
          show: true,
          text: "test-text",
          right: true,
        },
      })

      const tooltip = wrapper.get(queryTooltip).element
      expect(tooltip).toHaveClass("right-0")
      expect(tooltip).not.toHaveClass("left-0")
    })
  })

  describe("emitters", () => {
    it("emit close on click", () => {
      const wrapper = base.render()

      const tooltip = wrapper.get(queryTooltip)
      tooltip.trigger("click")
      expect(wrapper.emitted("close")).toBeTruthy()
    })

    it("emit close on timeout", async () => {
      const wrapper = base.render({
        props: {
          text: "test-text",
          show: true,
          timeout: 2000,
        },
      })

      jest.runAllTimers()
      const tooltip = wrapper.get(queryTooltip)
      tooltip.trigger("click")
      expect(wrapper.emitted("close")).toBeTruthy()
    })
  })
})
