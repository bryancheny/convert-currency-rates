import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Converter from '@components/Converter';
import CurrencyPairs from '@components/CurrencyPairs';
import Footer from '@components/Footer';
export default function Home({data, unixtime}) {
  return (
    
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav>
            <Nav.Link href="#Converter">Converter</Nav.Link>
            <Nav.Link href="#Pairs">Currency Pairs</Nav.Link>
            <Nav.Link>Github</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <h2 id="Converter" className="mt-5 text-center"> Currency Converter</h2>
      <Converter data={data} unixtime={unixtime}></Converter>
      <CurrencyPairs data={data}></CurrencyPairs>
      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps() {
  let data = {};
  let unixtime;
  const labels = ["SGD","MYR","AED","AUD","BRL","CAD","CHF","CLP","CNY","COP","CZK","DKK","EUR","GBP","HKD","HUF","IDR","ILS","INR", "JPY", "USD","KRW","MXN","NOK","NZD","PHP","PLN","RON","RUB","SAR","SEK","THB","TRY","TWD","USD","ZAR"];
  for (const label of labels) {
    const res = await fetch('https://api.exchangerate-api.com/v4/latest/' + label);
    const subdata = await res.json();
    data[label] = subdata["rates"];
    unixtime = subdata["time_last_updated"];
  }
  
  return {
    props: {
      data,
      unixtime,
    },
    revalidate: 86400,
  }
}