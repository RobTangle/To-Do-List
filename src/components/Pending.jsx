import "./Pending.css";

export default function Pending({ props }) {
  const pendientes = props.map((elem) => {
    return (
      <div className="elementoPending" key={Math.random()}>
        {elem}
      </div>
    );
  });
  // console.log(props);
  return (
    <>
      <div className="elemPending">
        PENDING:
        <div>{pendientes}</div>
      </div>
    </>
  );
}
