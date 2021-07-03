<template>
  <div class="hello">
    <div class = "loading" v-if="isLoading">
      loading
    </div>
    <div class = "error" v-if="isError">
        {{errorMessage}}
    </div>
    <ul>
        <li v-for="equipment in equipmentList" :key = "equipment.serial_number">

            <div class="card" v-bind:class="{ inactive: (!equipment.active), missingInfo: (!equipment.manufacturer) || (!equipment.equipment_type)}">
                <H3>{{equipment.equipment_type}}</h3>
                <H4>{{equipment.manufacturer}}</h4>

                <ul class = "photos" v-if="equipment.equipment_photos && Array.isArray(equipment.equipment_photos)">
                   <li v-for = "photo in equipment.equipment_photos" :key="photo.full_size_url">
                        <img v-bind:src = "photo.thumbnail_url"/>
                   </li>
                </ul>
                <h1 v-else>NO PHOTOS</h1>

                <button  v-on:click="equipment.expanded = !equipment.expanded">Expand -> </button>
                <div v-if="equipment.expanded">
                    <h5>{{equipment.serial_number}}</h5>
                    <h5>{{equipment.model_number}}</h5>
                    <p>
                        {{equipment.description}}
                    </p>
                </div>

                <button v-on:click="deleteEquipment(equipment)">
                      Delete
                </button>
            </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Home",
    methods: {
      deleteEquipment(equipment) {
        this.equipmentList.splice(this.equipmentList.indexOf(equipment),1);

      },
      async loadData () {
        try {
          this.isLoading = true;
          var response = await this.$http.get('http://localhost:8100/equipment',{});
          var data = response.data;
          console.log(data);
          if (data.error) {
            this.isError = true;
            this.errorMessage = data.error;
          } else {
              for (var index=0; index < data.length; index++) {
                this.equipmentList.push(data[index]);
              }
          }


        } catch (err) {
          this.isError = true;
          this.errorMessage = err;
        } finally {
          this.isLoading = false;
        }
      }
    },
    beforeMount(){
      try {
           this.loadData();
      } catch (err) {
        this.isError = true;
      } finally {
        this.isLoading = false;
      }
    },
    data() {
        return {
            isLoading: true,
            isError: false,
            equipmentList:[]
        }
    }

}

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