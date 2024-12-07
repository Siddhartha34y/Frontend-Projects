// Initialize record list
let records = [];

// Function to add a new record
function addRecord() {
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;

    if (name && description) {
        // Create a new record object
        const record = {
            id: records.length + 1,
            name: name,
            description: description
        };

        // Add to records list
        records.push(record);

        // Display the new record
        displayRecords();

        // Reset the form fields
        document.getElementById("recordForm").reset();
    } else {
        alert("Please fill out all fields.");
    }
}

// Function to display records in the table
function displayRecords() {
    const tableBody = document.querySelector("#recordTable tbody");
    tableBody.innerHTML = "";

    records.forEach(record => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${record.id}</td><td>${record.name}</td><td>${record.description}</td>`;
        tableBody.appendChild(row);
    });
}
