import React from 'react';

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

export const Accordion1 =(props:AccordionPropsType) => {
    console.log("Accordion rendering")
    return   <div>
    {props.collapsed === true && <AccordionTitle title={props.titleValue}/>}
        <AccordionBody title={props.titleValue}/>
        </div>
}
// export const Accordion2 =(props:AccordionPropsType) => {
//     console.log("Accordion rendering")
//     if (props.collapsed === true)
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     else {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody title={props.titleValue}/>
//         </div>
//     }

type AccordionTitlePropsType = {
    title: string
}
function AccordionTitle(props:AccordionTitlePropsType) {
    console.log("AccordionTitle rendering")
    return <h3>{props.title}</h3>
}

type AccordionBodyPropsType = {
    title: string
}
function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering")
    return <ul>
        <li>{props.title}</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
