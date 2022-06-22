const addButton = document.getElementById("add");

addButton.addEventListener("click", () => {
  addNewNote();
});

function addNewNote() {
  const note = document.createElement("note");
  note.classList.add("notes");
  note.innerHTML = `
      <div class="tools">
        <button class="edit">
          <i class="fas fa-edit"></i>
        </button>
        <button class="delete">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="main hidden"></div>
      <textarea></textarea>`;
  const editButton = note.querySelector(".edit");
  const deleteButton = note.querySelector(".delete");

  const main = note.querySelector(".main");
  const textarea = note.querySelector("textarea");

  editButton.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textarea.classList.toggle("hidden");
  });

  textarea.addEventListener("input", (e) => {
    const { value } = e.target;
    main.innerHTML = marked(value);
  });
  deleteButton.addEventListener("click", () => {
    note.remove();
  });

  document.body.appendChild(note);
}
