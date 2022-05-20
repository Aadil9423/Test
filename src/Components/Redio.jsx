import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "../tast.css";
import TextField from "@mui/material/TextField";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { value } from '@mui/x-date-pickers/DatePicker';
// import { setValue } from '@mui/x-date-pickers/DatePicker';

const Redio = ({ isLogged }) => {
  const [data, setData] = useState([]);
  const [wheels, setWheels] = useState(0);
  const [selectedType, setSelectedType] = useState([]);
  const [typeSelected, setTypeSelected] = useState("");
  const [selectedVehicles, setSelectedVehicles] = useState({});
  const [selectedBookingId, setSelectedBookingId] = useState("");
  const [bookedDates, setBookedDates] = useState([]);
  console.log("check", bookedDates);
  useEffect(() => {
    axios
      .get("https://octalogic-test-frontend.vercel.app/api/v1/vehicleTypes")
      .then((respo) => setData(respo.data.data));
  }, []);
  console.log(selectedVehicles);
  //   console.log(data.name);
  const handleNumberOfWheels = (e) => {
    setWheels(e.target.value);
  };
  useEffect(() => {
    const selectedVehicleType = data.filter((item) => item.wheels == wheels);
    setSelectedType(selectedVehicleType);
  }, [wheels]);
  const handleListofVehicleType = (e) => {
    // console.log(e.target.value);
    setTypeSelected(e.target.value);
  };
  const getSelectedVehicles = async () => {
    const response = await axios.get(
      `https://octalogic-test-frontend.vercel.app/api/v1/vehicles/${typeSelected}`
    );
    setSelectedVehicles(response.data.data);
  };
  useEffect(() => {
    // const types = selectedType[0].vehicles.filter(
    //   (item) => item.id == typeSelected
    // );
    if (typeSelected !== "") {
      getSelectedVehicles();
    }
  }, [typeSelected]);
  const handleSelectedBooking = (e) => {
    setSelectedBookingId(e.target.value);
  };
  const getBookedDates = async () => {
    const response = await axios.get(
      `https://octalogic-test-frontend.vercel.app/api/v1/bookings/${selectedBookingId}`
    );
    setBookedDates(response.data.data);
  };
  useEffect(() => {
    if (selectedBookingId !== "") {
      getBookedDates();
    }
  }, [selectedBookingId]);
  return (
    <div className="contenar">
      <div className="">
        <FormControl className="">
          <FormLabel className="tital">
            <h2> Select Number of Wheels</h2>
          </FormLabel>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={0}
            name="radio-buttons-group"
            onChange={handleNumberOfWheels}
          >
            {data &&
              data.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={item.wheels}
                    control={<Radio />}
                    label={`${item.wheels} Wheeler`}
                    className="log-5"
                  />
                );
              })}
          </RadioGroup>
        </FormControl>
        <br />

        <FormControl>
          <FormLabel className="log-4">
            <h4>Vehicle Types</h4>
          </FormLabel>
          <RadioGroup
            defaultValue={""}
            aria-labelledby="demo-radio-buttons-group-label"
            //   defaultValue=""
            name="radio-buttons"
            onChange={handleListofVehicleType}
            className="log-5"
          >
            {selectedType.length > 0 &&
              selectedType !== undefined &&
              selectedType[0].vehicles.map((item, index) => {
                return (
                  <FormControlLabel
                    key={index}
                    value={item.id}
                    control={<Radio />}
                    label={`${item.name}`}
                  />
                );
              })}
          </RadioGroup>
        </FormControl>
        {Object.keys(selectedVehicles).length > 0 && (
          <div>
            <img
              src={`${selectedVehicles.image.key}`}
              alt="Selected Image is not available"
            />
            <br />
            <FormControl>
              {/* <FormLabel id="demo-controlled-radio-buttons-group">
              Gender
            </FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                defaultValue={""}
                onChange={handleSelectedBooking}
              >
                <FormControlLabel
                  value={selectedVehicles.id}
                  control={<Radio />}
                  label="Select Vehicle"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
      </div>
      {/* <div>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
  <DatePicker
    label="Basic example"
    value={value}
    onChange={(newValue) => {
      setValue(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>
</div> */}
    </div>
  );
};

export default Redio;
