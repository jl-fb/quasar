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
  let tasksFiltered = getters.tasksFiltered
  let tasks = {}
  // colocando state em um array para poder fazer um loop
  Object.keys(tasksFiltered).map((id) => { if (tasksFiltered[id].completed) tasks[id] = tasksFiltered[id] })

  return tasks
}

export function tasksFiltered(state, getters) {
  let tasksFiltered = {},
    tasksSorted = getters.tasksSorted
  if (state.search) {
    Object.keys(tasksSorted).map((id) => {
      if (tasksSorted[id].name
        .toUpperCase()
        .includes(state.search.toUpperCase())
      ) tasksFiltered[id] = tasksSorted[id]
    })
    return tasksFiltered
  }
  return tasksSorted
}

export function tasksSorted(state) {
  let tasksSorted = {},
    sort = state.sort,
    keysOrdered = Object.keys(state.tasks)
      .sort((a, b) => {
        if (state.tasks[a].name.toLowerCase() > state.tasks[b][sort].toLowerCase()) return 1
        else if (state.tasks[a].name.toLowerCase() < state.tasks[b][sort].toLowerCase()) return -1
        else return 0
      }
      )
  keysOrdered.map(key => tasksSorted[key] = state.tasks[key])

  return tasksSorted
}
