<template>
  <div class="home">
    
    <p>Enter a message:</p>
    <input type="text" v-model="message"/>

    <p>The message is:
      <br/>
      {{ message }}
    </p>

</div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      message: ""
    }
  },
  methods: {
  },
  mounted() {
    this.message = "hey";
  }
}
</script>
