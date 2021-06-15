<template>
  <div class="hello">
    <h2>Welcome to Vue frontend exercise!</h2>
    <ul>
      <a target="_blank" href="https://www.86repairs.com/"
        >Here's a link to our official company site</a
      >
    </ul>
    <ul>
      <a target="_blank" href="https://www.youtube.com/watch?v=OimrN6dn7HA"
        >Here's a video of our CEO being his charismatic self</a
      >
    </ul>
    <ul>
      <a
        target="_blank"
        href="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
        >Here's a cute picture of a cat</a
      >
    </ul>
    <ul>
      <a
        target="blank"
        href="https://www.google.com/search?q=how+to+google+things+better"
      >
        Here are some tips about how to be a better developer</a
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin: 60px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
