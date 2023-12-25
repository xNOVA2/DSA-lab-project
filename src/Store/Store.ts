import { create } from 'zustand'
import  List  from '../data'


export const songStore = create((set) => ({
  song: List.curr?.data,
  nextSong: () => set(() => ({ song: List.getNextSong() })),
    prevSong: () => set(() => ({ song: List.getPrevSong() })),
    
}))