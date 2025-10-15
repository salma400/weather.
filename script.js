const input = document.getElementById("weatherInput");
const btn = document.getElementById("changeBtn");
const message = document.getElementById("message");

btn.onclick = () => {
  const inputValue = input.value.trim().toLowerCase().replace(/\s+/g, " ");

  switch (inputValue) {
    case "sunny":
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/1198507/pexels-photo-1198507.jpeg?_gl=1*nccale*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NTk4OTgkajM4JGwwJGgw')";
      message.textContent = "It's a bright and sunny day!";
      break;
    case "rainy":
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/1250672/pexels-photo-1250672.jpeg?_gl=1*la1e0p*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NjAyMjAkajM3JGwwJGgw')";
      message.textContent = "Don't forget your umbrella!";
      break;
    case "cloudy":
      document.body.style.backgroundImage =
        "url('https://images.pexels.com/photos/7919/pexels-photo.jpg?_gl=1*uh7pk5*_ga*NTIyNDIyMzI2LjE3NTEwNzAxOTE.*_ga_8JE65Q40S6*czE3NjA0NTk4NzYkbzUkZzEkdDE3NjA0NjAzMDMkajE1JGwwJGgw')";
      message.textContent = "A calm and cloudy day";
      break;
    default:
      document.body.style.backgroundImage = "url('')";
      message.textContent = "Please enter sunny, rainy, or cloudy!";
      break;
  }
  input.value = " ";
};
