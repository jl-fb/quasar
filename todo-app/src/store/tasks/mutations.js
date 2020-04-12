import Vue from "vue";

export function updateTask(state, payload) {
  console.log("payload in mutation:", payload);
  Object.assign(state.tasks[payload.id], payload.updates);
}
export function deleteTask(state, id) {
  console.log("deleteTask mutation:", id);
  Vue.delete(state.tasks, id)
}


export function addTask(state, payload) {
  console.log("addTask mutation:", payload);
  Vue.set(state.tasks, payload.id, payload.task)
}
export function setSearch(state, payload) {
  console.log("setSearch mutation:", payload);
  state.search = payload
}
export function setSort(state, payload) {
  console.log("setSort mutation:", payload);
  state.sort = payload
}



