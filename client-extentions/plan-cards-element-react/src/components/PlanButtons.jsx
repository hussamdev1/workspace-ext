import React from 'react'

export default function PlanButtons({ plan, setSelectedPlan, selectedPlan}) {
    const styles = {
        planBtn: {
            display: "inline-block",
            marginRight: "12px",
            padding: "10px 30px",
            backgroundColor: selectedPlan.name===plan.name ? "#000" : "#FFF",
            color: selectedPlan.name===plan.name ? "#FFF" : "#000",
            border: "1px solid #000",
            borderRadius: "30px",
            textAlign:"left",
            cursor: "pointer",								
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "24px",
            transition: "all 0.3s ease"
        }
    }

    return (<button
    onClick={() => {
        setSelectedPlan(plan);
    }}
        style={styles.planBtn}>
            {plan.name}{plan.discountEnabled ? ` (${plan.discountRate}% off)` : ""}
            </button>);
}

