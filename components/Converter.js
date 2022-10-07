import ButtonDropdowns from '@components/ButtonDropdowns';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'next/image'
import Alert from 'react-bootstrap/Alert';
import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';

export default function Converter(props) {
    const inival = 312.00 * props.data["SGD"]["MYR"];
    const [state,setState] = useState({val1: 312, val2: inival, currency1: "SGD",currency2: "MYR"});
    const handleButton = () => {
        setState({
            val1: state.val2, 
            val2: state.val1, 
            currency1: state.currency2, 
            currency2: state.currency1,
        });
    }
    const myfunc = (str)=>{
        setState({
            val1: state.val1,
            val2: props.data[str][state.currency2] * state.val1,
            currency1: str, 
            currency2: state.currency2,            
        });
    }
    const convertUnixTime = (UNIX_timestamp) => {
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = "0" + a.getMinutes();
        var sec = "0" + a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        return time;
    }

    return (
        <>
        <Row className = "mt-5 mx-5">
          <Col md = {1} className = "d-none d-md-block"></Col>
          <Col md = {4}>
             <ButtonDropdowns
             currency = {state.currency1} 
             val={state.val1} 
             onChangeCurrency={(str)=>{
                    setState({
                        ...state,
                        val2: props.data[str][state.currency2] * state.val1,
                        currency1: str, 
                    });
                }}
             onChangeValue={(x)=>{
                setState({
                    ...state,
                    val1: x.target.value,
                    val2: x.target.value * props.data[state.currency1][state.currency2],                 
                });
            }}
             />
          </Col>
           <Col className = "text-center d-none d-md-block">
            <Button variant="light" onClick = {handleButton}>
            <Image 
                    src="/arrow-left-right.svg"
                    height={23} width={23}
                    />
            </Button>
           </Col>

           <Col className = "text-center d-md-none">
            <Button variant="light" onClick = {handleButton}>
            <Image 
                src="/arrow-down-up.svg"
                height={23} width={23}
                />
            </Button>
           </Col>

           <Col md = {4}>
              <ButtonDropdowns
              currency = {state.currency2}
              val={state.val2} 
              onChangeCurrency={(str)=>{
                setState({
                    ...state,
                    val2: props.data[state.currency1][str] * state.val1,
                    currency2: str, 
                });
            }}
              onChangeValue={(x)=>{
                setState({
                    ...state,
                    val2: x.target.value,
                    val1: x.target.value * props.data[state.currency2][state.currency1],                 
                });
            }}
             />
           </Col>
           <Col md = {1} className = "d-none d-md-block"></Col>
        </Row>
        <Container>
        <h6 className = "mx-5 mt-3">{state.val1} {state.currency1} = </h6>
        <h2 className = "mx-5"> {state.val2} {state.currency2}</h2>
        <p className = "mx-5 mt-4 mb-0">1 {state.currency1} = {props.data[state.currency1][state.currency2]} {state.currency2}</p>
        <p className = "mx-5">1 {state.currency2} = {props.data[state.currency2][state.currency1]} {state.currency1}</p>
        <p className = "text-end"><small>Data Source: <a target="_blank" href="https://www.exchangerate-api.com/" rel="noopener noreferrer">https://www.exchangerate-api.com/</a></small></p>
        <Alert variant="info" className = "mx-5">Last updated on {convertUnixTime(props.unixtime)} GMT+8  </Alert>
        </Container >
        </>
    )
}