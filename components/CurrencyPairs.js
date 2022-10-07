import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Image from 'next/image';

export default function CurrencyPairs({data}) {
    return(
        <div>
        <h3 id = "Pairs" className="text-center">Popular Currency Pairs</h3>
        <CardGroup className = "mt-3 mx-5">
            <Card>
                <Card.Body>
                <Card.Title>
                    <Image src="/eu.svg" height={19} width={19}/> EUR / &nbsp; 
                    <Image src="/us.svg" height={19} width={19}/> USD </Card.Title>
                <Card.Text>
                    1 EUR = {data["EUR"]["USD"]} USD
                    <br></br>
                    1 USD = {data["USD"]["EUR"]} EUR
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>
                    <Image src="/us.svg" height={19} width={19}/> USD / &nbsp; 
                    <Image src="/jp.svg" height={19} width={19}/> JPY
                </Card.Title>
                <Card.Text>
                    1 USD = {data["USD"]["JPY"]} JPY
                    <br></br>
                    1 JPY = {data["JPY"]["USD"]} USD                    
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>
                    <Image src="/gb.svg" height={19} width={19}/> GBP / &nbsp;  
                    <Image src="/us.svg" height={19} width={19}/> USD
                </Card.Title>
                <Card.Text>
                    1 GBP = {data["GBP"]["USD"]} USD
                    <br></br>
                    1 USD = {data["USD"]["GBP"]} GBP 
                </Card.Text>
                </Card.Body>

            </Card>
          </CardGroup>

          <CardGroup className = "mx-5">
            <Card>
                <Card.Body>
                <Card.Title>
                    <Image src="/au.svg" height={19} width={19}/> AUD / &nbsp; 
                    <Image src="/us.svg" height={19} width={19}/> USD
                </Card.Title>
                <Card.Text>
                    1 AUD = {data["AUD"]["USD"]} USD
                    <br></br>
                    1 USD = {data["USD"]["AUD"]} AUD 
                </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                <Card.Title>
                    <Image src="/us.svg" height={19} width={19}/> USD / &nbsp; 
                    <Image src="/ca.svg" height={19} width={19}/> CAD
                </Card.Title>
                <Card.Text>
                    1 USD = {data["USD"]["CAD"]} CAD
                    <br></br>
                    1 CAD = {data["CAD"]["USD"]} USD 
                </Card.Text>
                </Card.Body>

            </Card>
            <Card>
                <Card.Body>
                <Card.Title>
                    <Image src="/us.svg" height={19} width={19}/> USD / &nbsp; 
                    <Image src="/sg.svg" height={19} width={19}/> SGD
                </Card.Title>
                <Card.Text>
                    1 USD = {data["USD"]["SGD"]} SGD
                    <br></br>
                    1 SGD = {data["SGD"]["USD"]} USD 
                </Card.Text>
                </Card.Body>

            </Card>
          </CardGroup>
        </div>
    )   
}
