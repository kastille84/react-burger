import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

// we pass id which comes from newly created data on backend
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

// ASYNC action, which will reach out to the backend server

export const purchaseBurger = (orderData) => {
    return (dispatch) => {
        // before request, do an initializing action
            dispatch(purchaseBurgerStart());
        // reach out to db
        axios.post('/orders.json', orderData)
            .then(response => {
                console.log(response.data);
                dispatch(purchaseBurgerSuccess(response.data.name, orderData))
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error))
            });

    }
}
//

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    }
}

// FETCHING ORDERS
export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    }
}
export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}
    // ASYNC
export const fetchOrders = () => {
    return (dispatch) => {
        // initialize the action
        dispatch(fetchOrdersStart())
        // do async request
        axios.get('orders.json')
            .then(res => {
                const fetchedOrders = [];
                // turn orders object into array, for..in is good for looping thru object
                for ( let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(e => {
                dispatch(fetchOrdersFail(e));
            });
    }
}
