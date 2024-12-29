import { useEffect, useState } from 'react'

import './App.css'
import AnaCard from './components/AnaCard'
import PlanButtons from './components/PlanButtons'

function App() {
  const [items, setItems] = useState([]);
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [selectedCard, setSelectedCard] = useState(1);
  var totalPages = 0;

  useEffect(() => {

    const fetchPLanItems = async () => {
      const response = await fetch('http://192.168.210.111:8080/o/c/planitems?sort=index&nestedFields=featuresToPlanItem,servicesToPlanItem', {
        headers: {
          'accept': 'application/json',
          'x-csrf-token': 'xmPv9e3V',
          'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTpUZXN0QDEyMzQk',
          'Cookie': 'JSESSIONID=CCDCC093DE02F2A01B0DDC5BE1FAB7E7',
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching categories: ${response.statusText}`);
      }

      const data = await response.json();
      setItems(data?.items);
      
    }

    const fetchPlans= async () => {
      const response = await fetch('http://192.168.210.111:8080/o/c/plans?sort=id', {
        headers: {
          'accept': 'application/json',
          'x-csrf-token': 'xmPv9e3V',
          'Authorization': 'Basic dGVzdEBsaWZlcmF5LmNvbTpUZXN0QDEyMzQk',
          'Cookie': 'JSESSIONID=CCDCC093DE02F2A01B0DDC5BE1FAB7E7',
        },
      });

      if (!response.ok) {
        throw new Error(`Error fetching categories: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data?.items);
      setPlans(data?.items);
      setSelectedPlan(data?.items[0]);
    }
    fetchPLanItems();
    fetchPlans();
  }, [])

  totalPages = items.length;

  return (
    <>
      <div>
        {plans.map(el => <PlanButtons plan={el} setSelectedPlan={setSelectedPlan} selectedPlan={selectedPlan}/>)}
      </div>
      <div style ={{height: "30px"}}></div>
      <div className="cardsContainer" style={{display: "flex", overflow: "auto"}}>
        {Array.from(items, (el, i) => <AnaCard item={el} selectedPlan={selectedPlan} selectedCard={selectedCard} setSelectedCard={setSelectedCard} index={i}/>)}
      </div>
      <div style ={{height: "45px"}}></div>
      <div>
      {Array.from({ length: totalPages }, (_, i) => {return <button style={{
        width: selectedCard===i+1 ? "40px": "8.2px",
        height: "12px",
        borderRadius: selectedCard===i+1 ? "20px": "50%",
        backgroundColor: selectedCard===i+1 ? "#000":"#d2d5db",
        display: "inline-block",
        marginRight: "8px",
        outline: "none",
        border: "none",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}
      onClick={() => {
        setSelectedCard(i+1);
        document.getElementById(`card${i+1}`).scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start' });
      }}
      ></button>} 
      )}
      </div>

    </>
  )
}

export default App
