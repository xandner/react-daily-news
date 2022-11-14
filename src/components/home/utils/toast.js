import {toast} from "react-toastify"

export const showToast=(type,msg)=>{
    switch(type){
        case "SECCESS":
            toast.success(msg,{
                position:toast.POSITION.BOTTOM_RIGHT
            })
            break;
        case "ERROR":
            toast.error(msg, {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            break;
        default:
            return false
    }
}