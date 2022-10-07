import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import React, { useEffect, useState } from "react";
import Image from 'next/image';
function ButtonDropdowns(props) {
  const hash = {"SGD": "sg", "MYR": "my", "AED": "ae", "AUD": "au", "BRL": "br", "CAD": "ca", "CHF": "ch", "CLP": "cl", "CNY": "cn", "COP": "co", "CZK": "cz", "DKK": "dk", "EUR": "eu", "GBP": "gb", "HKD": "hk", "HUF": "hu", "IDR": "id", "ILS": "il", "INR": "in", "JPY": "jp", "KRW": "kr", "MXN": "mx", "NZD": "nz", "NOK": "no", "PHP": "ph", "PLN": "pl", "RON": "ro", "RUB": "ru", "SAR": "sa", "SEK": "se", "THB": "th", "TRY": "tr", "TWD": "tw", "USD": "us", "ZAR": "za",}
  return (
    <>
      <InputGroup>
        <Dropdown onSelect={props.onChangeCurrency}>
          <Dropdown.Toggle variant="outline-dark" id="input-group-dropdown-1">
          <Image src=`/${hash[props.currency]}.svg` height={19} width={19}/> {props.currency}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item eventKey="SGD"><Image src="/sg.svg" height={19} width={19}/> SGD - Singapore Dollar</Dropdown.Item>
            <Dropdown.Item eventKey="MYR"><Image src="/my.svg" height={19} width={19}/> MYR - Malaysian Ringgit</Dropdown.Item>
            <Dropdown.Item eventKey="AED"><Image src="/ae.svg" height={19} width={19}/> AED - UAE dirham</Dropdown.Item>
            <Dropdown.Item eventKey="AUD"><Image src="/au.svg" height={19} width={19}/> AUD - Australian Dollar</Dropdown.Item>
            <Dropdown.Item eventKey="BRL"><Image src="/br.svg" height={19} width={19}/> BRL - Brazilian real</Dropdown.Item>
            <Dropdown.Item eventKey="CAD"><Image src="/ca.svg" height={19} width={19}/> CAD - Canadian Dollar</Dropdown.Item>
            <Dropdown.Item eventKey="CHF"><Image src="/ch.svg" height={19} width={19}/> CHF - Swiss Franc</Dropdown.Item>
            <Dropdown.Item eventKey="CLP"><Image src="/cl.svg" height={19} width={19}/> CLP - Chilean peso</Dropdown.Item>
            <Dropdown.Item eventKey="CNY"><Image src="/cn.svg" height={19} width={19}/> CNY - Renminbi</Dropdown.Item>
            <Dropdown.Item eventKey="COP"><Image src="/co.svg" height={19} width={19}/> COP - Colombian peso</Dropdown.Item>
            <Dropdown.Item eventKey="CZK"><Image src="/cz.svg" height={19} width={19}/> CZK - Czech koruna</Dropdown.Item>
            <Dropdown.Item eventKey="DKK"><Image src="/dk.svg" height={19} width={19}/> DKK - Danish krone</Dropdown.Item>
            <Dropdown.Item eventKey="EUR"><Image src="/eu.svg" height={19} width={19}/> EUR - Euro</Dropdown.Item>
            <Dropdown.Item eventKey="GBP"><Image src="/gb.svg" height={19} width={19}/> GBP - British Pound</Dropdown.Item>
            <Dropdown.Item eventKey="HKD"><Image src="/hk.svg" height={19} width={19}/> HKD - Hong Kong Dollar</Dropdown.Item>
            <Dropdown.Item eventKey="HUF"><Image src="/hu.svg" height={19} width={19}/> HUF - Hungarian forint</Dropdown.Item>
            <Dropdown.Item eventKey="IDR"><Image src="/id.svg" height={19} width={19}/> IDR - Indonesian rupiah</Dropdown.Item>
            <Dropdown.Item eventKey="ILS"><Image src="/il.svg" height={19} width={19}/> ILS - Israeli new shekel</Dropdown.Item>
            <Dropdown.Item eventKey="INR"><Image src="/in.svg" height={19} width={19}/> INR - Indian rupee</Dropdown.Item>
            <Dropdown.Item eventKey="JPY"><Image src="/jp.svg" height={19} width={19}/> JPY - Japanese yen</Dropdown.Item>
            <Dropdown.Item eventKey="KRW"><Image src="/kr.svg" height={19} width={19}/> KRW - South Korean Won</Dropdown.Item>
            <Dropdown.Item eventKey="MXN"><Image src="/mx.svg" height={19} width={19}/> MXN - Mexican peso</Dropdown.Item>
            <Dropdown.Item eventKey="NZD"><Image src="/nz.svg" height={19} width={19}/> NZD - New Zealand Dollar</Dropdown.Item>
            <Dropdown.Item eventKey="NOK"><Image src="/no.svg" height={19} width={19}/> NOK - Norwegian krone</Dropdown.Item>
            <Dropdown.Item eventKey="PHP"><Image src="/ph.svg" height={19} width={19}/> PHP - Philippine peso</Dropdown.Item>
            <Dropdown.Item eventKey="PLN"><Image src="/pl.svg" height={19} width={19}/> PLN - Polish złoty</Dropdown.Item>
            <Dropdown.Item eventKey="RON"><Image src="/ro.svg" height={19} width={19}/> RON - Romanian leu</Dropdown.Item>          
            <Dropdown.Item eventKey="RUB"><Image src="/ru.svg" height={19} width={19}/> RUB - Russian ruble</Dropdown.Item>
            <Dropdown.Item eventKey="SAR"><Image src="/sa.svg" height={19} width={19}/> SAR - Saudi riyal</Dropdown.Item>
            <Dropdown.Item eventKey="SEK"><Image src="/se.svg" height={19} width={19}/> SEK - Swedish Krona</Dropdown.Item>
            <Dropdown.Item eventKey="THB"><Image src="/th.svg" height={19} width={19}/> THB - Thai baht</Dropdown.Item>
            <Dropdown.Item eventKey="TRY"><Image src="/tr.svg" height={19} width={19}/> TRY - Turkish lira</Dropdown.Item>
            <Dropdown.Item eventKey="TWD"><Image src="/tw.svg" height={19} width={19}/> TWD - New Taiwan dollar</Dropdown.Item>
            <Dropdown.Item eventKey="USD"><Image src="/us.svg" height={19} width={19}/> USD - US Dollar</Dropdown.Item>
            <Dropdown.Item eventKey="ZAR"><Image src="/za.svg" height={19} width={19}/> ZAR - South African rand</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Form.Control 
          type="number"
          aria-label="Amount of money to exchange" 
          value={props.val}
          onChange={props.onChangeValue}
        />
      </InputGroup>
      
     
    </>
  );
}

export default ButtonDropdowns;
