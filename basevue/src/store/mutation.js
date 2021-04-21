const mutations = {
    SET_FROM_CHILDEN1_DATA(state,data){
        console.log('fffff'+data)
        state.fromChilden1Data = {...state.fromChilden1Data,context:data}
    }
}

export default mutations