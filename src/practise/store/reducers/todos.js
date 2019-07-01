export default (state, actions) => {
    switch (actions.type) {
        case 'toggle':
         return {
            show: actions.payload
         }
         default:
             return state
    }
}