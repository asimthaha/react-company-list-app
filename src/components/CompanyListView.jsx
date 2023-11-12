import React, { useEffect, useState } from "react";
import axios from "axios";
import CompanyListNavbar from "./CompanyListNavbar";

const CompanyListView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios
      .get("https://testapi.devtoolsdaily.com/companies")
      .then((response) => {
        changeData(response.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CompanyListNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3">
              <div className="col">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">iso2</th>
                      <th scope="col">iso3</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((value, index) => {
                      return (
                        <tr>
                          <th scope="row">{value.id}</th>
                          <th>{value.name}</th>
                          <td>{value.countryCode}</td>
                          <td>{value.market_cap}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyListView;
