import "./Pending.css";

export default function Pending({ pending, done, setDone, setPending }) {
  function handleOnClick(e) {
    //funciona! Pero voy a usar la función en la linea onClick directamente
    setDone([
      ...done,
      (function () {
        return e.target.innerText;
      })(),
    ]);
    setPending([...pending.filter((el) => el !== e.target.innerText)]); //funciona pero si hay dos elementos Pending que son iguales, borra elementos iguales.
  }

  const pendientes = pending.map((elem) => {
    return (
      <div
        className="elementoPending"
        key={Math.random().toFixed(6)}
        // onClick={(e) => setDone([...done, e.target.innerText])}
        onClick={(e) => handleOnClick(e)}
      >
        {elem}
      </div>
    );
  });
  // console.log(props);
  return (
    <>
      <div className="elemPending">
        <div>{pendientes}</div>
      </div>
    </>
  );
}
