// Union type
function kgToLbs(weight: number | string): number {
    // Narrowing
    if (typeof weight === 'number')
        return weight * 2.2;
    else 
        return parseInt(weight) * 2.2;
}

kgToLbs(10);
kgToLbs("20kg");

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

// Intersection type
type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}

// Literal type (exact, specific)
type Quantity = 50 | 100;

type Metric = 'cm' | 'inch';

let quantity: Quantity = 50;