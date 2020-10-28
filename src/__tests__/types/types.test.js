const { types } = require("../../types/types")


describe('Test to Types', () => {
  
  test('should have this types', () => {
    
    expect( types ).toEqual({
      uiOpenModal: '[UI] Modal Open - alert',
  uiCloseModal: '[UI] Modal Close - alert',

  newOpenDetail: '[News] Open New',
  newCloseDetail: '[News] Close New',
  newsLoaded: '[News] News Loaded ',
  newDeleted: '[News] News Deleted ',
  newCDetailLoaded: '[News] New Detail Loaded ',
  newCategoryLoaded: '[News] New Category Loaded ',
  newCountryLoaded: '[News] New Country Loaded ',

  statsCategoryLoaded: '[Stats] Statistics Category Loaded',
  statsCategoryConsumed: '[Stats] Statistics Category Consumed',

  adminUserLoaded: '[Admin] Users Loaded',
  adminUserChanged: '[Admin] Users Updated',
  adminUserDeleted: '[Admin] Users Deleted',

  authChecking: '[Auth] Cheking login state',
  authCheckingFinish: '[Auth] Finish Cheking login state',
  authStartLogin: '[Auth] Start login',
  authLogin: '[Auth] login',
  authStartRegister: '[Auth] Start Register',
  authStartTokenRenew: '[Auth] Start token Renew',
  authLogout: '[Auth] Logout',
  
  searchNewsLoaded: '[Search] Search news loades',
  searchValue: '[Search] Search value'
    })

  })  

})
