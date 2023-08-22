
for (let i = 1; i < 4; i++) {
    const order = document.querySelector(`[data-key="order${i}"]`);
    const biscuits = order.dataset.biscuits;
    const donuts = order.dataset.donuts;
    const pancakes = order.dataset.pancakes;
    const delivered = order.dataset.delivered;
    document.querySelector(`[data-key="order${i}"] .biscuits .count`).innerText = biscuits;
    document.querySelector(`[data-key="order${i}"] .donuts .count`).innerText = donuts;
    document.querySelector(`[data-key="order${i}"] .pancakes .count`).innerText = pancakes;
    orderStatus = delivered === "true" ? "Delivered" : "Pending";
    document.querySelector(`[data-key="order${i}"] .status dd`).innerText = orderStatus;
};