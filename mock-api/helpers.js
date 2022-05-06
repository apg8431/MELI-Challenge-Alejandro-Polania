

const getCategories = (categoryFilters) => {

    let categories = [];

    if(categoryFilters) {
        categoryFilters.values.forEach(entry => {
            
            entry.path_from_root.forEach(path => {
                if(path) {
                    categories.push(path.name);
                }
            })
        });
    }  

    return categories;
}

const getItems = (itemsSample) => {

    let items = [];

    itemsSample.forEach( item => {
        items.push({
            id: item.id,
            title: item.title,
            price: { 
                currency: item.prices.presentation.display_currency,
                amount: item.prices.prices[0].amount,
                decimals: getDecimals(item.prices.prices[0].amount)
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping
        });
    })

    return items;

}

const getItemDetails = (itemData, itemDescription) => {

    let itemDetails = {
        id: itemData.id,
        title: itemData.title,
        price: {
            currency: itemData.currency_id,
            amount: itemData.price,
            decimals: getDecimals(itemData.price)
        },
        picture: itemData.pictures[0].url,
        condition: itemData.condition,
        free_shipping: itemData.shipping.free_shipping,
        sold_quantity: itemData.sold_quantity,
        description: itemDescription.plain_text
    };

    return itemDetails;

}

function getDecimals(price) {
    return parseInt((price %1).toFixed(2).substring(2), 10);
}

module.exports = {
    getCategories: getCategories,
    getItems: getItems,
    getItemDetails: getItemDetails
}