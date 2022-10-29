import React from "react";

const DetailsTable = () => {
  return (
    <div className="container ">
      <form >
        <table class="w-full rounded-lg bg-slate-50 ">
          <thead className="text-white">
            <tr className="bg-sky-600">
              <th className="p-3">Choose Your Needs</th>
              <th className="p-3">Values</th>
            </tr>
          </thead>

          
          <tbody className="text-sky-900 font-bold ">
            <tr>
              <td className="px-3">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  class="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300"
                /> Temperature</td>
              <td className="p-3">32'c</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-3 flex justify-end">
            <button type="button" 
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Show Details
            </button>
        </div>
      </form>
    </div>
  );
};

export default DetailsTable;
