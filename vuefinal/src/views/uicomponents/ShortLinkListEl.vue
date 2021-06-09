<template>
  <div>
    <div class="cell small-1" style="border: 2px solid #466d98;">
      {{ link.id }}
    </div>
    <div class="cell small-2" style="border: 2px solid #466d98;">
      <a v-bind:href="link.short_link">{{ link.short_link }}</a>
    </div>
    <div
      class="cell small-6 text-left text-wrap"
      style="border: 2px solid #466d98;"
    >
      <a v-bind:href="link.long_link"
        ><span style="word-wrap: break-word;">{{ link.long_link }}</span></a
      >
    </div>
    <div class="cell small-2" style="border: 2px solid #466d98;">
      <button type="button" class="alert button" @click="$emit('delete', link.id)">         <!--  @click="deleteLink(link.id)" -->
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["el"],
  emits: ['delete'],
  data() {
    return {
        link: this.el,
    };
  },
};
</script>

<style lang="scss" scoped></style>
