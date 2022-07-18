import "./Pending.css";

export default function Pending({ pending, done, setDone }) {
  // function handleOnClick(e) {
  //   //funciona! Pero voy a usar la función en la linea onClick directamente
  //   setDone([
  //     ...done,
  //     (function () {
  //       return e.target.innerText;
  //     })(),
  //   ]);
  // }

  const pendientes = pending.map((elem) => {
    return (
      <div
        className="elementoPending"
        key={Math.random().toFixed(6)}
        onClick={(e) => setDone([...done, e.target.innerText])}
        // onClick={(e) => handleOnClick(e)}
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
