const usernames = ["david", "david1", "david2"];
        const input = document.querySelector("#input");
        const button = document.querySelector("button");

        const handleInput = (event) => {
            const value = event.target.value.trim();
            input.classList.toggle("has-value", value !== "");

            const usernameExists = usernames.includes(value);
            const isValid = value && !usernameExists;

            input.classList.toggle("valid", isValid);
            input.classList.toggle("invalid", !isValid && value !== "");

            button.disabled = !isValid;
        };

        const handleBlur = (event) => {
            const input = event.target;
            if (input.value.trim() !== "") {
                input.type = "password"; // Masquer le texte après saisie
            }
        };