function generatePaymentLink() {
    // In a real-world scenario, you would call your backend to generate a payment link
    alert("Payment link generated! Redirecting to payment page.");
    window.location.href = "https://examplepaymentgateway.com/checkout";
}

function sendPaymentLinkViaSMS() {
    const phoneNumber = document.getElementById("phoneNumber").value;

    // In a real-world scenario, you would call your backend to send an SMS with the payment link
    alert(`Payment link sent to ${phoneNumber} via SMS.`);
}
