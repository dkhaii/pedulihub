import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {" "}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Donasi</th>
            <th>Donatur</th>
            <th>Payment</th>
            <th>Program</th>
            <th>Date</th>
            <th>Action</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>Rp. xxx.xxx,xx</td>
            <td>Anonim</td>
            <td>Dana</td>
            <td>Kemanusiaan</td>
            <td>2022-12-27</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>Rp. xxx.xxx,xx</td>
            <td>Anonim</td>
            <td>Dana</td>
            <td>Kemanusiaan</td>
            <td>2022-12-27</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>Rp. xxx.xxx,xx</td>
            <td>Anonim</td>
            <td>Dana</td>
            <td>Kemanusiaan</td>
            <td>2022-12-27</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
