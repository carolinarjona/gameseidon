const deleteVideogame = async (id) => {
  await fetch(`http://localhost:3000/videogames/${id}`, {
    method: "DELETE",
    body: null,
    headers: {
      "Content-Type": "application/json",
    },
  }).then(console.log);
  console.log(id);
  document.getElementById(id).remove();
};
