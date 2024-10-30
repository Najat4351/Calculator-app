import { create } from "zustand";
const useStore = create((set) => ({
    Histories:[ ],
    setHistories:(history)=>set((state) => ({ Histories: [...state.Histories,history]})),
    deleteHistory:()=>set((state)=>{
        const newHistories = [...state.Histories]; 
        newHistories.pop(); 
        return { Histories: newHistories }; 
}),
clearHistories: () => set({ Histories: [] }),
    Histories1: [],
    setHistories1:(history1)=>set((state) => ({ Histories1: [...state.Histories1,history1]})),
    deleteHistory1:()=>set((state)=>{
        const newHistories1 = [...state.Histories1]; 
        newHistories1.pop(); 
        return { Histories1: newHistories1}; 
}),
    clearHistories1: () => set({ Histories1: [] }),
    result:"",
    setresult:(value)=>set(() => ({ result: value })),
}))
export default useStore;