document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const dropdown = document.querySelector(".dropdown");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    dropdown.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const mapFrame = document.querySelector(".map");

    const locations = {
        "Bohaterów Westerplatte 12, Wschowa": "https://maps.google.com/maps?q=ul.%20Bohater%C3%B3w%20Westerplatte%2012%20Wschowa&z=16&output=embed",
        "Niepodległości 24, Wschowa": "https://maps.google.com/maps?q=ul.%20Niepodleg%C5%82o%C5%9Bci%2024%20Wschowa&z=16&output=embed",
        "Powstańców Wielkopolskich 6, Wschowa": "https://maps.google.com/maps?q=ul.%20Powsta%C5%84c%C3%B3w%20Wielkopolskich%206%20Wschowa&z=16&output=embed"
    };

    function updateMap(address) {
        if (locations[address]) {
            mapFrame.src = locations[address];
        }
    }

    document.querySelectorAll("input[name='address']").forEach(radio => {
        radio.addEventListener("change", function () {
            updateMap(this.value);
        });
    });

    const defaultAddress = document.querySelector("input[name='address']:checked").value;
    updateMap(defaultAddress);
});

document.addEventListener("DOMContentLoaded", function () {
    const chatButton = document.getElementById("chat-button");
    const chatBox = document.getElementById("chat-box");
    const closeChat = document.getElementById("close-chat");

    // Pokazuje okno czatu po kliknięciu w przycisk
    chatButton.addEventListener("click", function () {
        chatBox.style.display = "flex";
    });

    // Zamyka czat po kliknięciu "X"
    closeChat.addEventListener("click", function () {
        chatBox.style.display = "none";
    });
});
