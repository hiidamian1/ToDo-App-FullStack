<template>
  <form @submit="update" class="root">
    <input type="checkbox" v-model="hideCompleted"> Hide Completed
    <Datepicker class="datepicker" v-bind:disabledDates="this.state.disabledDates" v-model="deadline" :clear-button="true" clear-button-icon="fas fa-times"/> Completed By
    <input type="submit" value="Update">
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
        state: {
          disabledDates: {
            to: this._exclusiveCurrentDate()
          }
        }
      }
    },
    methods: {
      update(e) {
				e.preventDefault();
				
				let filters = {};

				if (this.hideCompleted) {
					filters.hideCompleted = true;
				}

				if (this.deadline) {
					filters.deadline = this.deadline;
				}

				this.$emit("update", filters);
      },
      _exclusiveCurrentDate() {
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
		padding: 10px;
		text-align: center;
	}

  .datepicker {
    display: inline-block;
    color: black;
  }

  .fas {
    color: white;
  }

  input[type=submit] {
    margin: 10px;
    border: 1px solid white;
		background: #333;
		color: #fff;
		padding: 7px 12px;
		cursor: pointer;
  }
</style>
