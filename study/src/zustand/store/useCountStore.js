import { create } from "zustand";
import { combine } from "zustand/middleware";

// 기본 구조
// const store = create(combine(
//   {
//     // 초기상태값
//   },
//   (set) => ({
//     // setter
//   })
// ))

const useCountStore = create(combine(
  {
    count: 0
  },
  (set) => ({
    decrease: () => set((state) => ({count: state.count - 1})),
    increase: () => set((state) => ({count: state.count + 1}))
  })
))

export default useCountStore;