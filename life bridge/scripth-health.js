
function showFields() {
    const userRole = document.getElementById("userRole").value;
    
    // Hide all sections first
    document.getElementById("patientFields").style.display = "none";
    document.getElementById("medianFields").style.display = "none";
    document.getElementById("doctorFields").style.display = "none";
 
    if (userRole === "patient") {
        document.getElementById("patientFields").style.display = "block";
    } else if (userRole === "median") {
        document.getElementById("medianFields").style.display = "block";
    } else if (userRole === "doctor") {
        document.getElementById("doctorFields").style.display = "block";
    }
}


function calculatePayment() {
    const role = document.getElementById("userRole").value;
    const paymentAmount = 500;  
    const appCutPercentage = 0.1; 
    const medianSharePercentage = 0.05; 
    const doctorSharePercentage = 0.05; 

    let appCut = 0, medianShare = 0, doctorEarnings = 0;

    if (role === "patient") {
        // Calculate payment distribution for patient role
        appCut = paymentAmount * appCutPercentage;
        medianShare = paymentAmount * medianSharePercentage;
        doctorEarnings = paymentAmount * doctorSharePercentage; 
    } else if (role === "median") {
       
        appCut = paymentAmount * appCutPercentage;
        medianShare = paymentAmount * medianSharePercentage;
        doctorEarnings = paymentAmount * doctorSharePercentage; 
    } else if (role === "doctor" || role === "intern") {
        // If they are a doctor or intern taking subscriptions, all amount goes to the app
        appCut = paymentAmount;
        medianShare = 0;
        doctorEarnings = 0; 
    }

    // Display payment summary
    document.getElementById("paymentCalculation").style.display = "block";
    document.getElementById("summaryText").innerText = 
        `Total Payment: ₹${paymentAmount.toFixed(2)}\n` +
        `App Cut: ₹${appCut.toFixed(2)}\n` +
        `Median Share: ₹${medianShare.toFixed(2)}\n` +
        `Doctor Earnings: ₹${doctorEarnings.toFixed(2)}`;
}



