import "./Elemento.css";

export default function Elemento({ done }) {
  const elementos = done.map((elem) => {
    return (
      <div id={Math.random().toFixed(6)} key={Math.random().toFixed(6)}>
        {elem}
      </div>
    );
  });
  return (
    <>
      <div className="elemento">{elementos}</div>
    </>
  );
}
