export const SETID = "CURRCLICK/SETID";

export const setId = (currId) =>({type:SETID, currId:currId});

const initState = {
    currId : ""
};

const stateValues = (state = initState, action) =>{
    console.log("action-type : "+action.type);
    console.log("state.Id : "+state.currId);
    switch (action.type) {
        case SETID:
            console.log("actionId : "+action.currId);
            state.currId = action.currId
            console.log("actionId : "+state.currId);
            return(
                state
            );
        default:
            console.log("default");
            return state;
    }
}

export default stateValues;