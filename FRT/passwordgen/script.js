function generatePassword() {
    var lengthInput = document.getElementById("length");
    var passwordInput = document.getElementById("password");
    var strengthIndicator = document.getElementById("strength");

    var length = parseInt(lengthInput.value);

    // Check if the length is within the range
    if (length < 8 || length > 64) {
      alert("Please enter a password length between 8 and 64 characters.");
      return;
    }

    var password = generateRandomPassword(length);
    passwordInput.value = password;

    var strength = getPasswordStrength(password);
    strengthIndicator.textContent = strength;
  }

  function generateRandomPassword(length) {
    var charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\\:;?><,./-=";
    var password = "";
    for (var i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  }

  function copyPassword() {
    var passwordInput = document.getElementById("password");
    passwordInput.select();
    passwordInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Password copied to clipboard!");
  }

  function getPasswordStrength(password) {
    var strength = "";

    // Check password length
    if (password.length < 8) {
      strength = "Weak";
    } else if (password.length < 12) {
      strength = "Medium";
    } else {
      strength = "Strong";
    }

    // Check character types
    var regex = {
      lowercase: /[a-z]/,
      uppercase: /[A-Z]/,
      number: /[0-9]/,
      symbol: /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/,
    };
    var characterTypes = 0;

    if (regex.lowercase.test(password)) {
      characterTypes++;
    }
    if (regex.uppercase.test(password)) {
      characterTypes++;
    }
    if (regex.number.test(password)) {
      characterTypes++;
    }
    if (regex.symbol.test(password)) {
      characterTypes++;
    }

    // Evaluate password strength based on character types
    if (strength === "Strong" && characterTypes < 4) {
      strength = "Medium";
    }
    if (strength === "Medium" && characterTypes < 3) {
      strength = "Weak";
    }

    return strength;
  }
