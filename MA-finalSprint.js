// Fetch the JSON file
fetch("simplefile.json")
  .then((response) => response.json())
  .then((data) => {
    // Container where HTML will be inserted
    const container =
      document.getElementById("employee-container") || document.body;

    data.employee.forEach((employee) => {
      // Log to console
      console.log(get(employee));

      // New div element for each employee
      const employeeDiv = document.createElement("div");
      employeeDiv.textContent = get(employee);

      // Append new div to container
      container.appendChild(employeeDiv);
    });

    // Log the entire data to console
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching the JSON file:", error);
  });

// Function to get the name of the employee
function getName(employee) {
  return employee.name;
}

// Function to get the company of the employee
function getCompany(employee) {
  return employee.company;
}

// Function to get both
function get(employee) {
  return `${employee.name} is an employee for ${employee.company}.`;
}
