const form = document.getElementById("resume-form");
const resumePreview = document.getElementById("resume-preview");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  // Add more code to retrieve and format other resume sections

  const resumeContent = `
    <h2>${name}</h2>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <p>Address: ${address}</p>
    <!-- Add more code to display other resume sections -->
  `;

  resumePreview.innerHTML = resumeContent;
});
