<template>
  <form @submit="update" class="root">
    <input type="checkbox" v-model="hideCompleted"> Hide Completed
    <datepicker class="datepicker" v-model="deadline" :clear-button="true"/> Completed By
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
				deadline: null
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
    display:inline-block;
    color: black;
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
