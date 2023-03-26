document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name-input");
    const submitName = document.getElementById("submit-name");
    const saveCard = document.getElementById("save-card");
    const nameDisplay = document.getElementById("name-display");

    submitName.addEventListener("click", function() {
        const name = nameInput.value;
        if (name.trim() !== "") {
            nameDisplay.textContent = name;
        } else {
            alert("الرجاء إدخال اسم قبل المتابعة.");
        }
    });

    saveCard.addEventListener("click", function() {
        if (nameDisplay.textContent.trim() !== "") {
            const cardImage = document.getElementById("card-image");
            const canvas = document.createElement("canvas");
            const ctx = canvas.getContext("2d");

            // تعيين حجم الكانفاس بنفس حجم الصورة
            //canvas.width = cardImage.width;
            //canvas.height = cardImage.height;

            canvas.width = cardImage.innerWidth;
            canvas.height = cardImage.innerHeight;

            ctx.drawImage(cardImage, 0, 0);

            // تعيين نسبة الارتفاع إلى العرض
            const ratio = canvas.width / 500;
            const fontSize = 60 * ratio;
            const lineHeight = 80 * ratio;

            ctx.font = `bold ${fontSize}px Arial`;
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.shadowColor = "black";
            ctx.shadowOffsetX = 2;
            ctx.shadowOffsetY = 2;
            ctx.shadowBlur = 4;
            ctx.fillText(
                nameDisplay.textContent,
                canvas.width / 2,
                canvas.height * 0.7,
                canvas.width - 20
            );

            const link = document.createElement("a");
            link.href = canvas.toDataURL("image/png");
            link.download = "بطاقة_التهنئة.png";
            link.click();
        } else {
            alert("الرجاء إدخال اسم وعرض البطاقة قبل حفظها.");
        }
    });
});
