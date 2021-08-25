

const state_closure = function(){

    const _state = {}

    return {
        getState: function(){ return _state; },
    }

}()

export default state_closure;