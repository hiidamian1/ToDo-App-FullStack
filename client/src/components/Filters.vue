<template>
  <form v-on:change="update" class="root">
    <div class="hide-completed-container">
      Hide Completed
      <input type="checkbox" v-model="hideCompleted">
    </div>
    <div class="datepicker-container">
      Completed By
      <Datepicker class="datepicker" v-on:input="update" v-model="deadline" :clear-button="true" clear-button-icon="fas fa-times"/> 
    </div>
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
    display: flex;
    flex-direction: column;
		background: #333;
    color: white;
		padding: 1rem;
		align-items: center;
    font-size: small;
	}

  .datepicker-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .5rem;
  }

  .datepicker {
    color: black;
    margin-left: .5rem;
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

    .datepicker-container {
      flex-direction: row;
      margin-top: 0rem;
      margin-left: 1rem;
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
