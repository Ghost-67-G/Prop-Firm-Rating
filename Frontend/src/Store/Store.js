import {createStore,combineReducers} from "redux"

function userSection(oldData={},newData){
  if(newData.type === "LOGINDATA"){
    oldData = newData.payload
  }else if(newData.type==="LOG_OUT"){
    oldData ={}
  }
  return{...oldData}
}

let allShelve = combineReducers({userSection})

let store = createStore(allShelve)
 export default store