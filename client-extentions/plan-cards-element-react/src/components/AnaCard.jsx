import React from 'react'
import mainLogo from '../assets/oredooSim.png';

export default function AnaCard({ item, selectedPlan, selectedCard, setSelectedCard, index}) {
  const styles = {
    badgeContainer: {
      width: "fit-content",
      height: "26.2px",
      padding: "4px 12px",
      border: '0.5px solid',
      borderRadius: '15px',
      borderColor: "#ED1C24",
      color: "#ED1C24",
      fontSize: "14px",
      fontWeight: "600",
      marginLeft: "auto",
      visibility: item.badgeEnabled ? "visibile" : "hidden"
    },
  
    imageContainer: {
      marginRight: '10px',
      height: "72px",
      width: "72px"
    },
    card: {
      cursor: "pointer",
      flexBasis: "330px",
      flexGrow: "0",
      flexShrink: "0", 
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Rubic, sans-serif',
      border: selectedCard===index+1 ? '1px solid #ed1c24' : '1px solid #d2d5db',
      borderRadius: '20px',
      padding: '10px 10.5px 0 22px',
      backgroundColor: '#fff',
      marginRight: "32px"
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '16px',
    },
    image: {
      marginRight: '10px',
    },
    prepaidText: {
      fontSize: '16px',
      fontWeight: "400",
      color: '#666',
      margin: 0,
    },
    planName: {
      fontSize: '24px',
      color: '#000',
      margin: 0,
    },
    description: {
      fontSize: '18px',
      textAlign: 'left',
      fontWeight: "400",
      color: '#4C5562',
      marginBottom: "20px"
    },
    price: {
      fontSize: '36px',
      margin: '10px 0',
      color: '#000',
      textAlign: "left"
    },
    currency: {
      fontSize: '36px',
    },
    perMonth: {
      fontSize: '16px',
      color: '#666',
    },
    includedTitle: {
      fontSize: '16px',
      color: '#000',
      margin: '20px 0 10px',
      textAlign: "left"
    },
    featuresList: {
      listStyleType: 'none',
      padding: 0,
      margin: "5px 0",
      textAlign: 'left',
  
    },
    servicesList: {
      display: "flex",
      alignItems: "center",
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      textAlign: 'left',
  
    },
    services: {
      fontSize: '18px',
      fontWeight: "400",
      color: '#170F49',
      margin: "0 -10px",
    },
    feature: {
      fontSize: '18px',
      fontWeight: "400",
      color: '#170F49',
      margin: '5px 0',
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: '8px',
      fontSize: "18px"
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "column",
      flexGrow: "1",
      alignItems: 'start',
      justifyContent: "end",
    },
    buyNowButton: {
      marginTop: '20px',
      backgroundColor: '#d32f2f',
      color: '#fff',
      padding: '12px 42px',
      border: 'none',
      borderRadius: '25px',
      cursor: 'pointer',
      fontSize: '16px',
    },
    note: {
      fontSize: '14px',
      color: '#6C727F',
      marginTop: '10px',
    },
  };

  return (
    <div id={`card${index+1}`} onClick={() => {
      setSelectedCard(index+1);
      document.getElementById(`card${index+1}`).scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start' });
    }} style={styles.card}>

      <div style={styles.badgeContainer}>
        <div style={{display: "flex", margin:"auto"}}>
          <div><img src="http://192.168.210.111:8080/documents/d/guest/hot_deal"></img></div>
          
          <div style={{margin:"auto"}}>{item.badgeType}</div>
        </div> 
      </div>
      <div style={styles.header}>

        <div style={styles.imageContainer}>

          <img
            src={mainLogo}
            alt="5G SIM"
            style={styles.image}
          />
        </div>

        <div>
          <h4 style={styles.prepaidText}>{item.planType}</h4>
          <h2 style={styles.planName}>{item.name}</h2>
        </div>
      </div>
      <p style={styles.description}>{item.descriptions}</p>
      <h1 style={styles.price}>
        <span style={styles.currency}>KD</span>
        {item.price * selectedPlan.planPeriod * (100 - selectedPlan.discountRate)/100}
        <span style={styles.perMonth}>/month</span>
      </h1>
      <h3 style={styles.includedTitle}>What’s included</h3>
      <ul style={styles.featuresList}>
        {console.log(item.featureToPlanItem)}
        {Array.from(item.featuresToPlanItem, (feature, i) => 
          <li style={styles.feature}>
          <img src={"http://192.168.210.111:8080" + feature.icon.link.href} style={styles.icon}></img> 
          {feature.name}
        </li>
      )}
      </ul>
      <ul style={styles.servicesList}>
      {Array.from(item.servicesToPlanItem, (service, i) => {
        if(i < 3) {
          return <li style={styles.services}>
          <img src={"http://192.168.210.111:8080" + service.icon.link.href} style={styles.icon}></img> 
        </li>;
        }
        else if(i+1 === item.servicesToPlanItem.length) {
          return <li >
          <p style={{ color: "#000", fontWeight: "500", fontSize: "14px" }}>+ {item.servicesToPlanItem.length - 3} more</p>
        </li>;
        }
      }
          
      )}
        
      </ul>
      <div style={styles.buttonContainer}>
        <button style={styles.buyNowButton}>Buy Now</button>
        <p style={styles.note}>*Free Delivery, Free Activation</p>
      </div>

    </div>
  );
}
