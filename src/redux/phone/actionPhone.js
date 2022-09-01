import { BUY_PHONE } from "./type";

export const buyPhone = (totalPhone) => {
    return {
        type:BUY_PHONE,
          // VIDEO 186 : REDUX action payload
          payload:totalPhone
    }
}