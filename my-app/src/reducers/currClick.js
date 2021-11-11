export const SETID = "CURRCLICK/SETID";
export const MORE_BTN = "CURRCLICK/MORE_BTN";

export const setId = (currId) =>({type:SETID, currId:currId});
export const setMoreBtn = (moreBtn) => ({type:MORE_BTN, moreBtn:moreBtn});

const initState = {
    currId : "",
    moreBtn : false
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
        case MORE_BTN:
            console.log("actionId : "+action.moreBtn);
            state.moreBtn = action.moreBtn
            console.log("actionId : "+state.moreBtn);
            return(
                state
            );
        default:
            console.log("default");
            return state;
    }
}

export default stateValues;