import * as actionTypes from './action-type';

export const increaseValue=()=>{
 return{
     type:actionTypes.INCREMENT
 }
}

export const decreaseValue=()=>{
    return{
        type:actionTypes.DECREMENT
    }
   }


   //An action is simply an object that has two things: a type, 
   //and a payload. An action creator is simply a function, that just returns an action