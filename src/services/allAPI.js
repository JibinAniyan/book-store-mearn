import commonAPI from "./commomAPI"
import serverURL from "./serverURL"

// register api : called by auth component when register btn is clicked
export const registerAPI = async(userDetails)=>{
return await commonAPI("POST",`${serverURL}/register`,userDetails)

}