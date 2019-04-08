<template>
  <div class="root">
    <div class="hide-completed-container">
      Hide Completed
      <input type="checkbox" v-on:change="update" v-model="hideCompleted">
    </div>
    <div class="deadline-container">
      Due
      <select v-if="!displayDatepicker" v-on:change="update" v-model="deadlineID">
        <option value="-1"> Select </option>
        <option value="0"> Today </option>
        <option value="1"> Tomorrow </option>
        <option value="2"> This Week </option>
        <option value="3"> Next Week </option>
        <option value="4"> Custom... </option>
      </select>
      
      <div class="datepicker-container" v-else>
        <div class="datepickers">
          <Datepicker class="datepicker" placeholder="Start" v-bind:format="dateFormat" v-model="datepickerStartDate" :clear-button="true" clear-button-icon="fas fa-times"/> 
          <Datepicker class="datepicker" placeholder="End" v-bind:format="dateFormat" v-model="datepickerEndDate" :clear-button="true" clear-button-icon="fas fa-times"/> 
        </div>
        <a href="#" class="go" v-on:click="update">Go</a>
        <a href="#" v-on:click="displayDatepicker = false">Back</a>
      </div>
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
        displayDatepicker: false,
        displayEndDatepicker: false,
        datepickerStartDate: null,
        datepickerEndDate: null
      }
    },
    methods: {
      update() {	
        // If "Custom..." chosen			
        if (this.deadlineID == 4) {
          // Reset dropdown
          this.deadlineID = -1;

          this.displayDatepicker = true;
          return;
        }

				let filters = {};

				if (this.hideCompleted) {
					filters.hideCompleted = true;
				}

        // If ids 0 - 3 are chosen, use precalculated dates
				if (this.deadlineID > -1 && this.deadlineID <= 3) {
          filters.deadline = this._idToDateArray(this.deadlineID);
        } 

        // If function called when datepicker is displayed, use user-entered date
        if (this.displayDatepicker && (this.datepickerStartDate || this.datepickerEndDate)) {
          let dateRange = [];
        
          if (this.datepickerStartDate) {
            dateRange.push(this.datepickerStartDate);
          } else {
            dateRange.push(false);
          }

          if (this.datepickerEndDate) {
            dateRange.push(this.datepickerEndDate);
          } else {
            dateRange.push(false);
          }

          filters.deadline = dateRange;
        }

				this.$emit("update", filters);
      },
      _idToDateArray(id) {
        if (id <= 1) {
          let date = new Date();
          if (id == 1) {
            date.setDate(date.getDate() + 1);
          }

          date.setHours(0, 0, 0, 0);

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

          startDate.setHours(0, 0, 0, 0);
          endDate.setHours(0, 0, 0, 0);

          return [startDate, endDate];
        } else {
          throw ("error! invalid text to date input");
        }
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

  .deadline-container {
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

  .datepickers {
    display: flex;
    flex-direction: column;
  }

  .datepicker {
    color: black;
  }

  a {
    color: white;
    font-size: 1rem;
  }

  .go {
    margin-right: .5rem;
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

    .deadline-container {
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
    }

    .datepicker {
      margin: 0rem .5rem;
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
