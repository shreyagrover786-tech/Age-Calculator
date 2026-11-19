import {useState} from "react";

function AgeCalculator() {
    const [dob, setDob] = useState("");
    const [age, setAge] = useState(null);
    
    const handleCalculator = () => {
        if (dob === "") {
            alert("Select Your Date of Birth First!");
            return;
        }
        const birthDate = new Date(dob);
        const today = new Date();

        let years = today.getFullYear() - birthDate.getFullYear();
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        if (days < 0) {
            months--;
        }
        if (months < 0) {
            years--;
            months = months + 12;
        }
        setAge({ years, months, days });
    };
    const handleClear = () => {
        setDob("");
        setAge(null);
    }
    return (
        <div style={{ minHeight: "100vh", background: "#eef2ff", display: "flex", justifyContent: "center", alignItems: "center", fontFamily: "Arial"}}>
          <div style={{ background: "white", padding: "30px", borderRadius: "20px", textAlign: "center", width: "350px", boxShadow: "0 10px 20px rgba(0,0,0,0.1)"}}>
            <h1> Age Calculator </h1>
            <p>Select your Date of Birth</p>
            <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            style={{ padding: "10px", width: "100%", fontSize: "16px", boxSizing: "border-box"}}
            />
            <button
            onClick={handleCalculator}
            style={{ marginTop: "15px", background: "#4f46e5", color: "white", border: "none", padding: "10px 25px", fontSize: "16px", borderRadius: "20px", cursor: "pointer"}}>
                Calculate Age 
                </button>
                <button
                onClick={handleClear}
                style={{background: "#ef4444", color: "white", border: "none", padding: "10px 25px", fontSize: "16px", borderRadius: "20px", cursor: "pointer", marginLeft: "10px"}}>
                    Clear
                </button>
                {age && (
                    <h2 style={{marginTop: "20px", color: "#333"}}>
                        {age.years}years, {age.months}months, {age.days}days!
                        </h2>
                )}   
            </div>
        </div>     
    );
}
export default AgeCalculator;