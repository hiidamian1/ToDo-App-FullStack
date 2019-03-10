<template>
  <form v-on:change="update" class="root">
    <input type="checkbox" v-model="hideCompleted"> Hide Completed
    <Datepicker class="datepicker" v-on:input="update" v-model="deadline" :clear-button="true" clear-button-icon="fas fa-times"/> Completed By
  </form>
</template>

<script>
	import Datepicker from "vuejs-datepicker";

  export default {
    name: "Filters",
    components: {
      Datepicker
    },
    data() {
      return {
        hideCompleted: false,
        deadline: null,
        /*state: {
          disabledDates: {
            to: this._disabledDate()
          }
        }*/
      }
    },
    methods: {
      update() {
				//e.preventDefault();
				
				let filters = {};

				if (this.hideCompleted) {
					filters.hideCompleted = true;
				}

				if (this.deadline) {
					filters.deadline = this.deadline;
				}
				this.$emit("update", filters);
      },
      _disabledDate() {
				let date = new Date();

				date.setDate(date.getDate() - 1);
				
				return date;
			}
    }
  }
</script>

<style scoped>
  .root {
		background: #333;
    color: white;
		padding: 1rem;
		text-align: center;
    font-size: small;
	}

  .datepicker {
    display: inline-block;
    color: black;
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
