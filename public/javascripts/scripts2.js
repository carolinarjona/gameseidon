const deleteVideogame = async (id) => {
  const response = await fetch(`http://localhost:3000/videogames/${id}`, {
    method: "DELETE",
    body: null,
    headers: {
      "Content-Type": "application/json",
    },
  });
  document.getElementById(id).remove();
  return await response.json();
};
