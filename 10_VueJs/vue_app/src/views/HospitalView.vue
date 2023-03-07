<template>
  <div class="hospitals">
    
    <h3>Hospital Search</h3>

    <p>Enter a town:</p>
    <input type="text" v-model="town_name"/>
    <input type="button" @click="searchHospitals" value="Search"/>

    <div v-if="please_wait" class="please_wait"><p>Please wait...</p></div>

    <h3 v-if="hospitals.length > 0">Hospital List:</h3>

    <div v-for="hospital in hospitals" v-bind:key="hospital.facility">
      <p>
        {{ hospital.facility }}
        {{ hospital.address }}
        <br/>
        <iframe width="300" height="170" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
        v-bind:src="'https://maps.google.com/maps?q=' + hospital.the_geom.coordinates[1] + ',' + hospital.the_geom.coordinates[0] + '&hl=en-us&z=14&amp;output=embed'"/>

      </p>

    </div>

</div>
</template>

<style>
.hospitals {

}
</style>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  components: {
  },
  data() {
    return {
      please_wait: false,
      town_name: "Yarmouth",
      hospitals: []
    }
  },
  methods: {
    searchHospitals() {
      //
      var town_name = this.town_name;
      var url = "https://data.novascotia.ca/resource/tmfr-3h8a.json?town=" + town_name;

      this.please_wait = true;

      axios.get(url)
        .then((response) => {
          // handle success
          this.hospitals = response.data;
        })
        .catch((error) => {
          // handle error
          console.log(error);
        })
        .finally(()=> {
          // always executed
          this.please_wait = false;
        });
    }
  },
  mounted() {

  }
}
</script>
