fetch("/people")
  .then(res => res.json())
  .then(data => {
      const ul = document.getElementById("people");

      data.forEach(person => {
          const li = document.createElement("li");
          li.textContent = person.name + " (" + person.status + ")";
          ul.appendChild(li);
      });
  });
