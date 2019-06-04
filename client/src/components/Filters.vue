<template>
  <div class="root">
    <div class="wrap-collabsible">
    <input id="collapsible" class="toggle" type="checkbox">
    <label for="collapsible" class="lbl-toggle">Filters</label>
      <div class="collapsible-content">
        <div class="content-inner filters">
          <div id="hide-completed" class="hide-completed-container">
            Hide Completed
            <input type="checkbox" v-on:change="update" v-model="hideCompleted">
          </div>

          <div id="date" class="select-container">
            <select class="custom-select" v-if="!displayDatepicker" v-on:change="update" v-model="deadlineID">
              <option value="-1"> Due </option>
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
              <a href="#" v-on:click="reset">Back</a>
            </div>
          </div>
      
          <div id="sort-by" class="select-container">
            <select v-model="sortByID" v-on:change="update">
              <option value="-1">Sort by</option>
              <option value=0>Alphabetical</option>
              <option value="1">Date</option>
            </select>
          </div>  

          <div id="order" class="select-container">
            <select v-model="orderID" v-on:change="update">
              <option value="-1">Order</option>
              <option value="0">Ascending</option>
              <option value="1">Descending</option>
            </select>
          </div>
        </div>
      </div>
    </div>
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
        sortByID: -1,
        orderID: -1,
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
            this.datepickerStartDate.setHours(0, 0, 0, 0);
            dateRange.push(this.datepickerStartDate);
          } else {
            dateRange.push(false);
          }

          if (this.datepickerEndDate) {
            this.datepickerEndDate.setTime(this.datepickerEndDate.getTime() + 24 * 3600000); //set forwards one day since the comparison checks for less than 
            this.datepickerEndDate.setHours(0, 0, 0, 0);
            dateRange.push(this.datepickerEndDate);
          } else {
            dateRange.push(false);
          }

          filters.deadline = dateRange;
        }

        //what to sort by
        if (this.sortByID > -1) {
          if (this.sortByID == 0) {
            filters.byAlphabetical = true;
          }

          if (this.sortByID == 1) {
            filters.byDate = true;
          }
        }

        //what order to sort in
        if (this.orderID > -1) {
          if (this.orderID == 0) {
            filters.ascending = true;
          } else {
            filters.descending = true;
          }
        }

				this.$emit("update", filters);
      },
      reset() {
        this.displayDatepicker = false;
        this.datepickerStartDate = null;
        this.datepickerEndDate = null;
        this.update();
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
            endDate.setDate(endDate.getDate() + (7 - endDate.getDay()));
          } else {
            startDate.setDate(startDate.getDate() + 7 - startDate.getDay());
            endDate.setDate(endDate.getDate() + 7 + (7 - endDate.getDay()));
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
  .filters {
    display: flex;
    flex-direction: column;
		background: #333;
    color: white;
		padding: 1rem;
		align-items: center;
    font-size: small;
	}

  .wrap-collabsible {
    margin-bottom: 1.2rem 0;
  }

  .toggle {
    display: none;
  }

  .lbl-toggle {
    display: block;
    text-align: center;
    padding: 1rem;
    color: white;
    background: #333;
    cursor: pointer;
    transition: all 0.25s ease-out;
  }

  .lbl-toggle:hover {
    color: white;
  }

  .lbl-toggle::before {
    content: ' ';
    display: inline-block;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid currentColor;
    vertical-align: middle;
    margin-right: .7rem;
    transform: translateY(-2px);
    transition: transform .2s ease-out;
  }

  .toggle:checked + .lbl-toggle::before {
    transform: rotate(90deg) translateX(-3px);
  }

  .collapsible-content {
    max-height: 0px;
    overflow: hidden;
    transition: max-height .25s ease-in-out;
  }

  .toggle:checked + .lbl-toggle + .collapsible-content {
    overflow: visible;
    max-height: 350px;
  }

  .toggle:checked + .lbl-toggle {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .collapsible-content .content-inner {
    padding-top: 0rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
  }

  .select-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .5rem;
  }

  .select-container select {
    background: #333;
    color: white;
    border: 1px solid white;
  }

  .default {
    color: #ccc;
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
    .filters {
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
