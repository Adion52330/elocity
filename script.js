function col() {
  document.querySelector("#add").style.backgroundColor = "beige";
}
function uncol() {
  document.querySelector("#add").style.backgroundColor = "#fff";
}

const addBtn = document.getElementById("add");

const updateLSData = () => {
  const textAreaData = document.querySelectorAll("textarea");
  const notes = [];
  console.log(textAreaData);
  textAreaData.forEach((note) => {
    return notes.push(note.value);
  });
  console.log(notes);
  localStorage.setItem("notes", JSON.stringify(notes));
};

const addNewNote = (text = "") => {
  const note = document.createElement("div");
  note.classList.add("note");
  const htmlData = `
  <span style="display: flex; flex-direction: column">
  <i class="fas fa-quote-right" style="
  margin: 5px;
  padding: 5px;
  border-radius: 200px;
  color: #273c75;
  cursor: default;
"></i>
  <i
    class="fas fa-trash-alt"
    id="del"
    style="
      margin: 5px;
      padding: 5px;
      border-radius: 200px;
      color: red;
      cursor: pointer;
    "
  ></i>
</span>
<div class="main ${text ? "" : "hidden"}"></div>
<textarea
  style="padding: 10px; font-size: large; resize: none"
  class="${text ? "hidden" : ""}"
  id="texter"
  cols="30"
  rows="10"
></textarea>
  `;
  // note.insertAdjacentElement("afterbegin", htmlData);
  const noter = document.getElementById("notes");
  note.innerHTML = htmlData;

  // getting the references
  const delBtn = note.querySelector("#del");
  const texter = note.querySelector("#texter");

  texter.value = text;

  delBtn.addEventListener("click", () => {
    note.remove();
    updateLSData();
  });

  texter.addEventListener("change", (event) => {
    const value = event.target.value;
    console.log(value);
    updateLSData();
  });

  noter.appendChild(note);
};

const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}

addBtn.addEventListener("click", () => addNewNote());
