# Password Generator Starter Code

GIVEN I need a new, secure password

<!-- Step 1: Build / Style modal for each step -->

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

<!-- Step 2: Update Modal 2 that states password criteria guidlines   -->
WHEN prompted for password criteria
THEN I select which criteria to include in the password

<!-- Step 3 Set up modal to allow text input of a number between 8-128 -->

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

<!-- Step 4  -->

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
<!-- Step 5  -->
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
<!-- Step 6 -->
THEN a password is generated that matches the selected criteria
WHEN the password is generated
<!-- Step 7 -->
THEN the password is either displayed in an alert or written to the page