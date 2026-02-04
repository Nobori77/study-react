import React, { useContext } from 'react';
import { AnimalsContext } from './AnimalsContext';

const Animals = () => {

  // Context에 있는 동물 세마리를 버튼으로 출력하시오
  const {state, actions} = useContext(AnimalsContext)
  const {insert, remove} = actions;
  const {animals} = state;

  // 동물 버튼을 누르면, 그 버튼을 삭제하는 로직 완성!
  // context에 remove 메서드 구현!
  const animalList = animals.map((animal, i) => (
    <button key={i} onClick={() => {
      remove(i)
    }}>{animal}</button>
  ))

  return (
    <div>
      <input 
        type="text" placeholder='동물을 입력하세요.'
        onKeyPress={(e) => {
          if(e.key === 'Enter'){
            insert(e.target.value)
          }
        }}
      />
      {animalList}
    </div>
  );
};

export default Animals;