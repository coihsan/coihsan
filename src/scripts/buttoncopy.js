const copyEmail = "co.ihsan@gmail.com"
    function handleCopy() {
        navigator.clipboard.writeText(copyEmail)
            .then(() => {
                document.getElementById('textCopy').textContent = "Copied!";
                setTimeout(() => {
                    document.getElementById('textCopy').textContent = "E-Mail";
                }, 1000);
            })
            .catch(error => {
                console.error("Error copying email:", error);
            });
    }
    document.getElementById('buttonCopy')?.addEventListener('click', handleCopy)