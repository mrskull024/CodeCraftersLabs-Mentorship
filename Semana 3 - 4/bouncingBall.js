function bouncingBall(initial, proportion) {
    // your code here
    if (initial <= 1 || proportion <= 0 || proportion >= 1) {
        return 0;
    }

    let bouncing = 0;

    while (initial > 1) {
        initial *= proportion;
        bouncing++;
    }

    return bouncing;
};