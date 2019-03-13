<template>
  <div class="root">
    <div class="hide-completed-container">
      Hide Completed
      <input type="checkbox" v-on:change="update" v-model="hideCompleted">
    </div>
    <div class="select-container">
      Due
      <select v-on:change="update" v-model="deadlineID">
        <option v-bind:value="-1"> Select </option>
        <option v-bind:value="0"> Today </option>
        <option v-bind:value="1"> Tomorrow </option>
        <option v-bind:value="2"> This Week </option>
        <option v-bind:value="3"> Next Week </option>
      </select>
    </div>

    <!--<div class="datepicker-container">
      Completed By
      <Datepicker class="datepicker" v-bind:format="dateFormat" v-on:input="update" v-model="deadline" :clear-button="true" clear-button-icon="fas fa-times"/> 
    </div>-->
  </div>
</template>

<script>
	import Datepicker from "vuejs-datepicker";

  export default {
    name: "Filters",
    components: {
      Datepicker
    },
    props: [
      "dateFormat"
    ],
    data() {
      return {
        hideCompleted: false,
        deadlineID: -1,
      }
    },
    methods: {
      update() {				
				let filters = {};

				if (this.hideCompleted) {
					filters.hideCompleted = true;
				}

				if (this.deadlineID > -1) {
          filters.deadline = this._idToDateArray(this.deadlineID);
          console.log(filters.deadline);
        }

				this.$emit("update", filters);
      },
      _disabledDate() {
				let date = new Date();

				date.setDate(date.getDate() - 1);
				
				return date;
      },
      _idToDateArray(id) {
        if (id <= 1) {
          let date = new Date();

          if (id == 1) {
            date.setDate(date.getDate() + 1);
          }

          return [date];
        } else if (id <= 3) {
          let startDate = new Date();
          let endDate = new Date();

          if (id == 2) {
            endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
          } else {
            startDate.setDate(startDate.getDate() + 7 - startDate.getDay());
            endDate.setDate(endDate.getDate() + 7 + (6 - endDate.getDay()));
          }

          return [startDate, endDate];
        } else {
          throw ("error! invalid text to date input");
        }

        /*if (id <= 1){
          if (id == 0) {
            return date;
          } else if (id == 1) {
            date.setDate(date.getDate() + 1);
          } 
        } else if (id <= 3) {
          date.setDate(date.getDate() + (6 - date.getDay()));
        } else if (id == 3) {
          date.setDate(date.getDate() + 7 + (6 - date.getDay()));
        } else {
          throw ("error! invalid text to date input");
        }
        
        return date;*/
      }
    }
  }
</script>

<style scoped>
  .root {
    display: flex;
    flex-direction: column;
		background: #333;
    color: white;
		padding: 1rem;
		align-items: center;
    font-size: small;
	}

  .select-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .5rem;
  }
  
  .default {
    color: #ccc;
  }

  .datepicker-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .5rem;
  }

  .datepicker {
    color: black;
  }

  .hide-completed-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media(min-width:600px) {
    .root {
      flex-direction: row;
      justify-content: center;
    }

    .select-container {
      flex-direction: row;
      margin-top: 0rem;
      margin-left: 1rem;
    }

    select {
      margin-left: .5rem;
    }

    .datepicker-container {
      flex-direction: row;
      margin-top: 0rem;
      margin-left: 1rem;
    }

    .datepicker {
      margin-left: .5rem;
    }

    .hide-completed-container {
      flex-direction: row;
    }

    input[type=checkbox] {
      margin-left: .5rem;
    }
  }

  .fas {
    color: white;
  }

  input[type=submit] {
    margin: 1rem;
    border: .1rem solid white;
		background: #333;
		color: #fff;
		padding: .7rem 1.2rem;
		cursor: pointer;
  }
</style>
