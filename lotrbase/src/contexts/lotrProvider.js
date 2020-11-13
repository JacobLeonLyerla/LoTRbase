import { createContext } from "react";


export interface LOTRContext{
    data: [],
    setCurentData:(currentData:[]) =>void;
}

export const LOTRValue ={
    data: [],
    setCurentData: () => {}
};


export const LOTRContext = createContext<LOTRContext>
(LOTRValue);
