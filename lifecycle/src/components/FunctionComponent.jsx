import { useState, useEffect } from "react";
import Button from "./Button/Button";
import DeleteComponent from "./DeleteComponent";
import {buttonTypes} from './Button/ButtonTypes'
const FunctionComponent = () => {
  const [count, setCount] = useState(0); //state tutan hooks
  const [showButton, setShowButton] = useState(true);

  /** Function Componentlerde Yaşam Döngülerine ulaşmak için
   *
   * useEffect Hooksu kullanılır
   * useEffect bizim için aşağıdaki yaşam olayları yakalar;
   * componentDidMount
   * componentDidupdate
   * componentDidUnMount
   */

  /**useEffect Kullanım Aşamaları
   *
   * 1.aşama: Öncelikle useEffect React üzerinden import edilir
   * 2.aşama: useEffectin kullanım amacını belirleme
   * *Eğer useEffecti componentDidMount anı yakalmak için kullanıyorsa
   *
   * useEffect(()=>{},[])
   *
   * *Eğer useEffecti componentDidUpdate anı yakalamak için kullanıyorsak
   * useEffect(()=>{},[kontrolEdilcekAn])
   *
   * *
   */

  useEffect(() => {
    //  console.log("component didmount çalıştı");
  }, []);

  useEffect(() => {
    //  console.log("compoentnDidupdate çalıştı");

    if (count < 0) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, [count]);

  return (
    <>
      {/*    {console.log("return çalıştı")}*/}
      <Button
        buttonType={buttonTypes.increment}
        buttonTitle={"Arttır"}
        onClick={() => setCount(count + 1)}
      />
      <div>Sayacın Değeri : {count}</div>
      {showButton === true ? (
        <Button buttonType={buttonTypes.decrement} buttonTitle={"Azalt"} onClick={() => setCount(count - 1)} />
      ) : null}

      {showButton && <DeleteComponent />}
    </>
  );
};

export default FunctionComponent;
