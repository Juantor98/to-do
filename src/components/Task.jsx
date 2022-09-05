
export const Task = ({tarea}) => {

  const {titulo, fecha, descripcion} = tarea;

  return (
    <div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5">
      <p className="font-bold text-gray-700 uppercase">
        Título: <span className="font-normal normal-case">{titulo}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase">
        Fecha: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold text-gray-700 uppercase">
        Descipción:{" "}
        <span className="font-normal normal-case">{descripcion}</span>
      </p>
    </div>
  );
};
