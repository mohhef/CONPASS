/* eslint-disable no-undef */
const { reloadApp } = require('detox-expo-helpers');

describe('Example', () => {
  beforeEach(async () => {
    await reloadApp();
  });

  it('should have map', async () => {
    await expect(element(by.id('map'))).toBeVisible();
  });

  it('should have searchBar', async () => {
    await expect(element(by.id('searchBar'))).toBeVisible();
  });

  it('should have campus toggle', async () => {
    await expect(element(by.id('switchCampuses'))).toBeVisible();
  });

  it('should have campus current building', async () => {
    await expect(element(by.id('withinBuilding'))).toBeVisible();
  });

  it('should have shuttle service', async () => {
    await expect(element(by.id('shuttle'))).toBeVisible();
  });

  it('should show menu after selecting burger', async () => {
    await element(by.id('burger')).tap();
    await expect(element(by.text('menu'))).toBeVisible();
  });
});
