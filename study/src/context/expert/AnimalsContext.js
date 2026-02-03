import { createContext, useState } from "react";

// 1. 생성 -> 초기화
export const AnimalsContext = createContext({
  state: {animals: []},
  actions: {insert: () => {}, remove: () => {}}
})

// 2. 제공
// provider = children 자식에게 주겠다?
export const AnimalsProvider = ({children}) => {
  // 상태 를 변환할수 있으니 그 값을 주겠다?
  // state animals가 있으니 setter로 값을 줘야 animals에 입력이 가능함
  // 그러면 actions 에 setAnimals 값을 줘야 가능?

    // Context에 있는 동물 세마리를 버튼으로 출력하시오
  // input에 동물을 입력 후 엔터치면 동물 버튼이 추가되게 구현하세요

  // usestate 안에 있는게 기본 값?
  // 세터는 상태를 변경할때 부르는 값
  const [animals, setAnimals] = useState(["누렁이", "점박이", "얼룩이"])
  const value = {
    state: {
      animals
    },
    actions: {
      insert: () => {
        setAnimals()
      },
      remove: () => {}
    }
  }

  // 실습
  // insert 메서드를 완성하시오!

  return (
    <AnimalsContext.Provider value={value}>
      {children}
    </AnimalsContext.Provider>
  )
}


