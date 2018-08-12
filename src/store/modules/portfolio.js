const state = {
    funds: 10000,
    stocks: []
};

const mutations = {
    'BUY_STOCK' (state, {stockId, quantity, stockPrice}) {
        // check if buy stock exist on current stocks
        const record = state.stocks.find(el => el.id == stockId);

        // if stock exist, increase stock quantity
        if(record) {
            record.quantity += quantity;
        } 
        // else, create new stock
        else {
            state.stocks.push({
                id: stockId,
                quantity: quantity
            });
        }

        // reduce funds
        state.funds -= stockPrice * quantity;
    },
    'SELL_STOCK' (state, {stockId, quantity, stockPrice}) {
        // check if buy stock exist on current stocks
        const record = state.stocks.find(el => el.id == stockId);

        // if stock exist, 
        // and if, current stock quantity > buy stock quantity
        // reduce current stock quantity
        if(record.quantity > quantity) {
            record.quantity -= quantity;
        }
        // else, remove stock
        else {
            state.stocks.splice(state.stocks.indexOf(record), 1);
        }

        // increase funds
        state.funds += stockPrice * quantity;
    }
};

actions = {
    sellStock: ({ commit }) => {
        commit('SELL_STOCK', order);
    }
};

const getters = {
    stockPortfolio (state, getters) {

        // return object combined
        // from portfolio state data (id, quantity)
        // and global (stocks) state data (name, price)
        return state.stocks.map(stock => {
            const record = getters.stocks.find(el => el.id == stock.id);
            return {
                id: stock.id,
                quantity: stock.quantity,
                name: record.name,
                price: record.price
            }
        });
    },
    funds (state) {
        return state.funds;
    }
};