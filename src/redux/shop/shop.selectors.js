import { createSelector } from 'reselect'

const selectShop = (state) => state.shop

export const selectShopCollections = createSelector([selectShop], (shop) => shop.collections)

export const selectCollection = (collectionUrlParam) =>
	createSelector([selectShopCollections], (collections) =>
		collections ? collections[collectionUrlParam] : null
	)

export const selectCollectionsAsArray = createSelector([selectShopCollections], (collections) =>
	collections ? Object.keys(collections).map((key) => collections[key]) : []
)

export const selectIsFetchingCollections = createSelector([selectShop], (shop) => shop.isFetching)

export const selectIsCollectionsLoaded = createSelector([selectShop], (shop) => !!shop.collections)
