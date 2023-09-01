function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function (activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(result){
    return function (emphatic = "a hard worker"){
        return (`You are ${result}${emphatic}${result}!`)
        }
    }