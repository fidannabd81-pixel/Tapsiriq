let username = prompt("login daxil et");

(username === "admin" &&
  (
    (prompt("password daxil et") === "12345" && alert("Admin panelə giriş edildi"))
    ||
    alert("Şifrə yanlişdir")
  )
)
||
alert("Belə istifadəçi yoxdur");
console.log("yoxlama basa catdi")