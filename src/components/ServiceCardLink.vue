<template>
  <div
    class="flex flex-col sm:flex-row flex-wrap sm:items-center bg-opacity-25 rounded-3xl shadow-inner dark:shadow-light-inner"
    :style="brandBackgroundStyle"
  >
    <a
      :href="link.href"
      :style="brandBackgroundStyle"
      class="button text-lg bg-opacity-100 dark:bg-opacity-60 flex-shrink-0 px-5 py-2 flex items-baseline justify-between"
      target="_blank"
      rel="noreferrer"
      :aria-describedby="descriptionId"
      :aria-label="linkAriaLabel"
      ><span class="first-letter:uppercase" :style="brandOnClorStyle">{{
        link.title
      }}</span
      ><base-icon icon="link" class="ml-2 h-3" :style="brandOnClorStyle"
    /></a>
    <p
      :id="descriptionId"
      class="mx-5 mt-2 mb-4 sm:my-2 sm:mx-3 text-black dark:text-gray-200"
      data-testid="description"
    >
      {{ link.description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { Service, useDefinitions } from "@/composable/useDefinitions"
import { useColor } from "@/composable/useColor"
import { useId } from "@/composable/useId"

export default defineComponent({
  props: {
    link: {
      required: true,
      type: Object as () => Service["links"][number],
    },
    brand: {
      required: true,
      type: Object as () => Service["brand"],
    },
  },
  setup(props) {
    const { contentStyle: brandOnClorStyle } = useColor(props.brand.onColor, 1)
    const { backgroundStyle: brandBackgroundStyle } = useColor(
      props.brand.color,
    )
    const { id: descriptionId } = useId()

    const { render } = useDefinitions()
    const linkAriaLabel = computed(() =>
      render.value.interface.services.serviceLink.composeAriaLabel(
        props.brand.name,
        props.link.title,
      ),
    )
    return {
      brandBackgroundStyle,
      brandOnClorStyle,
      descriptionId,
      linkAriaLabel,
    }
  },
})
</script>
