
const first = parseInt(
    prompt ("please enter your first number"),
);
const second = parseInt(
    prompt ("please enter your second number"),
);

function Numbers() {
    if (first < second) {
        return -1;
    };
    if (first > second) {
        return 1;
    };
    if (first == second)
        return 0;
}

console.log(`Answer: ${Numbers()}`);


