const STORE = [


    {
        description: {
            name: "Intersection of Two Arrays",
            summary: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.",
            input: "Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
            output: "Output: [4,9]",
            explanation: "Explanation: [9,4] is also accepted."
        },
        items: [

            {
                id: '1',
                name: 'const intersection = (nums1, nums2) => {',
            },
            {
                id: '2',
                name: 'const map = new Map()',
            },
            {
                id: '3',
                name: ' for (const n of nums1) {',
            },
            {
                id: '4',
                name: 'if (map.has(n)) {',
            },
            {
                id: '5',
                name: 'map.set(n, map.get(n) + 1)',
            },
            {
                id: '6',
                name: ' } else {',
            },
            {
                id: '7',
                name: ' map.set(n, 1)',
            },
            {
                id: '8',
                name: '}}',
            },
            {
                id: '9',
                name: 'const result = []',
            },
            {
                id: '10',
                name: 'for (const n of nums2) {',
            },
            {
                id: '11',
                name: ' if (map.has(n) && map.get(n) > 0) {',
            },
            {
                id: '12',
                name: 'result.push(n)',
            },
            {
                id: '13',
                name: 'map.set(n, map.get(n) - 1)',
            },
            {
                id: '14',
                name: '}}',
            },
            {
                id: '15',
                name: ' return result',
            },
            {
                id: '16',
                name: '}',
            }
        ]
    },  

    {
        description: {
            name: "Roman to Integer",
            summary: "Roman numerals are represented by seven different symbols: I = 1, V = 5, X = 10, L = 50, C =100, D = 500 and M = 1000.   There are six instances where subtraction is used: I can be placed before V (5) and X (10) to make 4 and 9. X can be placed before L (50) and C (100) to make 40 and 90. C can be placed before D (500) and M (1000) to make 400 and 900. Given a roman numeral, convert it to an integer.",
            input: "Input: Input: s = 'LVIII'",
            output: "Output: 58",
            explanation: "Explanation: L = 50, V= 5, III = 3"
        },
        items: [
           

            {
                id: '1',
                name: 'const romanToInt = s => {',
            },
            {
                id: '2',
                name: 'if (!s || s.length === 0) {',
            },
            {
                id: '3',
                name: 'return 0 }',
            },
            {
                id: '4',
                name: 'const map = ',
            },
            {
                id: '5',
                name: "new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]])",
            },
            {
                id: '6',
                name: 'let i = s.length - 1',
            },
            {
                id: '7',
                name: 'let result = map.get(s[i])',
            },
            {
                id: '8',
                name: 'while (i > 0) {',
            },
            {
                id: '9',
                name: 'const curr = map.get(s[i]);',
            },
            {
                id: '10',
                name: 'const prev = map.get(s[i - 1])',
            },
            {
                id: '11',
                name: 'if (prev >= curr) {',
            },
            {
                id: '12',
                name: 'result += prev',
            },
            {
                id: '13',
                name: '} else {',
            },
            {
                id: '14',
                name: 'result -= prev }',
            },
            {
                id: '15',
                name: 'i-- }',
            },
            {
                id: '16',
                name: 'return result }',
            }
        ]
    },

    {
        description: {
            name: "Pascal's Triangle",
            summary: "Given an integer numRows, return the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it",
            input: "Input: numRows = 5",
            output: "Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
            explanation: ""
        },
        items: [

            {
                id: '1',
                name: 'const pascalsTriangle = (numRows) => {',
            },
            {
                id: '2',
                name: 'if (numRows === 0) {',
            },
            {
                id: '3',
                name: 'return []}',
            },
            {
                id: '4',
                name: 'const result = []',
            },
            {
                id: '5',
                name: 'for (let i = 0; i < numRows; i++) {',
            },
            {
                id: '6',
                name: 'let currRow = []',
            },
            {
                id: '7',
                name: 'for (let j = 0; j <= i; j++) {',
            },
            {
                id: '8',
                name: 'if (j === 0 || j === i){',
            },
            {
                id: '9',
                name: 'currRow.push(1)',
            },
            {
                id: '10',
                name: '} else {',
            },
            {
                id: '11',
                name: 'currRow.push(',
            },
            {
                id: '12',
                name: 'result[i - 1]',
            },
            {
                id: '13',
                name: '[j - 1]',
            },
            {
                id: '14',
                name: '+ result[i - 1]',
            },
            {
                id: '15',
                name: '[j])',
            },
            {
                id: '16',
                name: '}}',
            },
            {
                id: '17',
                name: 'result.push(currRow) }',
            },
            {
                id: '18',
                name: 'return result }',
            }
        ]
    }
]

export default STORE