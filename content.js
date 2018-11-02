Array.of(...document.querySelectorAll(".commit-id, .sha")).forEach(item => {
    const text = item.innerText.slice(0, 6);
    item.style = `color: #${text}`;
});
