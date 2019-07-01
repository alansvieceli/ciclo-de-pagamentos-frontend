import Constants from '../consts';

export function selectTab(tabId) {
    console.log(">> " + tabId)
    return {
            type: Constants.TAB_SELECTED,
            payload: tabId
    }    
}