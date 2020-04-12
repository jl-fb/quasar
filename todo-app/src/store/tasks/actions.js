import { uid } from 'quasar'

export function updateTask({ commit }, payload) {
  console.log("updateTask action");

  commit("tasks/updateTask", payload, { root: true });
}

export function deleteTask({ commit }, id) {
  console.log("deleteTask action");

  commit('tasks/deleteTask', id, { root: true })
}

export function addTask({ commit }, task) {
  console.log("addTask action");
  let taskuid = uid();
  let payload = {
    id: taskuid,
    task: task
  }

  commit('tasks/addTask', payload, { root: true })
}

export function setSearch({ commit }, payload) {
  console.log("setSearch action", payload);

  commit('tasks/setSearch', payload, { root: true })
}
export function setSort({ commit }, payload) {
  console.log("setSort action", payload);

  commit('tasks/setSort', payload, { root: true })
}