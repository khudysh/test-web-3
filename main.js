async function film() {
  let ask = prompt("Введите год для Бэтмэна: ")
  let url = 'http://www.omdbapi.com/?apikey=d2ed67d1&t=Batman&y='+ask;
  let response = await fetch(url);

  let answer = await response.json(); // читаем ответ в формате JSON


  p = document.createElement("p")
  p.innerHTML = answer.Title;
  document.body.append(p)
  p1 = document.createElement("p")
  p1.innerHTML = answer.Year;
  document.body.append(p1)
  p2 = document.createElement("p")
  p2.innerHTML = answer.Plot;
  document.body.append(p2)


}