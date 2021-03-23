const STORE = [


    {
        description: {
            name: "Intersection of Two Arrays",
            summary: "Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.",
            input: "Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]",
            output: "Output: [4,9]",
            explanation: "Explanation: [9,4] is also accepted."
        },
        steps: [

            {
                id: '0',
                item: 'const intersection = (nums1, nums2) => {',
            },
            {
                id: '1',
                item: 'const map = new Map()',
            },
            {
                id: '2',
                item: ' for (const n of nums1) {',
            },
            {
                id: '3',
                item: 'if (map.has(n)) {',
            },
            {
                id: '4',
                item: 'map.set(n, map.get(n) + 1)',
            },
            {
                id: '5',
                item: ' } else {',
            },
            {
                id: '6',
                item: ' map.set(n, 1)',
            },
            {
                id: '7',
                item: '}}',
            },
            {
                id: '8',
                item: 'const result = []',
            },
            {
                id: '9',
                item: 'for (const n of nums2) {',
            },
            {
                id: '10',
                item: ' if (map.has(n) && map.get(n) > 0) {',
            },
            {
                id: '11',
                item: 'result.push(n)',
            },
            {
                id: '12',
                item: 'map.set(n, map.get(n) - 1)',
            },
            {
                id: '13',
                item: '}}',
            },
            {
                id: '14',
                item: ' return result',
            },
            {
                id: '15',
                item: '}',
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
        steps: [
           

            {
                id: '0',
                item: 'const romanToInt = s => {',
            },
            {
                id: '1',
                item: 'if (!s || s.length === 0) {',
            },
            {
                id: '2',
                item: 'return 0 }',
            },
            {
                id: '3',
                item: 'const map = ',
            },
            {
                id: '4',
                item: "new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]])",
            },
            {
                id: '5',
                item: 'let i = s.length - 1',
            },
            {
                id: '6',
                item: 'let result = map.get(s[i])',
            },
            {
                id: '7',
                item: 'while (i > 0) {',
            },
            {
                id: '8',
                item: 'const curr = map.get(s[i]);',
            },
            {
                id: '9',
                item: 'const prev = map.get(s[i - 1])',
            },
            {
                id: '10',
                item: 'if (prev >= curr) {',
            },
            {
                id: '11',
                item: 'result += prev',
            },
            {
                id: '12',
                item: '} else {',
            },
            {
                id: '13',
                item: 'result -= prev }',
            },
            {
                id: '14',
                item: 'i-- }',
            },
            {
                id: '15',
                item: 'return result }',
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
        steps: [

            {
                id: '0',
                item: 'const pascalsTriangle = (numRows) => {',
            },
            {
                id: '1',
                item: 'if (numRows === 0) {',
            },
            {
                id: '2',
                item: 'return []}',
            },
            {
                id: '3',
                item: 'const result = []',
            },
            {
                id: '4',
                item: 'for (let i = 0; i < numRows; i++) {',
            },
            {
                id: '5',
                item: 'let currRow = []',
            },
            {
                id: '6',
                item: 'for (let j = 0; j <= i; j++) {',
            },
            {
                id: '7',
                item: 'if (j === 0 || j === i){',
            },
            {
                id: '8',
                item: 'currRow.push(1)',
            },
            {
                id: '9',
                item: '} else {',
            },
            {
                id: '10',
                item: 'currRow.push(',
            },
            {
                id: '11',
                item: 'result[i - 1]',
            },
            {
                id: '12',
                item: '[j - 1]',
            },
            {
                id: '13',
                item: '+ result[i - 1]',
            },
            {
                id: '14',
                item: '[j])',
            },
            {
                id: '15',
                item: '}}',
            },
            {
                id: '16',
                item: 'result.push(currRow) }',
            },
            {
                id: '17',
                item: 'return result }',
            }
        ]
    }
]

export default STORE