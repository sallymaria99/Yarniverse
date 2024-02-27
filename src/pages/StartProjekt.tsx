import { useForm, SubmitHandler } from "react-hook-form";
import { ProjektSchema } from "../projektData";
import { useNavigate } from "react-router-dom";
import { useProjekt } from "../context/ProjektContext";

/* interface FormData {
  id: string;
  title: string;
  notes: string;
  startDate: string;
  endDate?: string;
} */

function NewProjectPage() {
  const { addProjekt } = useProjekt();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<ProjektSchema>();

  const onSubmit: SubmitHandler<ProjektSchema> = (data) => {
    const newProjekt: ProjektSchema = {
      id: data.id,
      status: "planned",
      title: data.title,
      notes: data.title,
      startDate: new Date(data.startDate),
      endDate: data.endDate ? new Date(data.endDate) : undefined,
      to: data.to,
      yarn: data.yarn,
      knittingNeedle: data.knittingNeedle,
      name: data.name,
      size: data.size,
    };
    addProjekt(newProjekt);
    reset();
    navigate("/projekt");
  };

  return (
    <div className="flex flex-col items-center justify-center px-8">
      <div className="text-2xl text-center pt-8 pb-6">Starta ett projekt</div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-1/3"
      >
        <div className="flex justify-between items-start w-full max-w-6x1">
          {/* <FileUpload /> */}
          <div className="">
            <h3 className="font-bold text-lg mb-5">Detaljer</h3>
            {/*   //input för Till:, Storlek, Garn */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="to"
              >
                Till:
              </label>
              <input
                {...register("to")}
                className="shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="to"
                placeholder="PlaceHolder"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="size"
              >
                Storlek:
              </label>
              <input
                {...register("size")}
                className="shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="size"
                placeholder="PlaceHolder"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="yarn"
              >
                Garn:
              </label>
              <input
                {...register("yarn")}
                className="shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="yarn"
                placeholder="PlaceHolder"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="knittingNeedle"
              >
                Stickor:
              </label>
              <select
                {...register("knittingNeedle")}
                className="shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                name=""
                id="knittingNeedle"
              >
                <option value="2">2</option>
                <option value="2.5">2.5</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="namne"
            >
              Namn:
            </label>
            <input
              {...register("name")}
              className="shadow appearance-none border rounded py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
            />
          </div>

          <div className="bg-white px-8 pt-6 pb-8 mb-4">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              htmlFor="notes"
            >
              Anteckningar
            </label>
            <textarea
              {...register("notes")}
              className="shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="notes"
              cols={20}
              rows={5}
            ></textarea>
          </div>

          <div className="bg-white px-8 pt-6 pb-8 mb-4 w-1/3">
            {/* Höger Innehåll */}
            <div>
              <label htmlFor="startDate">Påbörjat</label>
              <input
                {...register("startDate")}
                className="shadow appearance-none border rounded py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                id="startDate"
              />
            </div>
            <div>
              <label htmlFor="endDate">Avslutat</label>
              <input
                {...register("endDate")}
                className="shadow appearance-none border rounded py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="date"
                id="endDate"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Spara!
        </button>
      </form>
    </div>
  );
}

export default NewProjectPage;
