const STORE = {


    algo1: {
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
                name: 'const intersect = (nums1, nums2) => {',
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
    algo2: {
        description: {
            name: "algo2 name",
            summary: "the details of the question"
        },
        items: [
            {
                id: '0',
                description: 'list item'
            },

            {
                id: '1',
                name: 'Gary Goodspeed',
            },
            {
                id: '2',
                name: 'Little Cato',
            },
            {
                id: '3',
                name: 'KVN',
            },
            {
                id: '4',
                name: 'Mooncake',
            },
            {
                id: '5',
                name: 'Quinn Ergon',
            }
        ]
    }
}

export default STORE