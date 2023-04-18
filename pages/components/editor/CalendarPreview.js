import React, {useEffect, useRef, useState} from "react";
import {Panel} from "primereact/panel";
import {Calendar} from "primereact/calendar";
import {Button} from "primereact/button";
import {GetByDate, SaveCalendarModel} from "./service/Service";
import {Toast} from "primereact/toast";
import {EditTextarea} from "react-edit-text";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function CalendarPreview() {
    const [date, setDate] = useState(new Date());
    const [text, setText] = useState('');
    const [hiddenField, setHiddenField] = useState(true);
    const [loading, setLoading] = useState(false);
    const toastRef = useRef();

    const handleChange = (event) => {
        setText(event.target.value);
    };

    function getTextByDate(date) {
        return GetByDate(date)
            .then(value => {
                setText(value.props.calendarText.text);
            });
    }

    const handleSaveClick = () => {
        if (date) {
            const saveResponse = SaveCalendarModel(date, text).then(response => {
                setLoading(true);

                toastRef.current.show({severity: 'info', summery: 'success', detail: 'Saved date: ' + date});

                setTimeout(() => {
                    setLoading(false);
                }, 1000);
            });

            saveResponse.catch(function (error) {
                toastRef.current.show({severity: 'error', summery: 'error', detail: error.response.data});
            });
        } else {
            toastRef.current.show({severity: 'error', summery: 'error', detail: 'Value empty!'});
        }
    }

    useEffect(() => {
        console.log('Component CalendarPreview loaded!');
        if (date) {
            const fixedDate = new Date(date);
            fixedDate.setDate(fixedDate.getDate() - 1);

            const getResponse = getTextByDate(fixedDate);
            getResponse.catch(function (error) {
                toastRef.current.show({severity: 'error', summery: 'error', detail: error.message});
            });
        }

    }, []);

    const getText = (e) => {
        setDate(e.value);
        setText('');
        setHiddenField(false);
        const getResponse = getTextByDate(e.value);
        getResponse.catch(function (error) {
            toastRef.current.show({severity: 'error', summery: 'error', detail: error.message});
        });
    }

    return (
        <div style={{paddingTop: '1%'}}>
            <Toast ref={toastRef}/>
            <Panel header="Calendar preview" className="custom-panel">
                <table>
                    <tbody>
                    <tr>
                        <td style={{float: "left", marginLeft: "50px"}}>
                            <Calendar dateFormat="YYYY-MM-DD" value={date} onChange={getText} inline showWeek/>
                        </td>
                        <td style={{float: "right", marginLeft: "340px"}}>
                            <p>Chosen date: {date.toLocaleDateString()}</p>
                            <EditTextarea hidden={hiddenField} id="textElement" onChange={handleChange} value={text}
                                          name={text}
                                          placeholder={"Enter text for date"}
                                          style={{fontSize: '16px', width: '100%'}}/>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <Button type="submit" style={{marginTop: '10px', backgroundColor: '#54b5a6'}} icon="pi pi-check"
                        label="Save" loading={loading} onClick={handleSaveClick} size={"small"}/>
            </Panel>
        </div>
    );
}

export default CalendarPreview;
