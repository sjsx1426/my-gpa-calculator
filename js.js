function addRow() {
  const section = document.getElementById("input-section");
  const row = document.createElement("div");
  row.className = "row";
  row.innerHTML = `
    <input type="text" placeholder="Subject Name" class="subject">
    <input type="number" placeholder="Credits" class="credit">
    <select class="grade">
      <option value="10">O</option>
      <option value="9">A+</option>
      <option value="8">A</option>
      <option value="7">B+</option>
      <option value="6">B</option>
      <option value="0">U</option>
    </select>
  `;
  section.appendChild(row);
}

function calculateGPA() {
  const credits = document.querySelectorAll(".credit");
  const grades = document.querySelectorAll(".grade");

  let totalCredits = 0;
  let totalPoints = 0;

  for (let i = 0; i < credits.length; i++) {
    const credit = parseFloat(credits[i].value);
    const grade = parseFloat(grades[i].value);

    if (!isNaN(credit)) {
      totalCredits += credit;
      totalPoints += credit * grade;
    }
  }

  const gpa = totalPoints / totalCredits;
  document.getElementById("result").innerText = 
    isNaN(gpa) ? "Please fill all values properly." : `📚 Your GPA is: ${gpa.toFixed(2)}`;
}
