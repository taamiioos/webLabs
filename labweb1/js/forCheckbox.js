const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let x = null;

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            x = checkbox.value;
            checkboxes.forEach(otherCheckbox => {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });
        } else {
            x = null;
        }
    });
});
