import {Accordion, AccordionTab} from "primereact/accordion";
import {Button} from "primereact/button";
import TextArea from "@/pages/components/editor/TextArea";
import CalendarPreview from "@/pages/components/editor/CalendarPreview";
import React from "react";
import TextEditor from "@/pages/components/editor/TextEditor";
import Link from "next/link";

export default function MainEditor() {
    return (
        <div style={{paddingLeft: '4%', paddingRight: '4%', paddingBottom: '2%'}}>
            <h2><Link className={"link"} href="/components/public"><Button severity="secondary"
                                                                           icon="pi pi-angle-double-left"
                                                                           label={"Back"}/></Link></h2>
            <h1>Editor examples</h1>

            <Accordion className="custom-panel">
                <AccordionTab header="Text Editor / File Uploader">
                    <TextEditor/>
                </AccordionTab>
                <AccordionTab header="Text Area">
                    <TextArea></TextArea>
                </AccordionTab>
                <AccordionTab header="Calendar">
                    <CalendarPreview></CalendarPreview>
                </AccordionTab>
            </Accordion>
        </div>
    );
}
