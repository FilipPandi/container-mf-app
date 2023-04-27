import axios from "axios";
import {TextModel} from "../model/TextModel";
import {CalendarModel} from "../model/CalendarModel";

const url = "http://localhost:8081"
const prefixText = "/text";
const prefixCalendar = "/calendar";

export async function saveTextModel(text, textType) {
    const textModel = new TextModel(null, text, textType)

    if (text) {
        return await axios.post(url + prefixText + "/save", textModel);
    }
}

export async function saveCalendarModel(date, text) {
    const calendarModel = new CalendarModel(null, date, text)

    if (date) {
        return await axios.post(url + prefixCalendar + "/save", calendarModel);
    }
}

export async function getByDate(date) {
    const fixedDate = new Date(date);
    let calendarText;

    fixedDate.setDate(fixedDate.getDate() + 1);
    const formattedDate = fixedDate.toISOString().slice(0, 10)

    const resCalendarText = await axios.get(url + prefixCalendar + "/findByDate", {
        params: {
            "date": formattedDate
        }
    });

    if (resCalendarText) {
        calendarText = resCalendarText.data;
    }

    return calendarText;
}

export async function getByTextType(textType) {
    let resultText;
    const resText = await axios.get(url + prefixText + "/findByTextType", {
        params: {
            "textType": Number(textType)
        }
    });

    if (resText) {
        resultText = resText.data;
    }

    return resultText;
}
