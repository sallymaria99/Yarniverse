/* import FileUpload from "../FileUpload"; */

function StartProjekt() {
  return (
    <div className="flex flex-col items-center justify-center px-8">
      <div className="text-2xl text-center pt-8 pb-6">Starta ett projekt</div>
      <div className="flex justify-between items-start w-full max-w-6x1">
        <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 w-1/3">
          {/* <FileUpload /> */}
          <div className="">
            <h3 className="font-bold text-lg mb-5">Detaljer</h3>
            {/*   //input för Till:, Storlek, Garn */}
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="till"
              >
                Till:
              </label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="till"
                placeholder="PlaceHolder"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="till"
              >
                Storlek:
              </label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="till"
                placeholder="PlaceHolder"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="till"
              >
                Garn:
              </label>
              <input
                className="shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="till"
                placeholder="PlaceHolder"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="stickor"
              >
                Stickor:
              </label>
              <select
                className="shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                name=""
                id="stickor"
              >
                <option value="choose">2</option>
                <option value="">2.5</option>
              </select>
            </div>
          </div>
        </form>

        <form className="max-w-xs mx-auto w-1/3">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="namn"
            >
              Namn:
            </label>
            <input
              className="shadow appearance-none border rounded py-2 text-black leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            />
          </div>

          <div className="bg-white px-8 pt-6 pb-8 mb-4">
            <label
              className=" text-gray-700 text-sm font-bold mb-2"
              htmlFor="anteckningar"
            >
              Anteckningar
            </label>
            <textarea
              className="shadow appearance-none border rounded py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              name=""
              id=""
              cols="20"
              rows="5"
            ></textarea>
          </div>
        </form>

        <div className="bg-white px-8 pt-6 pb-8 mb-4 w-1/3">
          {/* Höger Innehåll */}
          <div>
            <label htmlFor="">Avslutat</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Spara!
      </button>
    </div>
  );
}

export default StartProjekt;
