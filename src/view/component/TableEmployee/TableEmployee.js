import React from 'react';
import MaterialTable from 'material-table';
import './TableEmployee.scss'
import Snackbar from '../Snackbar/Snackbar'
import API from '../../../utility/API';

export default function MaterialTableDemo(props) {
  const [openSnack, setOpenSnack] = React.useState(false);
  const [messageSnack, setMessageSnack] = React.useState("");

  function handleClose(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnack(false);
  }

  return (
    <div>
      <MaterialTable
      title="Table Employee"
      columns={props.columns}
      data={props.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const dataEmployee = {
                name: newData.employee_name,
                salary: newData.employee_salary,
                age: newData.employee_age,
              };
              API.addEmployee(dataEmployee)
                .then(function(response){
                  props.callApiGetEmployee();
                  setMessageSnack("Success! Datele au fost modificate");
                  setOpenSnack(true);
                })
            }, 600);
          })
          ,
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const dataEmployee = {
              name: newData.employee_name,
              salary: newData.employee_salary,
              age: newData.employee_age,
            };
            API.updateEmployee(oldData.id,dataEmployee)
              .then(function (response) {
                props.callApiGetEmployee();
                             setMessageSnack("Success! Datele au fost modificate");
                setOpenSnack(true);
              })
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
            API.deleteEmployee(oldData.id)
              .then(function (response) {
                  props.callApiGetEmployee();
                  setMessageSnack("Success! Datele au fost modificate");
                setOpenSnack(true);
              })
            }, 600);
          }),
      }}
    />
    <Snackbar
    openSnack={openSnack}
    handleClose={handleClose}
    type="success"
    message={messageSnack}
    />
    </div>

  );
}
