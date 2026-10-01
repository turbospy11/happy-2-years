const penguin = document.querySelector(".runaway-penguin");

if (penguin) {
    const edgePadding = 12;
    const escapeDistance = 175;
    const triggerDistance = 150;

    const moveAwayFromPointer = (event) => {
        const bounds = penguin.getBoundingClientRect();
        const penguinX = bounds.left + bounds.width / 2;
        const penguinY = bounds.top + bounds.height / 2;
        const deltaX = penguinX - event.clientX;
        const deltaY = penguinY - event.clientY;
        const distance = Math.hypot(deltaX, deltaY);

        if (distance >= triggerDistance) {
            return;
        }

        const angle = distance === 0 ? Math.random() * Math.PI * 2 : Math.atan2(deltaY, deltaX);
        const nextX = penguinX + Math.cos(angle) * escapeDistance - bounds.width / 2;
        const nextY = penguinY + Math.sin(angle) * escapeDistance - bounds.height / 2;
        const maxX = window.innerWidth - bounds.width - edgePadding;
        const maxY = window.innerHeight - bounds.height - edgePadding;

        penguin.style.left = `${Math.max(edgePadding, Math.min(nextX, maxX))}px`;
        penguin.style.top = `${Math.max(edgePadding, Math.min(nextY, maxY))}px`;
    };

    document.addEventListener("pointermove", moveAwayFromPointer);
}