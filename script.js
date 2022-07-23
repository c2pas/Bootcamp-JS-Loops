window.onload = function () {
    const list = document.getElementById("grocery");
    const grocerylist = [
      {
        title: "Meat",
        options: ["Fish", "Chicken", "Pork", "Beef"]
      },
      {
        title: "Soap and Shampoos",
        options: ["Head n Shoulders", "Safeguard", "Dove", "Rejoice"]
      },
      {
        title: "Vegetables",
        options: ["Carrots", "Pechay", "Talong", "Sitaw"]
      },
      {
        title: "Canned goods",
        options: ["Corned beef", "Sardines", "Spam", "Beef Loaf"]
      }
    ]
    list.innerHTML = `
      ${grocerylist.map(function(item, index) {
        return `
            <div class="box">
                <h3>${item.title}</h3>
                <form>
                ${item.options.map(function(option) {
                    return `
                    <input type="checkbox" id="${item.title + index}" name="${item.title + index}" value="${option}">
                    <label for="${item.title + index}">${option}</label><br>
                    `
                }).join("")}
                </form>
            </div>
        `
      }).join("")}
    `
}
