import config from './config'

const APIService = {

    getProblemSets() {

        return fetch(`${config.API_ENDPOINT}/problem_sets/`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
    },

    addProblemSet(set_name) {

        return fetch(`${config.API_ENDPOINT}/problem_sets/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(set_name),
        }).then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
    },


    getAlgorithmsForProblemSet(problem_set_name){

        return fetch(`${config.API_ENDPOINT}/algorithms/${problem_set_name}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        }).then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
    },


    addAlgorithm(algorithm) {

        return fetch(`${config.API_ENDPOINT}/algorithms/`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(algorithm),
        }).then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
    },



    patchAlgorithm(algorithm) {

        return fetch(`${config.API_ENDPOINT}/algorithms/${algorithm.id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(algorithm),
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(e => Promise.reject(e))
                }

                return res.json()
            })

    },

}

export default APIService