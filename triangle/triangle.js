class Triangle {
    constructor(a,b,c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    isTriangle(){
        if (this.a <= 0 || this.b <= 0 || this.c <=0){
            return false;
        } else if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b){
            return false;
        } else {
            return true;
        }

    }

    kind(){
        if(this.isTriangle()) {
            if (this.a != this.b && this.b != this.c && this.a != this.c) {
                return "scalene";
            } else if (this.a === this.b && this.b === this.c) {
                return "equilateral";
            } else {
                return "isosceles";
            }
        } else {
            throw new Error("ILLEGAL TRIANGLE");
        }
    }
}

export {Triangle}