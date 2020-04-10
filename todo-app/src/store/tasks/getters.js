//poderia ser assim
// export const getters ={
//   tasks: (state) => {return state.tasks}
// }

export function tasksTodo(state, getters) {
  let tasksFiltered = getters.tasksFiltered
  let tasks = {}
  //colocando state em um array para poder fazer um loop
  Object.keys(tasksFiltered).map((id) => { if (!tasksFiltered[id].completed) tasks[id] = tasksFiltered[id] })

  return tasks;
}
export function tasksCompleted(state, getters) {
  let tasks = {}
  // colocando state em um array para poder fazer um loop
  Object.keys(tasksFiltered).map((id) => { if (tasksFiltered[id].completed) tasks[id] = tasksFiltered[id] })

  return tasks
}

export function tasksFiltered(state) {
  let tasksFiltered = {}
  if (state.search) {
    Object.keys(state.tasks).map((id) => {
      if (state.tasks[id].name
        .toUpperCase()
        .includes(state.search.toUpperCase())
      ) tasksFiltered[id] = state.tasks[id]
    })
    return tasksFiltered
  }
  return state.tasks
}

