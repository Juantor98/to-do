export const AlertError = ({mensaje}) => {
  return (
    <div className="bg-red-600 font-bold text-center text-white p-3 mb-5 rounded-md">
      <p>{mensaje}</p>
    </div>
  );
};
