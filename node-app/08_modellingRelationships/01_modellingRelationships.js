// Trade off  between query performance and consistancy

// Using References (Normalization) -> consistancy
let author = {
    name: 'Manor Simbolan'
}

let course = {
    author: 'id'
}

// Using embedded documents (Denormalization) -> performance
let course = {
    author: {
        name: 'Manor Simbolan'
    }
}

// Hybrid
let course = {
    author: {
        id: 'ref',
        name: 'Manor'
    }
}