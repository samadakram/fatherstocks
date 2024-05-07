const serviceFilterQuery = (selectedFilters) => {
    const { brands, size, categories, condition, sortBy, price, subCategory, subSubCategory } = selectedFilters;
    const query = {};

    if (brands?.selected?.length > 0) {
        query.brandsId = brands?.selected?.map(brand => +brand.id).join(',');
    }

    if (categories?.selected?.length > 0) {
        query.categoryId = categories?.selected?.map(category => category.id).join(',');
    }

    if (subCategory?.selected?.length > 0) {
        query.subCategoryId = subCategory?.selected?.map(cat => cat.id).join(',');
    }

    if (subSubCategory?.selected?.length > 0) {
        query.subSubCategoryId = subSubCategory?.selected?.map(cat => cat.id).join(',');
    }

    if (size?.selected?.length > 0) {
        query.sizeId = size?.selected?.map(sz => +sz.id).join(',');
    }

    if (condition?.selected?.length > 0) {
        query.conditionId = condition?.selected?.map(c => +c.id).join(',');
    }

    if (sortBy?.selected?.length > 0) {
        query.sortById = sortBy?.selected?.map(s => +s.id).join(',');
    }

    if (price) {
        console.log('ss');
        query.price = `${price?.priceFrom},${price?.priceTo}`;
    }

    return query;
};

// eslint-disable-next-line import/prefer-default-export
export { serviceFilterQuery };
