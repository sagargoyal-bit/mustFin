import React, { useState, useMemo } from "react";
import Navbar from "./Navbar";
import DropDown from "./DropDown";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Dashboard = () => {
  const ApprovalDropDown = ["Approved", "Rejected", "Waiting for approval"];
  const ChangeApprovalDropDown = ["Approved", "Rejected"];
  const DateTimeDropdown = ["today", "last week", "last month"];
  const initialRows = [
    {
      no: 1,
      "Existing type": "Income eligibility",
      ApplicationType: "personal expertise",
      DocumentsNeeded: "look",
      ApplicationDateAndTime: "10/01/2023 09:00:00",
      Approval: "Waiting for approval",
      Reason:
        "Documents cannot be identified. Professional investors cannot be approved as the account was opened at a financial investment company less than 1 year ago",
      "Approval date and time": "10/01/2023 09:00:00",
    },
    {
      no: 2,
      "Existing type": "Credit history",
      ApplicationType: "business loan",
      DocumentsNeeded: "review",
      ApplicationDateAndTime: "11/01/2023 10:30:00",
      Approval: "Approved",
      Reason: "",
      "Approval date and time": "12/01/2023 14:00:00",
    },
    {
      no: 3,
      "Existing type": "Income eligibility",
      ApplicationType: "mortgage",
      DocumentsNeeded: "submit",
      ApplicationDateAndTime: "15/01/2023 13:45:00",
      Approval: "Rejected",
      Reason:
        "Income verification failed. Applicant's income does not meet the minimum requirement.",
      "Approval date and time": "16/01/2023 09:30:00",
    },
    {
      no: 4,
      "Existing type": "Credit history",
      ApplicationType: "personal loan",
      DocumentsNeeded: "look",
      ApplicationDateAndTime: "20/01/2023 08:00:00",
      Approval: "Waiting for approval",
      Reason: "Credit history shows recent defaults.",
      "Approval date and time": "21/01/2023 10:00:00",
    },
    {
      no: 5,
      "Existing type": "Income eligibility",
      ApplicationType: "auto loan",
      DocumentsNeeded: "review",
      ApplicationDateAndTime: "22/01/2023 11:00:00",
      Approval: "Approved",
      Reason: "",
      "Approval date and time": "23/01/2023 15:00:00",
    },
    {
      no: 6,
      "Existing type": "Credit history",
      ApplicationType: "credit card",
      DocumentsNeeded: "submit",
      ApplicationDateAndTime: "25/01/2023 16:30:00",
      Approval: "Rejected",
      Reason: "Low credit score.",
      "Approval date and time": "26/01/2023 10:00:00",
    },
    {
      no: 7,
      "Existing type": "Income eligibility",
      ApplicationType: "business expertise",
      DocumentsNeeded: "look",
      ApplicationDateAndTime: "28/01/2023 09:00:00",
      Approval: "Waiting for approval",
      Reason: "Income documents not clear.",
      "Approval date and time": "29/01/2023 11:00:00",
    },
    {
      no: 8,
      "Existing type": "Credit history",
      ApplicationType: "mortgage",
      DocumentsNeeded: "review",
      ApplicationDateAndTime: "30/01/2023 14:00:00",
      Approval: "Approved",
      Reason: "",
      "Approval date and time": "31/01/2023 09:00:00",
    },
    {
      no: 9,
      "Existing type": "Income eligibility",
      ApplicationType: "auto loan",
      DocumentsNeeded: "submit",
      ApplicationDateAndTime: "01/02/2023 10:30:00",
      Approval: "Rejected",
      Reason: "Applicant's income is unstable.",
      "Approval date and time": "02/02/2023 09:00:00",
    },
    {
      no: 10,
      "Existing type": "Credit history",
      ApplicationType: "business loan",
      DocumentsNeeded: "look",
      ApplicationDateAndTime: "05/02/2023 11:45:00",
      Approval: "Waiting for approval",
      Reason: "Recent bankruptcies.",
      "Approval date and time": "06/02/2023 10:00:00",
    },
  ];

  const [dropdown, setdropDown] = useState(null);
  const [rows, setRows] = useState(initialRows);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setdropDown(null)
    setRows(initialRows);
  };

  const clearRow = () => {
    setRows(initialRows);
  };

  const rowData = useMemo(() => {
    return dropdown ? rows.filter((val) => val.Approval === dropdown) : rows;
  }, [dropdown, rows]);

  const tableHeader = [
    "checkbox",
    "no",
    "ExistingType",
    "ApplicationType",
    "DocumentsNeeded",
    "ApplicationDateAndTime",
    "Approval",
    "Reason",
    "Approval date and time",
  ];

  return (
    <div className="wrapper m-4 p-4">
      <Navbar />
      <div className="header-wrapper flex justify-between mt-4">
        <h1 className="text-2xl font-semibold">Application list</h1>
        <div className="dropdown flex">
          <button
            className="mx-2 bg-[#2A3958] rounded-lg text-white px-4  hover:bg-slate-500"
            onClick={clearRow}
          >
            Clear
          </button>
          <DropDown options={ApprovalDropDown} setdropDown={setdropDown} />
          <DropDown options={DateTimeDropdown} setdropDown={setdropDown} />
          <DropDown options={ChangeApprovalDropDown} setdropDown={setdropDown} />
        </div>
      </div>
      <hr className="mt-2 mb-2" />
      <div className="table-wrapper flex flex-col justify-between">
        <div className="flex justify-between mt-4 mb-4">
          <button
            className="bg-[#2A3958] rounded-lg text-white px-6 py-2 hover:bg-slate-500"
            onClick={clearRow}
          >
            register
          </button>
          <div className="table-dropdown flex">
            <p className="text-xl align-middle text-gray-500 font-sans font-medium mr-2">
              Approval Status
            </p>
            <DropDown options={ApprovalDropDown} setdropDown={setdropDown} />
            <button
              className="mx-2 bg-[#2A3958] rounded-lg text-white px-6 py-2 hover:bg-slate-500"
              onClick={handleClickOpen}
            >
              Submit
            </button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {" Do you want to submit ?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  This will update the table
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>No</Button>
                <Button onClick={handleClose} autoFocus>
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-black table-auto">
            <thead className="text-xs bg-[#EEF0F4] ">
              <tr>
                {tableHeader.map((col, index) => (
                  <th key={index} className="px-6 py-4">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowData.map((row) => (
                <tr key={row.no}>
                  <td className="px-6 py-4">
                    <input type="checkbox" />
                  </td>
                  <td className="px-6 py-4">{row.no}</td>
                  <td className="px-6 py-4">{row["Existing type"]}</td>
                  <td className="px-6 py-4">{row.ApplicationType}</td>
                  <td className="px-6 py-4">{row.DocumentsNeeded}</td>
                  <td className="px-6 py-4">{row.ApplicationDateAndTime}</td>
                  <td className="px-6 py-4">{row.Approval}</td>
                  <td className="px-6 py-4">{row.Reason}</td>
                  <td className="px-6 py-4">{row["Approval date and time"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
