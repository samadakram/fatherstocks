import { getProductsRequest } from '../../../core/product/productActions';

import { serviceFilterQuery } from './service';

import { PRODUCT_DISPLAY } from '../../../core/utils/values';

const displayCardsConfig = {
    [PRODUCT_DISPLAY]: {
        title: 'Product',
        profileType: PRODUCT_DISPLAY,
        stateSelector: (state) => state.product.categoryProductData,
        isFetchingSelector: (state) => state.products.isFetching,
        request: getProductsRequest,
        selectedFilterQuery: serviceFilterQuery,
    },
};

export default displayCardsConfig;
