function distributeGifts(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    
    function getNeighborAverage(r, c) {
        let sum = 0;
        let count = 0;

        if (r > 0 && matrix[r - 1][c] !== null) {
            sum += matrix[r - 1][c];
            count++;
        }
        if (r < rows - 1 && matrix[r + 1][c] !== null) {
            sum += matrix[r + 1][c];
            count++;
        }
        if (c > 0 && matrix[r][c - 1] !== null) {
            sum += matrix[r][c - 1];
            count++;
        }
        if (c < cols - 1 && matrix[r][c + 1] !== null) {
            sum += matrix[r][c + 1];
            count++;
        }
        
        return count > 0 ? sum / count : 0;
    }

    const result = [];

    for (let r = 0; r < rows; r++) {
        const newRow = [];
        for (let c = 0; c < cols; c++) {
            if (matrix[r][c] === null) {
                // Si el valor es null, lo sustituimos por el promedio de sus vecinos
                newRow.push(Math.round(getNeighborAverage(r, c)));
            } else {

                let sum = matrix[r][c];
                let count = 1; // Contamos el valor original

                // Verificar los vecinos
                if (r > 0 && matrix[r - 1][c] !== null) {
                    sum += matrix[r - 1][c];
                    count++;
                }
                if (r < rows - 1 && matrix[r + 1][c] !== null) {
                    sum += matrix[r + 1][c];
                    count++;
                }
                if (c > 0 && matrix[r][c - 1] !== null) {
                    sum += matrix[r][c - 1];
                    count++;
                }
                if (c < cols - 1 && matrix[r][c + 1] !== null) {
                    sum += matrix[r][c + 1];
                    count++;
                }

                // Agregamos el promedio redondeado
                newRow.push(Math.round(sum / count));
            }
        }
        result.push(newRow);
    }

    return result;
}

// ejemplo
const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4],
];

console.log(distributeGifts(input));

