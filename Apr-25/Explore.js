<!DOCTYPE html>
<html>
<head>
  <title></title>

</head>
<body>
  <ul id="greetinglist">
      <script>

          let i = 0;
          do {
              let greeting = document.createElement("li");
              greeting.innerHTML = "Hello " + i;
              document.getElementById("greetinglist").appendChild(greeting);
              i++;
          } while (i < 5);

      </script>
  </ul>
</body>

</html>