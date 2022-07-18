// import "./AddToDo.css";

// export default function AddToDo({ setPending }) {
//   return (
//     <>
//       <div className="addToDo">
//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             setPending([...pending, newPending]);
//           }}
//         >
//           <label htmlFor="">Add task</label>
//           <input
//             type="text"
//             placeholder="Task to do"
//             value={newPending}
//             onChange={(e) => setPending(e.target.value)}
//           />
//           <button type="submit">Agregar task</button>
//         </form>
//       </div>
//     </>
//   );
// }
