import { createSelector } from 'reselect'

const selectUser = (state) => state.user

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser)

export const selectIsUserSigningIn = createSelector([selectUser], (user) => user.isSigningIn)
