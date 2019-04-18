export const steps = (num) => {
    if (num <= 0){
        throw new Error("Only positive numbers are allowed");
    }
    let step_count = 0;

    while (num > 1){
        step_count++;
        if(num%2 === 0){
            num = num/2;
        } else {
            num = num*3+1;
        }
    }
    return step_count;
}

