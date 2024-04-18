import React, { useState, useEffect } from "react";
import FormBuilder from "../../UI/formikcontrols/FormBuilder";
import BoxComponent from "../../BoxComponent/BoxComponent";
import { IDBO } from "lai_global";
import { Button, CheckBox, Label, Input, TextArea,AgGrid, useNotification,useDialog  } from "lai_webui";
import { Toolreducer } from "../../../reduxToolkit/toolbarIconDatas/toolbarIconDatas";
import { useDispatch } from "react-redux";
import { Modal, ModalTitle, ModalBody, ModalFooter } from "react-bootstrap";
import "./StateMaster.css";
import { requests, DataRequest } from "../../../services/requests";
import { element } from "prop-types";
import { SeriesTemplate } from "devextreme-react/range-selector";
import { getData } from "../../../reduxToolkit/postSlice/postSlice";
import { SelectionHandleType } from "ag-grid-community";
import { Editing } from "devextreme-react/data-grid";
import { saveRecord, deleteRecord } from "../../../services/dataops";
import { FailedToNegotiateWithServerError } from "@microsoft/signalr/dist/esm/Errors";
function StateMaster() {
  const [CountryData, setCountryData] = useState([]);
  const [save, setSave] = useState(false);
  const [edit, setEdit] = useState(false);
  const [reload, setReload] = useState(false);
  const [data, setData] = useState([]);
  const [view, setView] = useState(false);
  const [show, setShow] = useState(false);
  const [inputboxes, setinputboxes] = useState({});
  const [list, setList] = useState([]);
  const [tdelete , setTdelete]=useState(false)
  const [value, setValue] = useState({});
  const [rowData, setRowData] = useState([]);
  const [toolicon, setToolicon] = useState(
    JSON.parse(localStorage.getItem("ToobarIcon"))
  );
  const dispatch = useDispatch();
  const validation = useNotification();
 const { showDialog } = useDialog();
  var formData = [
    {
      control: "ComboBox",
      label: "Country Name",
      name: "CountryID",
      area: "a",
      areaL: "al",
      options: CountryData,
      mandatory: "mandatory",
      readonly: edit,
      // valueKey: "CountryID",
      // labelKey: "CountryName",
      width: "100%",
      onChange:(e)=>setcity(e)
    },
    {
      control: "Input",
      label: "State Code",
      name: "StateCode",
      area: "b",
      areaL: "bl",
      mandatory: "mandatory",
      readonly: edit,
      width: "100%",
    },
    {
      control: "Input",
      label: "State Name",
      area: "c",
      areaL: "cl",
      name: "StateName",
      mandatory: "mandatory",
      readonly: edit,
      width: "100%",
    },
    {
      control: "Input",
      label: "Code",
      area: "d",
      areaL: "dl",
      name: "CountryCode",
      readonly: true,
      value: data?.COUNTRY?.filter(
        (item) => item.CountryID == Number(value.country)
      )[0]?.Code,
    },
    {
      control: "CheckBox",
      label: "Is Active",
      area: "e",
      areaL: "el",
      Lstyle: { fontSize: "12px", color: "" },
      style: {
        marginRight: 0,
        backgroundColor: "#fff !important",
      },
      readonly:edit,
      iconColor: "#fff ",

      name: "IsActive",
    },
  ];

  let gridPosition = `"al a a a a a a . dl d d"
                      "bl b b b b b b . el e ."
                      "cl c c c c c c . . . ."`;

  
  //Start here
  const ondelete = `<iData><StateID>${parseInt(value?.StateID)}</StateID></iData>`;
  const onDelete = async () => {
    console.log("delete values")
  
    console.log('ondeleteiData', ondelete)
    try {
      console.log("Delete",ondelete);
      const onDeleteData = await IDBO(
        "LWOWDS",
        requests.Statemaster_StatemasterDelete,
        ondelete
      );
      getStateData();
      clearData();
      setEdit(false);
      console.log("onDeleteData",onDeleteData);
    } catch (error) {
      console.log("Delete error", error);
    }
  };
  //End here

  const handleOK = () => {
    setShow(false);
  };

  useEffect(()=>{
    if(tdelete==true){
      onDelete()
      setTdelete(false)
    }
  },[tdelete])
  const handleOpen = async (tool) => {
    console.log("tool", tool);
    if (tool === "Save") {
      setSave(!save);
      // saveData();
    }
    if (tool === "Edit") {
      // setEdit(!edit);
      setEdit(false);
    }
    if (tool === "View") {
      setView(!view);
    }
    if (tool === "Delete") {
      setTdelete(true);
      // onDelete();
    }
    if (tool === "Clear") {
      // setClear(!clear);
      clearData();
      setEdit(false);
    }
    if (tool === "Refresh") {
      // setRefresh(!refresh);
    }
  };

//start here
useEffect(() => {
   if (save == true) {
  //  console.log('first', selectedValue.RepositoryID)
   saveRecord(
 requests.Statemaster_StateMasterSave,
 saveIdata,
validation,
 showDialog,
  //  clearValues(),
  getStateData
 );
  //  setSelectedValue({})
  setSave(false)
  }
   }, [save])
//end here

//
useEffect(() => {
  if (tdelete == true) {
 //  console.log('first', selectedValue.RepositoryID)
 deleteRecord(
requests.Statemaster_StatemasterDelete,
ondelete,
validation,
showDialog,
 //  clearValues(),
 getStateData
);
 //  setSelectedValue({})
 setSave(false)
 }
  }, [save])
//
console.log(document.getElementById)
  const toolBarProps = {
    onClick: handleOpen,
    icons: toolicon,
  };
  useEffect(() => {
    dispatch(
      Toolreducer({
        type: "UPDATE_TOOLBAR",
        icons: toolBarProps.icons,
        onClick: toolBarProps.onClick,
      })
    );
  }, [reload, toolicon,value]);
  useEffect(() => {
    if (view === true) {
      setShow(true);
      setView(false);
    }
  }, [view]);

  //Get list
  const handleGetStateMaster = async () => {
    // const getData=`<iData><StateMasterID>1</StateMasterID></iData>`
    try {
      const data = await DataRequest(
        "RO",
        requests.Statemaster_StateMasterList
      );
      let stateMasterdata = [];
      let rowData = [];
      data.COUNTRY.forEach((element) => {
        stateMasterdata.push({
          listname: element.CountryName,
          value: element.CountryID,
          Code: element.CountryCode,
        });
      });
      setCountryData(stateMasterdata);
      setinputboxes(stateMasterdata);
      console.log("data1234", data);
    } catch (error) {
      console.log("errorrrr", error);
    }
  };
  useEffect(() => {
    handleGetStateMaster();
  }, []);
  //Get data
  const getStateData = async () => {
    try {
      const getData = await DataRequest(
        "RO",
        "SHR_SA_STATEMASTER_GET"
        // getIdata
      );
      console.log("getData", getData);
      const data = await DataRequest("RO", "SHR_SA_STATEMASTER_LIST");
      setData(data);
      console.log("datacountry", data);
      const filteredData = data.COUNTRY.filter((obj) =>
        getData.STATEMASTER.some((item) => item.CountryID === obj.CountryID)
      ).map(({ CountryCode, CountryName }) => ({ CountryCode, CountryName }));

      console.log("filteredData", filteredData);

      let rowData = [];

      getData.STATEMASTER.forEach((state) => {
        const country = data.COUNTRY.find(
          (country) => country.CountryID === state.CountryID
        );
        const agData = {
          CountryCode: country.CountryCode,
          StateCode: state.StateCode,
          StateName: state.StateName,
          CountryID: country.CountryID,
          CountryName: country.CountryName,
          StateID:state.StateID
        };
        console.log("agData", agData);
        rowData.push(agData);
      });

      console.log("rowData", rowData);
      setList(rowData);
      for (let i of getData.STATEMASTER) {
        const codeData1 = data.COUNTRY.map((element) => {
          const countryCode1 = i;
        });
      }
      console.log("data1111111111", data.COUNTRY);
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getStateData();
  }, []);
  console.log("getStateData", data);

  const onRowClicked = (e) => {
    console.log("e", e.data);
    setValue(e.data);
    setSelectedValue({ ...e.data, rowIndex: e.rowIndex });
  };
  
  const setcity = async () => {
    var citydata = `<iData><CountryID>${value.country}</CountryID></iData>`;
    const res = await IDBO("RO", "SHR_SA_STATEMASTER_LIST", citydata);
    console.log("res", res);
    setData(res);
  };
  useEffect(() => {
    setcity();
  }, [value.country]);
  console.log("values", value);
  
  // Save data start here
  const saveIdata = `<iData><PlaceID>0</PlaceID><PlaceTypeID>4</PlaceTypeID><PlaceName>${value?.StateName}</PlaceName><PlaceShortName>${value?.StateCode}</PlaceShortName><ParentPlaceId>${value.CountryID}</ParentPlaceId><PlaceStateMachine>0</PlaceStateMachine></iData>`;

const saveData = async () => {
    console.log("saveIdata", saveIdata);
    try {
      const getSave = await DataRequest(
        "LWOWDS",
        requests.Statemaster_StateMasterSave,
        saveIdata
      );
      getStateData();
      console.log("saveData", getSave);
    } catch (error) {
      console.log("SaveError", error);
    }
  };

  // end here


  const columdef = [
    {
      headerName: "CountryCode",
      field: "CountryCode",
    },
    {
      headerName: "StateCode",
      field: "StateCode",
    },
    {
      headerName: "StateName",
      field: "StateName",
    },
    {
      headerName: "CountryName",
      field: "CountryName",
    },
  ];
  const handleRowClicked = (e) => {
    console.log("selected data", e?.data);
    setValue(e?.data);
    setShow(false);
    setEdit(true);
  };
const handleRowClicked1=(e)=>{
  console.log("selected data", e.data.value);
}
  //Start here
  // clear Data
  function clearData() {
    setValue([
      {
        PlaceID: 0,
        PlaceTypeID: 4,
        PlaceName: "",
        PlaceShortName: "",
        ParentPlaceId: 1,
        PlaceStateMachine: 0,
      },
    ]);
  }
  //end here
  return (
    <div>
      <BoxComponent
        title="StateMaster"
        style={{ paddingLeft: "6px" }}
        component={
          <>
            <FormBuilder
              formData={formData}
              gridPostion={gridPosition}
              value={value}
              setValue={setValue}
              gap="6px"
            />
          </>
        }
      />
      <div>
        <AgGrid
          columnData={columdef}
          rowData={list}
          onRowDoubleClicked={handleRowClicked}
          // onRowClicked={clearFunction}
        />
      
      </div>
    </div>
  );
}
export default StateMaster;
