document.getElementById("capital").addEventListener("change", function() {
    let capitalName = document.getElementById("capital").value;
    let countryElement = document.getElementById("country");
    
    
    let countryMap = {
        "New Delhi": "India",
        "Washingtom, D.C.": "United States",
        "Tokyo": "Japan",
        "Paris": "France",
        "London": "United Kingdom"
    };
    
    countryElement.textContent = countryMap[capitalName] || "unknown";
    
});